import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemdetail.css";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  const addToCart = (count) => {
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
        <ItemCount stock={product.stock} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default ItemDetail