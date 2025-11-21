import { createContext, useState, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import db from "../db/db.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, async(user)=> {
      if(user){
        const userRef = doc(db, "users", user.uid);
        const dataDb = await getDoc(userRef);
        const userData = { id: dataDb.id, ...dataDb.data() };
        setUser(userData);
      }
      setUserLoading(false);
    });
  }, [])
  

  const signOutUser = async() => {
    await signOut(auth);
    setUser({});
  }

  return(
    <AuthContext.Provider value={ { user, userLoading, signOutUser } }>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };