import React from 'react';
import Table, { TableHeader } from './index.js';
import { storiesOf } from '@storybook/react';

function formatNumber(val) {
  return val && isFinite(val)
    ? Number(parseFloat(val).toFixed(2)).toLocaleString('en', {
        minimumFractionDigits: 2,
      })
    : '0.00';
}

const data = [
  { id: 1, country: 'Nepal', capital: 'Kathmandu', gdp: '500000' },
  { id: 2, country: 'Australia', capital: 'Canberra', gdp: '500000' },
  { id: 3, country: 'USA', capital: 'Washington DC', gdp: '500000' },
];

storiesOf('Table', module)
  .add('Default', () => <Table data={data} />)
  .add('With Selected Item', () => (
    <Table data={data}>
      <TableHeader dataField="country" />
      <TableHeader dataField="capital" />
    </Table>
  ))
  .add('With Custom Header', () => (
    <Table data={data}>
      <TableHeader dataField="country" dataHeader="cn" />
      <TableHeader dataField="capital" dataHeader="city" />
      <TableHeader dataField="gdp" />
    </Table>
  ))
  .add('With Customized Data', () => (
    <Table data={data}>
      <TableHeader dataField="country" />
      <TableHeader dataField="capital" />
      <TableHeader
        dataField="gdp"
        dataFormat={(row, cell) => <p>$ {formatNumber(cell)}</p>}
      />
    </Table>
  ))
  .add('With Action', () => (
    <Table data={data}>
      <TableHeader dataField="country" />

      <TableHeader
        dataField="gdp"
        dataFormat={(row, cell) => <p>$ {formatNumber(cell)}</p>}
      />
      <TableHeader
        dataField="actions"
        dataFormat={(row) => (
          <button
            style={{
              width: '150px',
              height: '40px',
              lineHeight: '40px',
              padding: 0,
            }}
            onClick={() => alert(`${row.country} id is ${row.id}`)}
          >
            Click
          </button>
        )}
      />
    </Table>
  ));
