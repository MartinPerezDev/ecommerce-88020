import { createContext, useState } from "react";

//creamos nuestro context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (newProduct) => {
    //tarea: evitar duplicados y en el caso de que el producto este en el carrito, entonces sumar cantidades
    setCart( [ ...cart, newProduct ] );
  }

  const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0 );
    return quantity;
  }

  const totalPrice = () => {
    const total = cart.reduce( (total, productCart ) => total + ( productCart.price * productCart.quantity ), 0 );
    return total;
  }

  const deleteProductById = (productId) => {
    const productsFiltered = cart.filter( (productCart) => productCart.id !== productId );
    setCart(productsFiltered);
  }

  const deleteCart = () => {
    setCart([]);
  }

  return(
    <CartContext.Provider value={ { cart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } } >
      {children}
    </CartContext.Provider>
  )
};

export { CartContext, CartProvider };