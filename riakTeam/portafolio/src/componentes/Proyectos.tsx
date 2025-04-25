import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import OIP from '../assets/OIP.jpg'
import B from '../assets/B.jpg'
import wstc from '../assets/wstc.jpg'

function Proyectos() {
  const proyectos = [
    { titulo: "Proyecto 1", descripcion: "Compre un equipo descendido", enlace: "#",imagen: B},
    { titulo: "Proyecto 2", descripcion: "nose", enlace: "#",imagen: OIP},
    { titulo: "Proyecto 3", descripcion: "westcol", enlace: "#",imagen: wstc},
    
  ];

  return (
    <Container className="my-5">
      <Row>
        {proyectos.map((p, i) => (
          <Col md={4} key={i} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{p.titulo}</Card.Title>
                <Card.Text>{p.descripcion}</Card.Text>
                <Card.Img variant='top' src={p.imagen}></Card.Img>
                <Button variant="primary" href={p.enlace} target="_blank">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Proyectos;
