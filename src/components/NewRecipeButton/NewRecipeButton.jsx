import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewRecipeButton() {
  return (
    <>
      <Link to={`/novy-recept`}>
        <Button variant="primary">Přidat recept</Button>
      </Link>
    </>
  );
}
export default NewRecipeButton;
