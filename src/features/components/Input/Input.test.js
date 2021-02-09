import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Input from './Input';

afterAll(cleanup)

test('renders input tag', () => {
  render(
	  <Input/>
  );

  // input should exist
  expect(screen.getByTestId('input-container'))
});
