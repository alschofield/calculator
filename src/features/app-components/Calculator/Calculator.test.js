import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Calculator from './Calculator';

afterAll(cleanup)

test('renders calculator page', () => {
  render(
	  <Calculator/>
  );

  // calculator page should exist
  expect(screen.getByTestId('calculator-container'))
});
