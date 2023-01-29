import React from 'react';

type Columns = {
  id: string;
  title: string;
};

interface Row<Cols extends Columns> {
  columnName: keyof Cols;
  cells: 
}

interface Cell {
  
}

interface TableProps {
  data: {
    column: keyof Columns;
    info: {
      id: string;
      title: string;
    }[];
  }[];
  columns: Columns[];
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
}) => (
  <div>
    <table>
      <thead>
        <tr>
          {!!columns?.length && columns.map((title) => (
            <td key={title.id}>{title.title}</td>
          ))}
        </tr>
        <tbody>
          {!!data?.length && data.map((row, i) => (
            <rt key={row.column + i.toString()}>
              {row?.info?.map((cell) => (
                <td key={cell.id}>{cell.title}</td>
              ))}
            </rt>
          ))}
        </tbody>
      </thead>
    </table>
  </div>
);

export default Table;
