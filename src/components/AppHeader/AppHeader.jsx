import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppHeader() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Cookbook</Navbar.Brand>
      </Container>
      <Container>
        <Link to={`/novy-recept`}>
          <Button size="sm" variant="success">
            Přidat recept
          </Button>
        </Link>
        <Link to={'/prilohy'}>
          <Button size="sm" variant="success" href="/prilohy">
            Přílohy
          </Button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
