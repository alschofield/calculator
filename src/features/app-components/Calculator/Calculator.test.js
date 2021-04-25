import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Calculator from './index';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { themes } from 'schofield-themes';
import { themes as calcThemes } from '../../../themes';

beforeEach(() => {
  return render(
    <Provider store={store}>
      <Calculator theme={{ ...themes.dark.home.calculator, ...calcThemes.dark.home.calculator }} />
    </Provider>
  )
});
afterAll(cleanup);

test('renders calculator page', () => {
  // calculator page should exist
  expect(screen.getByTestId('calculator-container'));
});

test('pressing number populates the input field', () => {
  const input = screen.getByTestId('calculator-input');
  const one = screen.getByTestId('numpad-1');

  fireEvent.click(one);

  expect(input).toHaveValue('1');
});

test('C to clear', () => {
  const input = screen.getByTestId('calculator-input');
  const c = screen.getByTestId('numpad-C');

  fireEvent.click(c);

  expect(input).toHaveValue('0');
});

test('addition', () => {
  const input = screen.getByTestId('calculator-input');
  const two = screen.getByTestId('numpad-2');
  const plus = screen.getByTestId('operator-+');
  const equals = screen.getByTestId('operator-=');

  fireEvent.click(two);
  fireEvent.click(plus);
  fireEvent.click(two);
  fireEvent.click(equals);

  expect(input).toHaveValue('4');
});

test('subtraction', () => {
  const input = screen.getByTestId('calculator-input');
  const two = screen.getByTestId('numpad-2');
  const minus = screen.getByTestId('operator--');
  const equals = screen.getByTestId('operator-=');

  fireEvent.click(two);
  fireEvent.click(minus);
  fireEvent.click(two);
  fireEvent.click(equals);

  expect(input).toHaveValue('0');
});

test('multiplication', () => {
  const input = screen.getByTestId('calculator-input');
  const two = screen.getByTestId('numpad-2');
  const multiply = screen.getByTestId('operator-*');
  const equals = screen.getByTestId('operator-=');

  fireEvent.click(two);
  fireEvent.click(multiply);
  fireEvent.click(two);
  fireEvent.click(equals);

  expect(input).toHaveValue('4');
});

test('division', () => {
  const input = screen.getByTestId('calculator-input');
  const two = screen.getByTestId('numpad-2');
  const divide = screen.getByTestId('operator-/');
  const equals = screen.getByTestId('operator-=');

  fireEvent.click(two);
  fireEvent.click(divide);
  fireEvent.click(two);
  fireEvent.click(equals);

  expect(input).toHaveValue('1');
});

test('fractions', () => {
  const input = screen.getByTestId('calculator-input');
  const two = screen.getByTestId('numpad-2');
  const dot = screen.getByTestId('numpad-.');
  const five = screen.getByTestId('numpad-5');
  const plus = screen.getByTestId('operator-+');
  const equals = screen.getByTestId('operator-=');

  fireEvent.click(two);
  fireEvent.click(dot);
  fireEvent.click(five);
  fireEvent.click(plus);
  fireEvent.click(two);
  fireEvent.click(dot);
  fireEvent.click(five);
  fireEvent.click(equals);

  expect(input).toHaveValue('5');
})
