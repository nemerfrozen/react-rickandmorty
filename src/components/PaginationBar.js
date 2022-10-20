
import Col from "react-bootstrap/Col";
function PaginationBar(props) {
  const openPage = (page) => {
    console.log(page);
    props.openPage(page);
  };

  return (
    <Col>
    <nav aria-label="Page navigation example" className="mt-2 d-flex flex-row justify-content-between">
      <ul className="pagination">
        <li className="page-item">
        <button  className="page-link" onClick={() => openPage(-1)}>
            Atras
          </button>
        </li>
        <li className="page-item">
          <button  className="page-link" onClick={() => openPage(1)}>
            Siguiente
          </button>
        </li>
      </ul>
      <ul className="pagination">
      <li className="page-item">
          <p className="text-light ml-2">Total de personajes: {props.totalCharacters}</p>
        </li>
       
      </ul>
    </nav>
    </Col>
  );
}

export default PaginationBar;
