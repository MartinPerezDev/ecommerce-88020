import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const productsRef = collection(db, "products");

  const getProducts = async() => {
    try {
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  const getProductsByCategory = async() => {
    try {
      const q = query( productsRef, where( "category", "==", category ) );
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=> {
    if(category){
      getProductsByCategory();
    }else{
      getProducts();
    }
  }, [category]);

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