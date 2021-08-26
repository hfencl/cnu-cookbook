import React from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
//import { NewRecipeButton } from '../components/NewRecipeButton/NewRecipeButton';

export function AppLayout({ children }) {
  return (
    <>
      <AppHeader />

      <Container className="mt-4">{children}</Container>
      <AppFooter />
    </>
  );
}
