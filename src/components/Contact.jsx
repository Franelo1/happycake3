import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
      <h2 style={{ marginBottom: "50px", fontSize: "3rem", fontFamily: "Arial" }}>Cuéntanos, ¿En que te podemos ayudar?</h2>
      <Form style={{ width: "300px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Dirección de email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa email" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu información con nadie
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Solicitud</Form.Label>
          <Form.Control type="solicitud" placeholder="Ingresa tu solicitud" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Contact
