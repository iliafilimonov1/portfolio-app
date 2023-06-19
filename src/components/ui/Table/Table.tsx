/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface TableProps<T> {
  headers: {
    key: keyof T;
    name: string;
  }[];
  data: Record<keyof T, any>[];
}

const Table:<T>(props: TableProps<T>)=> React.ReactElement = ({ data, headers }) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key.toString()}>{header.name}</th>
        ))}
        <th>Name</th>
        <th>Surname</th>
      </tr>
    </thead>
    <tbody>
      {
        !!data?.length && data.map((item, index) => headers.map((header) => (
          <td key={`${header.key.toString()}${index.toString()}`}>{item[header.key]}</td>
        )))
      }
    </tbody>
  </table>
);

export default Table;
