import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from '../../Table';
import TableBody from './TableBody';

afterAll(cleanup)

test('renders table body tag', () => {
  render(
    <Table>
	    <TableBody/>
    </Table>
  );

  // home page should exist
  expect(screen.getByTestId('tablebody-container'))
});
