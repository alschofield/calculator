import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from './Table';

afterAll(cleanup)

test('renders table tag', () => {
  render(
	  <Table/>
  );

  // table should exist
  expect(screen.getByTestId('table-container'))
});

test('renders default table when data prop is passed', () => {
  render(
	  <Table data={[{ name: 'check', mic: '1', drop: '2' }, { name: 'check', mic: 'check', drop: 'check' }, { name: 'check', mic: '1', drop: '2' }]} />
  );

  // table should exist
  expect(screen.getByTestId('table-container'))
  expect(screen.getByTestId('tableheader-container'))
  expect(screen.getByTestId('tablebody-container'))
  expect(screen.getAllByTestId('tablerow-container'))
  expect(screen.getAllByTestId('tableitem-container'))
});
