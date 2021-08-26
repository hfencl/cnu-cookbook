import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { Ingredients } from '../components/Ingredients/';
import { DeleteButton } from '../components/DeleteButton/DeleteButton';
import { Container, Form, Col, Row } from 'react-bootstrap';
import { EditRecipeButton } from '../components/EditRecipeButton/EditRecipeButton';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [{ data, error, loading }, setRecipeDetail] = useState({
    data: {},
    error: '',
    loading: true,
  });
  useEffect(() => {
    api
      .get(`/recipes/${slug}`)
      .then(({ data }) => {
        //console.log(data);
        setRecipeDetail({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeDetail({ data: {}, error: 'Hups, něco se pokazilo ...', loading: false });
      });
  }, [slug]);
  if (loading) {
    return 'Loading ...';
  }
  if (!!error) {
    return error;
  }
  return (
    <>
      <Container>
        <DeleteButton />
        <EditRecipeButton />
        <h1>{data.title}</h1>
        <p>Délka přípravy: {data.preparationTime}</p>
        <p>Počet porcí: {data.servingCount}</p>
        <Row>
          <Col>
            <Form.Control as="textarea" rows="12" readOnly placeholder={data.directions} />
          </Col>

          <Col>
            <p>Ingredience:</p>
            <Ingredients />
          </Col>
        </Row>
      </Container>
    </>
  );
}
// '/recept/13-hodinova-kachna'
