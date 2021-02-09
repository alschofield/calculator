import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Operators from './Operators';

afterAll(cleanup)

test('renders 0perators component', () => {
  render(
	  <Operators/>
  );

  // Operators component should exist
  expect(screen.getByTestId('operators-container'))
});
