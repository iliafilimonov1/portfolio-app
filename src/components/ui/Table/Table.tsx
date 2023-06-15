import { Student } from '@/store/StudentsStore/StudentsStore';
import React from 'react';

const Table: React.FC<{ data: Student[] }> = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
      </tr>
    </thead>
    <tbody>
      {
        !!data?.length && data.map((student, key) => (
          <tr key={`${key.toString()}_`}>
            <td>{student?.name}</td>
            <td>{student?.surname}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default Table;
