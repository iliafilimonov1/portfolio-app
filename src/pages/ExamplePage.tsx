import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useCallback, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import { Student } from '@/store/StudentsStore/StudentsStore';
import Table from '@/components/ui/Table/Table';

const ExamplePage: React.FC = () => {
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
