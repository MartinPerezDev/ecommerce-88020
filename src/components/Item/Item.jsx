import "./item.css";

const Item = ({ product }) => {
  return (
    <li className="item">
      <div className="img-item-container">
        <img className="img-item" src={product.image} alt="" />
      </div>
      <div className="text-item">
        <p className="title-item">{product.title}</p>
        <p className="price-item">${product.price}</p>
        <p className="button-item">MÁS INFORMACIÓN</p>
      </div>
    </li>
  )
}

export default Item