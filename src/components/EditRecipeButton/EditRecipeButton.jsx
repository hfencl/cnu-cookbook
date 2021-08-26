import React from 'react';
import { api } from '../../api';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function EditRecipeButton({ data }) {
  const { slug } = useParams();
  const handleDeleteRecipe = () => {
    api
      .get(`/recipes/${slug}`)
      .then(({ data }) => {
        //console.log(data._id);
      })
      .catch();
  };
  return (
    <>
      <Link to={`/edit-recept/${slug}`}>
        <Button variant="outline-warning" onClick={handleDeleteRecipe}>
          Upravit recept
        </Button>
      </Link>
    </>
  );
}
