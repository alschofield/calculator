import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Anchor from './Anchor';

afterAll(cleanup)

test('renders anchor tag', () => {
  render(
	  <Anchor/>
  );

  // anchor tag should exist
  expect(screen.getByTestId('anchor-container'))
});
