import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import SearchBar from "../components/SearchBar";
import PaginationBar from "../components/PaginationBar";
import getCharacters from "../services/api";
// public logo
import logo from "../assets/logo.png";


const styles = {
  logoHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    width: "40rem",
  }
}


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // filter
  const [name,setName] = useState("");
  const [status,setStatus] = useState("");
  const [gender,setGender] = useState("");


  const handleFilter = (filterData) => {
    console.log('filterData');
    if (filterData.key === "search") setName(filterData.value);
    if (filterData.key === "status") setStatus(filterData.value);
    if (filterData.key === "gender") setGender(filterData.value);
  };

 

  const getCharacterPage = (q) => {
    console.log('getCharacterPage', q);
    getCharacters(q).then((data) => {
      setData(data.results);
      setTotalCharacters(data.info.count);
      setTotalPages(data.info.pages);
      setIsLoading(false);
    });
  }

  const openPage = (param) => {
    console.log(param);
    console.log('Pagina: ', param);
    setPage(page + param);
  };

  useEffect(() => {
    console.log('useEffect');
    let queryString = `page=${page}&name=${name}&status=${status}&gender=${gender}`;
    getCharacterPage(queryString);
  }, [name, status, gender, page]);

  return <div className="App">
     <div style={styles.logoHeader}>
        <img src={logo}  alt="logo" id="logo" className="App-logo-spin" />
      </div>
      <SearchBar handleFilter={handleFilter} />
      <PaginationBar openPage={openPage} totalPages={totalPages} totalCharacters={totalCharacters}/>
      {data ? <ListCard data={data} /> : <p className="text-light">No hay personajes ( Revisar Filtro) ...</p>}
  </div>;
}

export default App;
