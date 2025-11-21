import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [viewItemCount, setViewItemCount] = useState(true);

  const addToCart = (count) => {
    setViewItemCount(false);
    const newProduct = { ...product, quantity : count };
    addProduct(newProduct);
  }

  return (
    <div className='item-detail'>
      <div className='item-detail-image-content'>
        <img src={product.image} className='item-detail-image' alt="" />
      </div>

      <div className='item-detail-text-content'>
        <p className='item-detail-text'>{product.name}</p>
        <p className='item-detail-text-description'>{product.description}</p>
        <p className='item-detail-text'>${product.price}</p>
        {
          viewItemCount ? (
            <ItemCount stock={product.stock} addToCart={addToCart} />
          ):(
            <button>Ir al carrito</button>
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail