import React from 'react';
import { Form } from 'react-bootstrap';

function RecipeFilter({ recipe, setRecipe }) {
  const onChangeHandler = (event) => {
    setRecipe(event.target.value);
    //console.log(recipe);
  };
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Recept</Form.Label>
        <Form.Control
          type="text"
          placeholder="Napište název receptu"
          value={recipe}
          onChange={onChangeHandler}
        />
      </Form.Group>
    </Form>
  );
}

export default RecipeFilter;
