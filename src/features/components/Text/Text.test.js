import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Text from './Text';

afterAll(cleanup)

test('renders text tag', () => {
  render(
	  <Text/>
  );

  // text should exist
  expect(screen.getByTestId('text-container'))
});
