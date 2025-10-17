import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="" />

      <ul className="categories">
        <li>Teclados</li>
        <li>Mouse</li>
        <li>Auriculares</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar