import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Home from './Home';

afterAll(cleanup)

test('renders home page', () => {
  render(
	  <Home/>
  );

  // home page should exist
  expect(screen.getByTestId('home-container'))
});
