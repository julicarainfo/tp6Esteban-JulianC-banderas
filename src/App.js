import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [puntos, setPuntos] = useState();
  const [banderas, setBanderas] = useState([{}]);
  const [respuesta, setRespuesta] = useState();

  useEffect(() => {axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(res => {
      console.log(res);
      (
        [
          ...banderas,
          {
            id: res.data.data.id,
            name: res.data.data.name,
            flag: res.data.data.flag,
          }
        ]
      );
        })})
  return (
    <body>
      <div>
        <h1>Bandera</h1>
        {banderas.map(bandera=><div><img src={bandera}></img>)}     
        <label >Hola</label>  
        <input type="text"></input>
        
      </div> 
    </body>

  );
}

export default App;
