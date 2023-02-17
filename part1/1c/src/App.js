// CONTENIDO: 1c-estados-componentes-y-control-eventos

import './App.css';
import { useState } from 'react';


const WarningNotUsed = () => {
  return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfCliscks = ({clicks}) => {
  return <p>{clicks.join(", ")}</p>
}

function App() {

  // const [left, setLeft] = useState(10);
  // const [right, setRight] = useState(20);

  //englobar todo en estados mediante objetos, aunque mejor seguir ejemplo anterior comentado para atomizar estados
  const [ counters, setCounters ] =  useState({
    left: 0,
    right: 0,
    mensaje: 'Mensaje en el estado'
  })


  // englobar estados mediante arrays
  const [clicks, setClicks] = useState([])


  //modo 1 manejo estados
  const handleClickLeft = (event) => {
    //event.preventDefault();

    const newCountersState = {
      left: counters.left + 1,
      right: counters.right,
      mensaje: counters.mensaje
    }
    setCounters(newCountersState);
    setClicks(prevClicks =>  ([...prevClicks, 'L']))
  }

  //modo 2 manejo estados
  const handleClickRight = () => {
    setCounters({
      //nos traemos todas las propiedades del estado inicial "counters" con spread operator ...x
      ...counters,
      right: counters.right + 1,
    });
    setClicks(prevClicks =>  ([...prevClicks, 'R']))
  }

  const handleReset = () => {
    setCounters({
      left: 0,
      right: 0,
      mensaje: 'Mensaje en el estado'
    });
    setClicks([])

  }

  return (
    <div className="App">

      {counters.left}&nbsp;
      {/* <a href="#" onClick={handleClickLeft}>Left</a> */}

      <button onClick={handleClickLeft}>Left</button>
      <button onClick={handleClickRight}>Right</button>&nbsp;
      {counters.right}
      <p><button onClick={handleReset}>Reset</button></p>
      <p>Clicks Totales: {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {/* Rendderizado condicional */}
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfCliscks clicks={clicks} />
      )}
    </div>
  );
}

export default App;
