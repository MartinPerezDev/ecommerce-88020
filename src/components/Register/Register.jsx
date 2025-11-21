import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import db from "../../db/db.js";

import "./Register.css";

const Register = () => {
  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      // 1 - crear el usuario en nuestro servicio de auth
      const userCredential = await createUserWithEmailAndPassword(auth, dataForm.email, dataForm.password);
      if(!userCredential) throw new Error("Error al crear el usuario");

      // 2 - una vez creado, guardamos su informacion en nuestra base de datos
      await setDoc( doc(db, "users", userCredential.user.uid), {
        username: dataForm.username,
        email: dataForm.email,
        avatar: "default.jpg"
      });

      // 3 - enviamos el email de verificacion
      await sendEmailVerification(userCredential.user);

      // 4 redireccionamos al usuario al login
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <form className="form-register" onSubmit={handleSubmitForm}>
        <h2>Registro</h2>

        <div className="input-box">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            className="input"
            placeholder="Nombre de usuario"
            type="username"
            id="username"
            name="username"
            value={dataForm.username}
            onChange={handleChangeInput}
          />
        </div>

        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Contraseña</label>
          <input
            className="input"
            placeholder="Contraseña"
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChangeInput}
          />
        </div>

        <button className="submit" type="submit">Registrarme</button>

        <div className="button-to-login">
          <p>Ya tienes un usuario</p>
          <Link className="link" to="/login">Iniciar sesion!</Link>
        </div>
      </form>
    </div>
  );
};
export default Register;