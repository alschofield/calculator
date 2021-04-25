import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Operators from './index';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { ThemeProvider, themes } from 'schofield-themes';
import { themes as calcThemes } from '../../../themes';

beforeAll(() => {
  render(
    <Provider store={store}>
      <Operators theme={{ ...themes.dark.home.container.operators, ...calcThemes.dark.home.container.operators }} />
    </Provider>
  )
})
afterAll(cleanup)

test('renders Operators component', () => {
  // Operators component should exist
  expect(screen.getByTestId('operators-container'))
});
