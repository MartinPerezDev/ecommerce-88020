import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import getProducts from "../../data/products.js";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    //mostrar pantalla de cargando
    setLoading(true);

    getProducts()
      .then((data)=> {
        if(category){
          const productsFilter = data.filter((product)=> product.category === category );
          setProducts(productsFilter);
        }else{
          setProducts(data);
        }
      })
      .finally(()=> {
        //quitar pantalla de cargando
        setLoading(false);
      })

  }, [category])

  return (
    <div className="itemlistcontainer">
      <h2>{greeting}</h2>
      {
        loading ? <div>Cargando...</div> : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer