import React from 'react';
import { Form, Container, Col, Row, InputGroup } from 'react-bootstrap';

function NewRecipeInfo({ payload, setPayload }) {
  const infoHandler = (event) => {
    setPayload({ ...payload, [event.target.id]: event.target.value });
  };
  //console.log(payload);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form.Group
              className="title"
              name="title"
              controlId="title"
              required
              value={payload.title}
              onChange={infoHandler}
            >
              <Form.Label>Název receptu</Form.Label>
              <Form.Control type="text" placeholder="Název receptu" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="preparationTime"
              value={payload.title}
              onChange={infoHandler}
            >
              <Form.Label>Doba přípravy</Form.Label>
              <Form.Control type="number" placeholder="Doba přípravy" min={0} />
              <InputGroup.Text>min</InputGroup.Text>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="servingCount"
              value={payload.servingCount}
              onChange={infoHandler}
            >
              <Form.Label>Počet porcí</Form.Label>
              <Form.Control type="number" placeholder="Počet porcí" min={0} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="sideDish"
              value={payload.sideDish}
              onChange={infoHandler}
            >
              <Form.Label>Příloha</Form.Label>
              <Form.Control type="text" placeholder="Příloha" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="directions"
              value={payload.directions}
              onChange={infoHandler}
            >
              <Form.Label>Postup</Form.Label>
              <Form.Control as="textarea" rows={12} placeholder="Postup" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewRecipeInfo;
