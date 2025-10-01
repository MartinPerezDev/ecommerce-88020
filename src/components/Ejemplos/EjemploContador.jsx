import { useState, useEffect } from "react";
import EjemploTitulo from "./EjemploTitulo";

const EjemploContador = () => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  }

  const alternarToggle = () => {
    setToggle(!toggle);
  }

  //se ejecuta solo al montar el componente
  //ej: llamadas a api, suscripciones a eventListener
  useEffect(()=> {
    console.log("1er useEffect");
  }, [])

  //se ejecuta en el montaje y cada vez que "contador" cambie su valor
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect(()=> {
    console.log("2do useEffect");
  }, [contador])

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones de monitoreo o registro, actualizaciones generales del componente
  useEffect(()=> {
    console.log("3er useEffect")
  })

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={aumentar} >+</button>

      <p>Boolean: {toggle.toString()}</p>
      <button onClick={alternarToggle} >Alternar valor</button>

      {
        toggle && <EjemploTitulo />
      }
    </div>
  )
}

export default EjemploContador