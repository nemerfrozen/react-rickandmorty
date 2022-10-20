import CardCharacter from "./CardCharacter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



    

function ListCard({data}) {

  

  return (
    <div>
      
      <Row>
          {data.map((item) => (
            <Col md="3" xs="12" sm="6" lg="3" xl="3" className="mt-2">
            <CardCharacter
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
            />
            </Col>
          ))}
        
          
        
      </Row>
    </div>
  );
}

export default ListCard;
