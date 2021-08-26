import React from 'react';
import { Form, Col } from 'react-bootstrap';

function NewRecipeIngredients({ ingredient, setIngredient }) {
  const ingredientHandler = (event) => {
    setIngredient({ ...ingredient, [event.target.id]: event.target.value });
    //console.log(event.target.value);
  };

  return (
    <>
      <Col>
        <Form.Group
          className="mb-3"
          controlId="name"
          value={ingredient.name}
          onChange={ingredientHandler}
        >
          <Form.Label>Ingredience</Form.Label>
          <Form.Control type="text" placeholder="Ingredience" />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group
          className="mb-3"
          controlId="amount"
          value={ingredient.amount}
          onChange={ingredientHandler}
        >
          <Form.Label>Množství</Form.Label>
          <Form.Control type="number" placeholder="Množství" min={0} />
        </Form.Group>
      </Col>
      <Col>
        {' '}
        <Form.Group
          className="mb-3"
          controlId="amountUnit"
          value={ingredient.amountUnit}
          onChange={ingredientHandler}
        >
          <Form.Label>Jednotka</Form.Label>
          <Form.Control type="text" placeholder="Jednotka" />
        </Form.Group>
      </Col>
    </>
  );
}

export default NewRecipeIngredients;
