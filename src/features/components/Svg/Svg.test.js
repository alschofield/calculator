import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Svg from './Svg';

afterAll(cleanup)

test('renders svg tag', () => {
  render(
	  <Svg/>
  );

  // svg should exist
  expect(screen.getByTestId('svg-container'))
});
