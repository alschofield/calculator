import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Container from './Container';

afterAll(cleanup)

test('renders container tag', () => {
  render(
	  <Container/>
  );

  // container should exist
  expect(screen.getByTestId('container'))
});
