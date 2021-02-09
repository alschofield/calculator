import React from 'react';
import styled from 'styled-components';

import TableHeader from './components/TableHeader/TableHeader';
import TableBody from './components/TableBody/TableBody';
import TableRow from './components/TableRow/TableRow';
import TableItem from './components/TableItem/TableItem';

const Item = styled.table`
  position: ${props => props.theme.position || 'relative'};
  display: ${props => props.theme.display || 'initial'};
  height: ${props => props.theme.height || 'auto'};
  min-height: ${props => props.theme.minHeight || 'auto'};
  width: ${props => props.theme.width || 'auto'};
  min-width: ${props => props.theme.minWidth || '40px'};
  padding: ${props => props.theme.padding || '0px'};
  padding-top: ${props => props.theme.paddingTop || '0px'};
  padding-right: ${props => props.theme.paddingRight || '0px'};
  padding-bottom: ${props => props.theme.paddingBottom || '0px'};
  padding-left: ${props => props.theme.paddingLeft || '0px'};
  margin: ${props => props.theme.margin || '0px'};
  margin-top: ${props => props.theme.marginTop || '0px'};
  margin-right: ${props => props.theme.marginRight || '0px'};
  margin-bottom: ${props => props.theme.marginBottom || '0px'};
  margin-left: ${props => props.theme.marginLeft || '0px'};
  top: ${props => props.theme.top || 'initial'};
  left: ${props => props.theme.left || 'initial'};
  right: ${props => props.theme.right || 'initial'};
  bottom: ${props => props.theme.bottom || 'initial'};
  z-index: ${props => props.theme.zIndex || 'initial'};
  justify-content: ${props => props.theme.justifyContent || 'initial'};
  align-items: ${props => props.theme.alignItems || 'initial'};
  background: ${props => props.theme.background || 'initial'};
  background-color: ${props => props.theme.backgroundColor || 'initial'};
  background-position: ${props => props.theme.backgroundPosition || 'initial'};
  background-size: ${props => props.theme.backgroundSize || 'initial'};
  background-repeat: ${props => props.theme.backgroundRepeat || 'initial'};
  color: ${props => props.theme.color || 'initial'};
`;

// similar to list tag, i want to be able to have the option to export a default table that accepts a data prop as well as export the table wrapper and the individual table components
export default function Table(props) {
  if (props.data) {
    const headers = Object.keys(props.data[0])

    return (
      <Item {...props}>
        <TableHeader>
          <TableRow>
            {
              headers.map((item) => (
                <TableItem type="th">item</TableItem>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            props.data.map((item) => (
              <TableRow>
                {
                  headers.map((key) => (
                    <TableItem>{ item[key] }</TableItem>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Item>
    );
  } else {
    return (
      <Item {...props}>
        { props.children }
      </Item>
    );
  }
}

Table.defaultProps = {
  'data-testid': 'table-container'
}
