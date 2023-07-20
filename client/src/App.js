
import './App.css';
import { useState } from 'react';
import Axios from "axios";


function App() {


  const [origen,setOrigen] = useState("");
  const [fechadecompra,setFechadecompra] = useState("");
  const [costoporlibra,setCostoporlibra] = useState(0);
  const [libraspromedio,setLibraspromedio] = useState(10);

const maxios = ()=>{
  Axios.post("http://localhost:3001/odc",{
    origen:origen,
    fechadecompra:fechadecompra,
    costoporlibra: costoporlibra,
    libraspromedio: libraspromedio
  }).then (()=>{
    alert("Registro Exitoso");
  });
}

  return (
    <div className="App">
      <div className="camionada">
        <label>Origen: <input 
        onChange={(event)=>{ setOrigen(event.target.value); }}
        type ="text"/></label><br/>

        <label>Fecha de Compra: <input onChange={(event)=>{ setFechadecompra(event.target.value); }}
         type ="date"/></label><br/>

        <label>Costo por Libra: <input onChange={(event)=>{ setCostoporlibra(event.target.value); }}
         type ="number"/></label><br/>

        <label>Libras promedio:</label><br/>

        <button onClick={maxios}>Ingresar</button>
      </div>
    </div>
  );
}

export default App;
