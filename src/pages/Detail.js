import React, { useEffect, useState } from "react";
// router params
import { useParams } from "react-router-dom";

function Detail(props) {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(params);
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [params]);

  return (
    <div>
      {/* // card detail */}
      <div className="card" style={{ width: "30rem", margin:'0 auto' }}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            <strong>Genero:</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
