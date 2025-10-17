import carrito from "../../assets/img/carrito.png";
import "./cartwidget.css";

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <img src={carrito} alt="" />
      <p>2</p>
    </div>
  )
}

export default CartWidget