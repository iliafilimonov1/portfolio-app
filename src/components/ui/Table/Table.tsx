import { Student } from '@/store/StudentsStore/StudentsStore';
import React from 'react';

const Table: React.FC<{ data: Student[] }> = ({ data }) => (
  <table className="w-full border-collapse mt-4">
    <thead>
      <tr>
        <th className="py-2 px-4 font-medium bg-blue-200 text-blue-500 border border-blue-500">
          Name
        </th>
        <th className="py-2 px-4 font-medium bg-blue-200 text-blue-500 border border-blue-500">
          Surname
        </th>
      </tr>
    </thead>
    <tbody>
      {data?.length ? (
        data.map((student, key) => (
          <tr key={`${key.toString()}_`}>
            <td className="py-2 px-4 border">{student?.name}</td>
            <td className="py-2 px-4 border">{student?.surname}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            className="py-2 px-4 text-center border"
            colSpan={2}
          >
            No students available
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;
