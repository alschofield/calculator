import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from '../../Table';
import TableFooter from './TableFooter';

afterAll(cleanup)

test('renders table footer tag', () => {
  render(
    <Table>
	    <TableFooter/>
    </Table>
  );

  // home page should exist
  expect(screen.getByTestId('tablefooter-container'))
});
