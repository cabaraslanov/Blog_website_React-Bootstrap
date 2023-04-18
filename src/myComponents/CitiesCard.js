import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const CitiesCard = (props) => {
  return (
    <>
      <Card className="citiesCard">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <p className="text-secondary">{props.p}</p>
          <Card.Text>
          Praesent tincidunt sed tellus ut rutrum sed vitae justo.
          </Card.Text>
          <Button variant="dark">Buy Tickets</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CitiesCard;
