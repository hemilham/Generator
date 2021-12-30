import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Uploader from '../Uploader/Uploader'

export default function ContentPage(){
  return(
    <>
    <style type="text/css">
    {`
    .navbar.bg-color {
      background-color: #010617;
      color: white;
      
    }

    h3{
        color:#010617;
        font-size:2.5rem;
      }

    `}
  </style>

      <Container>
  <Row>
    <Col>
      <div>
        <h3>Uploader</h3>
        <Uploader></Uploader>
        <button type="button" class="btn btn-outline-dark">Generate</button>
      </div>
    </Col>
    <Col>
    <div>
        <h3>Preview</h3>
      </div>
    </Col>
  </Row>
</Container>

    </>
  )
}