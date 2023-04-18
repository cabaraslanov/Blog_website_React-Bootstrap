import Container from "react-bootstrap/Container";
import NameCard from "./NameCard";
import { Col, Row } from "react-bootstrap";
import cardImg1 from "../assets/cardImg1.jpg";
import cardImg2 from "../assets/cardImg2.jpg";
import cardImg3 from "../assets/cardImg3.jpg";

const CompText = () => {
  return (
    <>
      <Container className="textComp text-center py-5 mx-auto">
        <p className="fs-2 fw-500">THE BAND</p>
        <p className="text-secondary">We love music</p>
        <p>
          We have created a fictional band website. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </Container>

      <Container className="tourDate mb-4">
        <Row xs={1} md={3} className="gap-4 gap-md-0">
          <Col className="">
            <NameCard
            img={cardImg1}
            text="Andrew Wise"
            className="nameCard"
            />
          </Col>

          <Col className="">
            <NameCard  
            img={cardImg2}
            text="Richard Brutyo"
            className="nameCard"
            />
          </Col>

          <Col className="">
            <NameCard 
            img={cardImg3}
            text="Ben Eaton"
            className="nameCard"
            />
          </Col>
        </Row>


      </Container>
    </>
  );
};

export default CompText;
