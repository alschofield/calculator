import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterAll(cleanup)

test('renders header tag', () => {
  render(
	  <Header/>
  );

  // header should exist
  expect(screen.getByTestId('header-container'))
});
