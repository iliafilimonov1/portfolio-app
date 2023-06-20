import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import { Student } from '@/store/StudentStore/types';
import { SelectOption } from '@/components/ui/Select/types';
import Select from '@/components/ui/Select/Select';
import { useToggle } from 'usehooks-ts';
import Table from '@/components/ui/Table/Table';
import Drawer from '../components/ui/Drawer/Drawer';

const options = [
  { id: '1', title: 'Frontend-321' },
  { id: '2', title: 'Frontend-322' },
  { id: '3', title: 'Frontend-323' },
];

const ExamplePage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(options[1]);
  const { studentsStore } = useStores();
  const [data, setData] = useState<Partial<Student>>();
  const [selectedStudent, setSelectedStudent] = useState<Partial<Student>>();
  const [isDrawerOpen, setDrawerOpen] = useToggle(false); // открытие Drawer

  const onInputHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.id as keyof typeof data]: target.value,
    });
  }, [data]);

  const onSubmitHandler = () => {
    studentsStore.addNewStudent(data);
    setData(undefined);
  };

  // открытие Drawer по клику на <tr>
  const handleRowClick = (row: Student) => {
    setSelectedStudent(row);
    setDrawerOpen();
  };

  useEffect(() => {
    studentsStore.fetch();
  }, []);

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        position="right"
        setIsOpen={setDrawerOpen}
      >
        {selectedStudent && (
          <>
            <h2>{selectedStudent.name}</h2>
            <p>{selectedStudent.surname}</p>
          </>
        )}
      </Drawer>
      <form
        action="#"
        onInput={onInputHandler}
        onSubmit={onSubmitHandler}
      >
        <Input
          className="mb-2"
          id="name"
          label="Your name"
          value={data?.name}

        />
        <Input
          className="mb-2"
          id="surname"
          label="Your surname"
          value={data?.surname}
        />
        <Select
          className="mb-2"
          label="Group name"
          onSelect={(option) => setSelectedValue(option)}
          options={options}
          selectedOption={selectedValue}
        />
        <Button type="submit">
          Submit form
        </Button>
      </form>
      {studentsStore.list?.length && (
        <Table<Student>
          data={studentsStore.list}
          headers={[
            { key: 'name', name: 'Имя' },
            { key: 'surname', name: 'Фамилия' },
            { key: 'address', name: 'Адрес' },
            { key: 'age', name: 'Возраст' },
          ]}
          onRowClick={handleRowClick}
        />
      )}
    </>
  );
};

export default observer(ExamplePage);
