import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import NumPad from './NumPad';

afterAll(cleanup)

test('renders numpad page', () => {
  render(
	  <NumPad/>
  );

  // NumPad page should exist
  expect(screen.getByTestId('numpad-container'))
});
