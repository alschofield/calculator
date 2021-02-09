import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TextArea from './TextArea';

afterAll(cleanup)

test('renders textarea tag', () => {
  render(
	  <TextArea/>
  );

  // textarea should exist
  expect(screen.getByTestId('textarea-container'))
});
