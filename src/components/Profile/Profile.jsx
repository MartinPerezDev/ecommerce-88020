import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, userLoading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //Protegemos el componente Profile para que solo ingresen usuarios logueados
  useEffect(() => {
    if(!user.id && !userLoading){
      navigate("/login");
    }
  }, [user, userLoading])
  

  if(userLoading){
    return(
      <div>
        <h1>Cargando....</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>Perfil de usuario</h1>
      <h3>Bienvenido {user.username}</h3>
      <button onClick={signOutUser} >Cerrar sesion</button>
    </div>
  )
}

export default Profile