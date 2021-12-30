import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



export default function Topbar() {

    return(
        <>
        <style type="text/css">
    {`
    .navbar.bg-color {
      background-color: #010617;
      color: white;
      
    }

    h2{
        color:white;
        font-size:2.5rem;
      }

    `}
  </style>

  <Navbar bg="color">
  <Container>
    <Navbar.Brand href="#home">
      <h2>DoomGenerator</h2>
    </Navbar.Brand>
  </Container>
  </Navbar>
  <br />
</>

    )

}
