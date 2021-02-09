import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import List from './List';

afterAll(cleanup)

test('renders list tag', () => {
  render(
	  <List/>
  );

  // list should exist
  expect(screen.getByTestId('list-container'))
});
