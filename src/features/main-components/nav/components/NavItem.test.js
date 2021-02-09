import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import NavItem from './NavItem';

afterAll(cleanup)

test('renders nav item', () => {
  render(
    <NavItem type='anchor' value='Home' href='/home' />
  );

  // nav item should exist
  expect(screen.getAllByTestId('navitem-container'))
});
