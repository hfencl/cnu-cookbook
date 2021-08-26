import React, { useState, useEffect } from 'react';
//import { Form } from 'react-bootstrap';
//import { mockRecipes } from './mockData';
import { RecipeList } from '../components/RecipeList/';
import { RecipeFilter } from '../components/RecipeFilter/';
import { api } from '../api';

export function RecipeListPage() {
  const [recipe, setRecipe] = useState('');
  const [recipeList, setRecipeList] = useState({ data: [], error: '', loading: true });
  const filteredRecipes = recipeList.data.filter(({ title }) =>
    title.toLowerCase().includes(recipe.toLowerCase()),
  );

  useEffect(() => {
    api
      .get('/recipes')
      .then(({ data }) => {
        //console.log(data);
        setRecipeList({ data, error: '', loading: false });
      })
      .catch(() => {
        setRecipeList({ data: [], error: 'Něco se pokazilo', loading: false });
      });
  }, []);

  if (recipeList.loading) {
    return 'Loading...';
  }

  if (recipeList.error !== '') {
    return recipeList.error;
  }

  return (
    <>
      <h1>Recepty</h1>

      <RecipeFilter recipe={recipe} setRecipe={setRecipe} />
      <RecipeList recipes={filteredRecipes} />
    </>
  );
}
