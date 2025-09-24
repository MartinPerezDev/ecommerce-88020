import logo from "../../assets/img/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="" />

      <ul className="categories">
        <li>Auriculares</li>
        <li>Teclados</li>
        <li>Mouse</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar