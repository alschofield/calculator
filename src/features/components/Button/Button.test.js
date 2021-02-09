import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Button from './Button';

afterAll(cleanup)

test('renders button tag', () => {
  render(
	  <Button/>
  );

  // button should exist
  expect(screen.getByTestId('button-container'))
});
