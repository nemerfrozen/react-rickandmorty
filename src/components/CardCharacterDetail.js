import React from "react";

function CardCharacterDetail({ data }) {
  return (
    <div>
      <div className="card" style={{ width: "25rem", margin: "0 auto" }}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-primary">{data.name}</h5>
          <p className="card-text">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="text-primary">Genero:</span>
                {data.gender}
              </li>

              <li className="list-group-item">
                <span className="text-primary">Especie:</span> {data.species}
              </li>
              <li className="list-group-item">
                <span className="text-primary">Tipo:</span> {data.type}
              </li>
              <li className="list-group-item">
                <span className="text-primary">Estatus:</span>

                {data.status === "Alive" ? (
                  <span className="btn btn-success">Vivo</span>
                ) : data.status === "Dead" ? (
                  <span className="btn btn-danger">Muerto</span>
                ) : (
                  <span className="btn btn-warning">?</span>
                )}
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardCharacterDetail;
