import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/teclados" className="category" >Teclados</Link>
        </li>
        <li>
          <Link to="/category/mouse" className="category" >Mouse</Link>
        </li>
        <li>
          <Link to="/category/auriculares" className="category" >Auriculares</Link>
        </li>

        <li>
          <Link to="/register" className="category" >Registro</Link>
        </li>

        <li>
          <Link to="/login" className="category" >Iniciar sesion</Link>
        </li>

        <li>
          <Link to="/profile" className="category" >Mi Perfil</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar