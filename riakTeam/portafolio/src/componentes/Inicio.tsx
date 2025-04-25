import { Container, Row, Col, Image } from 'react-bootstrap';
import OIP from '../assets/OIP.jpg'; 

function Inicio() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6} className="text-center">
          <Image src={OIP} roundedCircle width="200" />
        </Col>
        <Col md={6} className="text-center text-md-start mt-4 mt-md-0">
          <h2>Hola, soy max el destructor</h2>
          <p>Soy "desarrollador" web con pasión por crear interfaces modernas y responsivas.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
