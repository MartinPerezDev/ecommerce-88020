
const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" />
      <h2>{product.name}</h2>
      <h2>{product.description}</h2>
      <h2>Precio: {product.price}</h2>
    </div>
  )
}

export default ItemDetail