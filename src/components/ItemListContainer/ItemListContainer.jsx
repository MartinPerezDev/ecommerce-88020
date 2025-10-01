import getProducts from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data)
      })

  }, [])

  console.log(products)

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer