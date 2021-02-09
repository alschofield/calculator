import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from '../../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from '../TableRow/TableRow';
import TableItem from './TableItem';

afterAll(cleanup)

test('renders table item tag', () => {
  render(
    <Table>
      <TableBody>
        <TableRow>
	        <TableItem/>
        </TableRow>
      </TableBody>
    </Table>
  );

  // table item should exist
  expect(screen.getByTestId('tableitem-container'))
});
