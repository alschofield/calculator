import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterAll(cleanup)

test('renders footer', () => {
  render(
    <Footer />
  );

  // footer should exist
  expect(screen.getByTestId('footer-container'))
});
