import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import { Student } from '@/store/StudentsStore/StudentsStore';
import Table from '@/components/ui/Table/Table';
import Select from '@/components/ui/Select/Select';
import { SelectOption } from '@/components/ui/Select/types';

const options = [
  { id: 'ugf765bt', title: 'Option 1' },
  { id: 'option2', title: 'Option 2' },
  { id: 'option3', title: 'Option 3' },
];

const ExamplePage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(options[1]);
  const { studentsStore } = useStores();

  const [data, setData] = useState<Student>(); // данные пользака

  const onInputHandler = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.id as keyof typeof data]: target.value,
    });
  }, [data]);

  const onsubmitHandler = () => {
    studentsStore.addNewStudent(data ?? {});
    setData(undefined);
  };

  return (
    <>
      <form
        action="#"
        onInput={onInputHandler}
        onSubmit={onsubmitHandler}
      >
        <Input
          id="name"
          value={data?.name}
        />
        <Input
          id="surname"
          value={data?.surname}
        />
        <Select
          onSelect={(option) => setSelectedValue(option)}
          options={options}
          selectedOption={selectedValue}
        />
        <Button
          type="submit"
        >
          Submit form
        </Button>
      </form>

      {
        !!studentsStore.students?.length && <Table data={studentsStore.students} />
      }

    </>

  );
};

export default observer(ExamplePage);
