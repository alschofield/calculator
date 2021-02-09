import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ListItem from './ListItem';

afterAll(cleanup)

test('renders listitem tag', () => {
  render(
	  <ListItem/>
  );

  // list item should exist
  expect(screen.getByTestId('listitem-container'))
});
