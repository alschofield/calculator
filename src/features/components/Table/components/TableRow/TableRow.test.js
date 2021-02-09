import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from '../../Table';
import TableBody from '../TableBody/TableBody';
import TableRow from './TableRow';

afterAll(cleanup)

test('renders tablerow tag', () => {
  render(
    <Table>
      <TableBody>
	      <TableRow/>
      </TableBody>
    </Table>
  );

  // table row should exist
  expect(screen.getByTestId('tablerow-container'))
});
