import { useState } from "react";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if(count > 1){
      setCount( count - 1 );
    }
  }

  const handleClickSumar = () => {
    if( count < stock ){
      setCount( count + 1 );
    }
  }

  return (
    <div>
      <button onClick={handleClickRestar} >-</button>
      <p>{count}</p>
      <button onClick={handleClickSumar}>+</button>

      <button onClick={ () => addToCart(count) } >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount