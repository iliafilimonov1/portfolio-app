import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import { Student } from '@/store/StudentStore/types';
import Table from '@/components/ui/Table/Table';
import Drawer from '../components/ui/Drawer/Drawer';
import StudentForm from '../components/ui/StudentForm/StudentForm';

const ExamplePage: React.FC = () => {
  const { studentsStore } = useStores();
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(undefined);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleRowClick = (row: Student) => {
    setSelectedStudent(row);
    setDrawerOpen(true);
  };

  const handleDataSubmit = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    const fakeStudents = [
      {
        id: '1', name: 'Иван', surname: 'Иванов', groupName: 'Группа 1', address: 'Адрес 1', age: 20,
      },
      {
        id: '2', name: 'Петр', surname: 'Петров', groupName: 'Группа 2', address: 'Адрес 2', age: 22,
      },
      {
        id: '3', name: 'Алексей', surname: 'Сидоров', groupName: 'Группа 3', address: 'Адрес 3', age: 19,
      },
    ];

    studentsStore.list = fakeStudents;
  }, [studentsStore]);

  return (
    <>
      {isDrawerOpen && selectedStudent && (
        <Drawer
          header="Информация о студенте"
          onClose={() => setDrawerOpen(false)}
          position="right"
        >
          <StudentForm
            onDataSubmit={handleDataSubmit}
            // @ts-ignore
            selectedValue={selectedStudent}
          />
        </Drawer>
      )}
      {!!studentsStore.list?.length && (
        <Table<Student>
          data={studentsStore.list}
          headers={[
            { key: 'name', name: 'Имя', width: 120 },
            { key: 'surname', name: 'Фамилия', width: 120 },
            { key: 'age', name: 'Возраст', width: 120 },
            { key: 'groupName', name: 'Наименование группы', width: 300 },
            { key: 'address', name: 'Адрес' },
          ]}
          onRowClick={handleRowClick}
        />
      )}
    </>
  );
};

export default observer(ExamplePage);
