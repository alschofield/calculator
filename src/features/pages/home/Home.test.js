import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ThemeProvider, themes } from 'schofield-themes';
import { themes as calcThemes } from '../../../themes';

beforeEach(() => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={{ ...themes.dark, ...calcThemes.dark }}>
        <Home />
      </ThemeProvider>
    </Provider>
  )
})
afterAll(cleanup)

test('renders home page', () => {
  // home page should exist
  expect(screen.getByTestId('home-container'))
});

test('renders calculator', () => {
  // home page should exist
  expect(screen.getByTestId('calculator-container'))
});
