import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
export  function Menu(props) {
    return  <Navbar bg="dark" variant="dark">
    <Container>
    <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">{props.product}</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">User</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  }