import Card from "react-bootstrap/Card";



const NameCard = (props) => {
  return (
    <Card className="citiesCard">
      <Card.Body>
        <Card.Text className="text-center fs-5">
         {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="top" src={props.img} className="cardImg" />

    </Card>
  );
};

export default NameCard;