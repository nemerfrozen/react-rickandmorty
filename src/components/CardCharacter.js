
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import style from '../styles/cardStyle.module.css'


const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: 'fadeIn'
  },
  cardStyle: {
    width: '18rem', 
    height: '25rem', 
    marginTop: '0.5rem',
    backgroundColor: '#10AAC2',
    color: 'white',
},


}



function CardCharacter({ id ,name, image, status }) {
  return (
    <Link to={`/detail/${id}`}>
    <Card style={{...styles.fadeIn, ...styles.cardStyle}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className={style.cardTitle}>{name}</Card.Title>
        <Card.Text>
            {
                status === 'Alive' ? <span className="btn btn-success">Vivo</span> :
                status === 'Dead' ? <span className="btn btn-danger">Muerto</span> :
                <span className="btn btn-warning">?</span>
            }   
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    
  )
}




export default CardCharacter