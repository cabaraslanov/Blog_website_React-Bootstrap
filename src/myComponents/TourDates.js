import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import CitiesCard from "./CitiesCard";
import CityCardImg1 from "../assets/newyork.jpg";
import CityCardImg2 from "../assets/paris.jpg";
import CityCardImg3 from "../assets/sanfran.jpg";
import "./styleComp.css";

const TourDates = () => {
  return (
    <Container fluid className="bg-black py-5">
      <Row>
        <Col className="text-center">
          <p className="tourP1 fs-2 text-light">TOUR DATES</p>
          <p className="tourP2">Remember to book your tickets!</p>
        </Col>
      </Row>

      <Container className="d-flex flex-column gap-5 tourDate">
        <Row className="d-flex flex-column ">
          <Col>
            <div className="w-100 bg-light gap-4 px-3 d-flex align-items-center">
              <p>September</p>
              <h6>
                <Badge bg="danger">Sold out</Badge>
              </h6>
            </div>
          </Col>

          <Col>
            <div
              items="middle"
              className="w-100 bg-light  border border-1 d-flex align-items-center gap-4 px-3"
            >
              <p>October</p>
              <h6>
                <Badge bg="danger">Sold out</Badge>
              </h6>
            </div>
          </Col>

          <Col>
            <div className="w-100 bg-light px-3 d-flex justify-content-between">
              <p>November</p>
              <Badge bg="black" className="badge3">
                3
              </Badge>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={3} className="d-flex justify-content-between gap-4 gap-md-0">
          <Col className="d-flex justify-content-center">
            <CitiesCard
              img={CityCardImg1}
              title="New York"
              p="Fri 27 Nov 2016"
            />
          </Col>
          <Col className="d-flex justify-content-center">
            <CitiesCard img={CityCardImg2} title="Paris" p="Sat 28 Nov 2016" />
          </Col>
          <Col className="d-flex justify-content-center citiesCard">
            <CitiesCard
              img={CityCardImg3}
              title="San Francisco"
              p="Sun 29 Nov 2016"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default TourDates;
