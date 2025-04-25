import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <Container className="my-5">
      <h2>Contacto</h2>
      <Form onSubmit={manejarEnvio}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} required />
        </Form.Group>
        <Button type="submit" variant="success">Enviar</Button>
      </Form>

      {enviado && <Alert variant="success" className="mt-3">¡Mensaje enviado con éxito!</Alert>}
    </Container>
  );
}

export default Contacto;
