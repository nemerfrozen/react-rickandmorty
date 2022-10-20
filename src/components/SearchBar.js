import React from "react";


function SearchBar(props) {

  const handleInputChange = (event) => {
    props.handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };


  return (
 
     

      <div className="d-flex mt-2">
        <label for="search" className="form-label text-light m-2">Nombre:</label>
        <input className="form-control" id="search" type="text" placeholder="Buscar..."  onChange={handleInputChange}/>
        <label for="status" className="form-label text-light m-2">Estatus:</label>
        <select className="form-control" id="status" onChange={handleInputChange}>
        <option value="">Todos</option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
          <option value="unknown">Otro</option>
        </select>
        <label for="type" className="form-label text-light m-2">Genero:</label>
        <select className="form-control" id="gender" onChange={handleInputChange}>
          <option value="">Todos</option>
          <option value="Female">Femenino</option>
          <option value="Male">Masculino</option>
          <option value="unknown">Otro</option>
        </select>
      </div>
    
  );
}

export default SearchBar;
