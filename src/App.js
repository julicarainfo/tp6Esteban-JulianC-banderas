import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
//      </div>{banderas.map(bandera => <div><img src={bandera}></img>)}
function App() {
  const [banderas, setBanderas] = useState([{}]);
  const [banderaRandom, setBandera] = useState({});
  const [puntos, setPuntos] = useState(0);
  //const[puntosPositivos,setPuntosPositivos]=useState(false);
  useEffect(() => {  
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then(res => {
        console.log(res);
        setBanderas(res.data.data);
        setBandera(getRandomObject(res.data.data));
      })
  }, []);

  const getRandomObject = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
  };
  const agregarRespuesta = (event) => {
    event.preventDefault();
    const respuesta  = event.target.bandera.value;
    setBandera(getRandomObject(banderas));
    if (respuesta === banderaRandom.name) {
      setPuntos(puntos + 10)
    } else {
      setPuntos(puntos - 1);
    }
    /*if(puntos>0){
      setPuntosPositivos(true);
    }
    else setPuntosPositivos(false);*/
    event.target.bandera.value = '';
  }

  return (
    <body>
      <div className='container'>
        <h1>Bandera</h1>
        <img classname="img" src={banderaRandom.flag} />
        <h1 className={ puntos > 0 ? 'colorPuntosVerdes' : 'colorPuntosRojos' }>Puntos: {puntos}</h1>
        <form onSubmit={(e) => agregarRespuesta(e)}>
          <label >¿De que pais es esta bandera?</label>
          <input type="text" placeholder='Bandera (SI NO SABES PONE SENEGAL Y TE SUMO PUNTOS IGUAL)' name='bandera'></input>
          <button type="submit" clase='u-full-width button-primary'>Respuesta</button>
        </form>
      </div>
    </body>

  );
}

export default App;
