import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//      </div>{banderas.map(bandera => <div><img src={bandera}></img>)}
function App() {
  const [banderas, setBanderas] = useState([{}]);
  const [banderaRandom, setBandera] = useState({});
  const [respuesta, setRespuesta] = useState();
  const [puntos, setPuntos] = useState();
  useEffect(() => {
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(res => {
        console.log(res);
        setBanderas(res.data.data);
        /*setBanderas (
           [
             ...banderas,
             {
               id: res.data.data.id,
               name: res.data.data.name,
               flag: res.data.data.flag,
             }
           ]
         );*/
      })
  }, []);
  setBandera(() => getRandomObject(banderas));

  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };
  const agregarRespuesta = (event) => {
    event.preventDefault();
    setRespuesta({
      respuesta: event.target.bandera
    });
    event.target.bandera = '';
  }
  if (respuesta === banderaRandom.name) { setPuntos(puntos + 10) }
  else { setPuntos(puntos - 1) }
  return (
    <body>
      <div>
        <h1>Bandera</h1>
        <form onSubmit={(e) => agregarRespuesta(e)}>
          <label >¿De que pais es esta bandera?</label>
          <input type="text" placeholder='Bandera (SI NO SABES PONE SENEGAL Y TE SUMO PUNTOS IGUAL)' name='bandera'></input>
          <button type="submit" clase='u-full-width button-primary' text='Respuesta'></button>
        </form>


      </div>
    </body>

  );
}

export default App;
