import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';
import { NewRecipePage } from './pages/NewRecipePage';
import { SideDishPage } from './pages/SideDishPage';
import { EditRecipePage } from './pages/EditRecipePage';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={RecipeListPage} />
      <Route path="/recept/:slug" component={RecipeDetailPage} />
      <Route path="/api-test" component={ApiTestPage} />
      <Route path="/edit-recept/:slug" component={EditRecipePage} />
      <Route path="/novy-recept/" component={NewRecipePage} />
      <Route path="/prilohy" component={SideDishPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
