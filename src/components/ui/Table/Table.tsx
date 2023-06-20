import React from 'react';

interface TableProps<T> {
  headers: { key: keyof T; name: string }[];
  data: T[];
  onRowClick?: (row: T) => void;
}

const Table = <T extends Partial<Record<keyof T, React.ReactNode>>>({
  data,
  headers,
  onRowClick,
}: TableProps<T>): React.ReactElement => {
  const handleRowClick = (row: T) => {
    if (onRowClick) {
      onRowClick(row);
    }
  };

  return (
    <table className="w-full border-collapse mt-4">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header.key.toString()}
              className="py-2 px-4 font-medium bg-blue-200 text-blue-500 border border-blue-500"
            >
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.length ? (
          data.map((item, index) => (
            <tr
              key={`${index.toString()}_`}
              onClick={() => handleRowClick(item)}
            >
              {headers.map((header) => (
                <td
                  key={`${header.key.toString()}${index.toString()}`}
                  className="py-2 px-4 border"
                >
                  {item[header.key]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td
              className="py-2 px-4 text-center border"
              colSpan={headers.length}
            >
              No students available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
