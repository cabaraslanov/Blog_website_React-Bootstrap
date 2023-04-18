import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styleComp.css";



const MyNav = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" >
        <Container fluid >
          <Navbar.Brand href="#" className="text-white">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-white"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 ms-0 ms-lg-5 gap-3">
              <Nav.Link href="#action1" className="navHome text-white">Home</Nav.Link>
              <Nav.Link href="#action2" className="nav text-white">Band</Nav.Link>
              <Nav.Link href="#action3" className="nav text-white">Tour</Nav.Link>
              <Nav.Link href="#action4" className="nav text-white">Contact</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
