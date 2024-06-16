import Card from 'react-bootstrap/Card';

function Cartas(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img className='negrocard' src={props.img} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text>
              {props.poner}
        </Card.Text>
        <Card.Text>
              {props.escribir}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Cartas;