import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Image from './Image';

afterAll(cleanup)

test('renders image tag', () => {
  render(
	  <Image/>
  );

  // image should exist
  expect(screen.getByTestId('image-container'))
});
