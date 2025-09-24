import { useState } from "react";

const EjemploContador = () => {
  const [ contador, setContador ] = useState(1);
  //let contador = 1;

  const aumentar = () => {
    if(contador < 10){
      setContador( contador + 1 );
    }
  }

  return (
    <div>
      <p>Contador: {contador} </p>
      <button onClick={ aumentar } >+</button>
    </div>
  )
}

export default EjemploContador