import React from 'react';
import { api } from '../../api';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function DeleteButton() {
  const { slug } = useParams();
  const handleDeleteRecipe = () => {
    api
      .get(`/recipes/${slug}`)
      .then(({ data }) => {
        //console.log(data._id);
        api.delete(`/recipes/${data._id}`);
        alert('recept byl smazán');
      })
      .catch();
  };
  return (
    <>
      <Link to={'/'}>
        <Button variant="outline-danger" onClick={handleDeleteRecipe}>
          Smazat recept
        </Button>
      </Link>
    </>
  );
}
