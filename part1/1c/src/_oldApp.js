import './App.css';
import { useState } from 'react';

const Counter = ({number}) =>{
    return <h1>{number}</h1>
}

function App() {

  const [contadorValue, updateContador] = useState(100);

  /*LO ANTERIOR EQUIVALE A ESTO
    const contador = useState(5)
    const contadorValue = contador[0]
    const updateContador = contador[1]
  */

  console.log('render');

  const handleClick = () => {
    updateContador((prevContador) => {
      return prevContador + 1;
    });
  };

  const handleClickReset = () => {
    updateContador(0);
  }

  const sumar = () =>{
    updateContador((prevContador) => {
      return prevContador + 1;
    });
  }
  const restar = () =>{
    if(contadorValue > 0){
      updateContador((prevContador) => {
        return prevContador - 1;
      });
    }
  }

  const MathBtn = (prop) => {
    if(prop.operacion === 'incrementar'){
      return <button onClick={sumar}>Incrementar</button>;
    }
    if(prop.operacion === 'decrementar'){
      return <button onClick={restar}>Decrementar</button>;
    }

  }



  const isEven = contadorValue % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return (
    <div className="App">

      <div>
        <p>El valor del contador es:</p>
        <Counter number = {contadorValue} />
        <p>{mensajePar}</p>
        <button onClick={handleClick}>Incrementar</button>
        <button onClick={handleClickReset}>Reset</button>
        <MathBtn operacion='incrementar' />
        <MathBtn operacion='decrementar' />
      </div>

    </div>
  );
}

export default App;
