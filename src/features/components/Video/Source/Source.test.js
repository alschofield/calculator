import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Source from './Source';

afterAll(cleanup)

test('renders source tag', () => {
  render(
	  <Source />
  );

  // source tag should exist
  expect(screen.getByTestId('source-container'))
});
