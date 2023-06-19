import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import Table from '@/components/ui/Table/Table';
import { Student } from '@/store/StudentStore/types';

const ExamplePage: React.FC = () => {
  const { studentsStore } = useStores();
  const [data, setData] = useState<Partial<Student>>();

  const onInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.id as keyof typeof data]: target.value,
    });
  };

  const onsubmitHandler = () => {
    studentsStore.addNewStudent(data);
    setData(undefined);
  };

  useEffect(() => {
    studentsStore.fetch();
  }, []);

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
      { !!studentsStore.list?.length && (
        <Table<Student>
          // @ts-ignore
          data={studentsStore.list}
        />
      ) }
    </>

  );
};

export default observer(ExamplePage);
