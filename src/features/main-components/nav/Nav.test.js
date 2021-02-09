import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Nav from './Nav';

afterAll(cleanup)

test('renders nav', () => {
  render(
	  <Nav/>
  );

  // nav should exist
  expect(screen.getByTestId('nav-container'))
  // should have navitem for home
  expect(screen.getAllByTestId('navitem-container'))
});
