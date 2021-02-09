import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

afterAll(cleanup)

const renderApp = () => (
  <App />
)

test('renders react app', () => {
  render(
    <Provider store={store}>
      {renderApp()}
    </Provider>
  );

  // app container should exist
  expect(screen.getByTestId("app-container"))
  // nav should exist
  expect(screen.getByTestId("nav-container"))
  // home page nav item should exist
  expect(screen.getAllByTestId("navitem-container"))
});
