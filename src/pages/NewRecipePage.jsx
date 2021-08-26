import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { api } from '../api';
import { useState } from 'react';
import { NewRecipeInfo } from '../components/NewRecipeInfo/';
import { NewRecipeIngredients } from '../components/NewRecipeIngredients/';

export function NewRecipePage() {
  const [payload, setPayload] = useState({
    title: '',
    preparationTime: 0,
    servingCount: null,
    sideDish: 'Nic',
    directions: '',
  });

  const [ingredient, setIngredient] = useState({
    name: '',
    amountUnit: '',
    amount: 0,
  });

  let [ingredList, setIngredList] = useState([]);

  function addIngredient() {
    setIngredList([...ingredList, ingredient]);
  }

  function delIngred(e) {
    const newList = [...ingredList];
    newList.splice(e.target.id, 1);
    setIngredList(newList);
    //console.log(ingredList, newList, e.target.id);
  }

  const postRequestPayload = {
    title: payload.title,
    preparationTime: payload.preparationTime,
    servingCount: payload.servingCount,
    sideDish: payload.sideDish,
    directions: payload.directions,
    ingredients: ingredList,
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    api.post('/recipes', postRequestPayload).then(() => {
      alert('Recept byl přidán');
      //console.log(postRequestPayload);
    });
  };

  return (
    <>
      <h1> {payload.title}</h1>
      <Container fluid>
        <ul>
          {ingredList.map(({ name, amount, amountUnit }, index) => (
            <li id={index}>
              <Row>
                <Col sm="auto">
                  <Button size="sm" variant="outline-danger" onClick={delIngred}>
                    X
                  </Button>
                </Col>
                <Col sm="auto">
                  {name} {amount} {amountUnit}
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </li>
          ))}
        </ul>
        <Form>
          <Row>
            <NewRecipeIngredients ingredient={ingredient} setIngredient={setIngredient} />
          </Row>
          <Button variant="outline-success" onClick={addIngredient}>
            Přidej ingredienci
          </Button>

          <Row>
            <NewRecipeInfo payload={payload} setPayload={setPayload} />
          </Row>

          <Button variant="outline-success" onClick={handleSubmit}>
            Přidat recept
          </Button>
        </Form>
      </Container>
      <div id="nahled"></div>
    </>
  );
}
