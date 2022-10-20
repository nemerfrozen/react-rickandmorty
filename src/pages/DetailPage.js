import React, { useEffect, useState } from "react";

// router params
import { useParams } from "react-router-dom";

import CardCharacterDetail from "../components/CardCharacterDetail";

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
      <CardCharacterDetail data={data} />
    </div>
  );
}

export default Detail;
