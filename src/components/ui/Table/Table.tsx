/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface TableProps<T> {
  headers: {
    key: keyof T;
    name: string;
  }[];
  data: T[];
}

const Table:<T>(props: TableProps<T>)=> React.ReactElement = ({ data, headers }) => (
  <table className="table">
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key.toString()}>{header.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {
        data?.length ? data.map((item, index) => (
          <tr key={`${index.toString()}_`}>
            {headers.map((header) => (
              // TODO Разобраться с типами
              // @ts-ignore
              <td key={`${header.key.toString()}${index.toString()}`}>{item[header.key]}</td>
            ))}
          </tr>
        ))
          : (
            <tr>
              <td
                className="py-2 px-4 text-center border"
                colSpan={2}
              >
                No students available
              </td>
            </tr>
          )
      }
    </tbody>
  </table>
);

export default Table;
