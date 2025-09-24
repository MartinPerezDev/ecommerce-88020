import NavBar from "./components/NavBar/NavBar";
import auriculares from "./assets/img/auriculares-redragon.jpg";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import EjemploContador from "./components/Ejemplos/EjemploContador";
import './App.css'

function App() {
  const saludo = "Bienvenidos a la clase 2";

  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting={ "Bienvenidos a mi ecommerce" } />
      <h1>Hola Mundo</h1>
      <h1>{saludo}</h1>
      <h1>Hola Mundo</h1>
      <img src={auriculares} alt="" />
      <EjemploContador />
    </div>
  )
}

export default App
