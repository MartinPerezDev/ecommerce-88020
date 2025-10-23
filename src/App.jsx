import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} /> } />
          <Route path="/category/:category" element={ <ItemListContainer greeting={"Bienvenidos a mi ecommerce"} /> } />
          <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <div>Error 404</div> } />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
