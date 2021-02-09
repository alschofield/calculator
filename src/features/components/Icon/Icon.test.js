import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Icon from './Icon';

afterAll(cleanup)

test('renders icon tag', () => {
  render(
	  <Icon/>
  );

  // icon should exist
  expect(screen.getByTestId('icon-container'))
});
