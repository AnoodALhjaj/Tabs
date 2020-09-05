
import {Navbar} from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export default function Navba(){

 return(
<Container>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

  <Navbar.Collapse id="basic-navbar-nav">
 
  <Col>
</Col>
  <Col xs lg="3">
  <Nav >

  <Nav.Link href="/Login">
    Dank memes
  </Nav.Link>
</Nav>
</Col>
  <Col xs lg="5">
<Nav>
<Nav.Link href="./Test" >
Liwnk
</Nav.Link>

<Nav.Link href="./Test">
Liwnk
</Nav.Link>


<Nav.Link href="./Test">
Liwnk
</Nav.Link>
</Nav>

  </Col>

    
    
  </Navbar.Collapse>
</Navbar>
</Container>
)
 }

