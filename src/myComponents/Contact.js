import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ImLocation2, ImPhone } from "react-icons/im";
import { GrMail } from "react-icons/gr";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./styleComp.css";

const Contact = () => {
  return (
    <>
      <Container className="my-3">
        <Row>
          <Col className="text-center">
            <p className="tourP1 fs-2">CONTACT</p>
            <p className="">Fan? Drop a note!</p>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center gap-3">
          <Col className="" xs="10" md="5">
            <div className="d-flex align-items-center gap-2">
              <ImLocation2 />
              <span>Chicago, US</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <ImPhone />
              <span>Phone: +00 151515</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <GrMail />
              <span>Email: mail@mail.com</span>
            </div>
          </Col>

          <Col xs="10" md="5" className="d-flex flex-column gap-3">
            <Form className="d-flex flex-column gap-3">
              <Row className="firstAndLast" xs={1} md={2}>
                <Col >
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>

              <Row>
              <Col>
                <Form.Control type="text" placeholder="Message" />
              </Col>
            </Row>
            </Form>

            <article className="d-flex justify-content-end">
              <Button variant="dark text-uppercase">send</Button>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
