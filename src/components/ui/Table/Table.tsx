import React from 'react';

interface Row<T> {
  data: T[];
  id: string;
}

interface TableProps<T extends Object = {}, RowT extends Object = {
  id: string;
  [key: string]: string | number;
}> {
  columns: Array<keyof T>;
  data: Row<RowT>[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => (
  <div
    className="grid"
    style={{
      gridTemplateAreas: `repeat(${columns.length}, 1fr)`,
    }}
  >
    {columns.map((column) => (
      <div key={column}>{column}</div>
    ))}
    {data.map((row) => (
      <React.Fragment key={row.id}>
        {row.data.map((cell) => (
          <div key={cell.id}>{cell[row.id]}</div>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export default Table;
