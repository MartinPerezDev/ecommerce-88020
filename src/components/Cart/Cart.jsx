import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } = useContext(CartContext);

  //early return
  if( cart.length === 0 ){
    return(
      <div>
        <h2>No hay productos en el carrito 😢</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }


  return (
    <div>
      {
        cart.map((productCart)=> (
          <div key={productCart.id}>
            <img src={productCart.image} alt="" width={100} />
            <p>{productCart.name}</p>
            <p>precio c/u: {productCart.price}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio parcial: {productCart.price * productCart.quantity}</p>
            <button onClick={ () => deleteProductById(productCart.id) } >Eliminar</button>
          </div>
        ))
      }

      <h2>Precio total: {totalPrice()} </h2>
      <button onClick={deleteCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart