import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider, themes } from 'schofield-themes';
import { themes as calcThemes } from './themes';
import App from './App';

beforeAll(() => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={{ ...themes.dark, ...calcThemes.dark }}>
        <App />
      </ThemeProvider>
    </Provider>
  )
})
afterAll(cleanup)

test('renders react app', () => {
  // app container should exist
  expect(screen.getByTestId("app-container"))
  // nav should exist
  expect(screen.getByTestId("nav-container"))
  // home page nav item should exist
  expect(screen.getAllByTestId("navitem-container"))
});
