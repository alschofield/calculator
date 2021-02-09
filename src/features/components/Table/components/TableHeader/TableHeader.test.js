import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Table from '../../Table';
import TableHeader from './TableHeader';

afterAll(cleanup)

test('renders table header tag', () => {
  render(
    <Table>
	    <TableHeader/>
    </Table>
  );

  // table header should exist
  expect(screen.getByTestId('tableheader-container'))
});
