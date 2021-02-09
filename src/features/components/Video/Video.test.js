import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Video from './Video';

afterAll(cleanup)

test('renders video tag', () => {
  render(
	  <Video/>
  );

  // video tag should exist
  expect(screen.getByTestId('video-container'))
});
