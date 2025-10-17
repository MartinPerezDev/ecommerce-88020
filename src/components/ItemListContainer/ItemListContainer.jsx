import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import { getProducts, getProductById, addProduct, setProductById, deleteProductById } from "../../data/fetchApi.js"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data.payload)
      })

    getProductById("68ef979c974b7e897963e7a3")
      .then((data) => {
        console.log(data)
      })

  }, [])

  const newProduct = {
    title: "Mouse Harpoon",
    description: "Mouse Negro y Amarillo",
    image: "/image/harpoon.avif",
    price: 600,
    stock: 2,
    category: "mouse"
  }

  const clickEvento = () => {
    /*
    addProduct(newProduct)
      .then((data)=> {
        console.log(data);
      })
      setProductById("68ef979c974b7e897963e7a3", { price: 7200 })
      .then((data) => {
        console.log(data)
        
        getProducts()
        .then((data) => {
          setProducts(data.payload)
        })
        
      })
    */
    deleteProductById("68ef979c974b7e897963e7a3")
      .then((data) => {
        console.log(data)

        getProducts()
          .then((data) => {
            setProducts(data.payload)
          })
      })
  }


  return (
    <div className="itemlistcontainer">
      <h2>{greeting}</h2>
      <button onClick={clickEvento}>eliminar producto</button>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer