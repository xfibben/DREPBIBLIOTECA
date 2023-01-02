import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function Buscador() {

  const [books, setBooks]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("http://localhost:8080/api/books/")
  .then(response=>{
    setBooks(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.autor.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setBooks(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
    <div className="Buscador">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre de Libro"
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>

     <div className="table-responsive ">
       <table className="table table-sm table-bordered ">
         <thead>
           <tr>
             <th>Titulo</th>
             <th>Autor</th>
             <th>Descripcion</th>
             <th>Categoria</th>
             <th>Hojas</th>
           </tr>
         </thead>

         <tbody>
           {books.map((book)=>(
             <tr key={book.id}>
               <td>{book.title}</td>
               <td>{book.autor}</td>
               <td>{book.descripcion}</td>
               <td>{book.categoria}</td>
               <td>{book.hojas}</td>
             </tr>
           ))}
         </tbody>

       </table>

     </div>
    </div>
  );
}


export default Buscador;
