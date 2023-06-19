import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '@/hooks/useStores';
import Table from '@/components/ui/Table/Table';
import { Student } from '@/store/StudentStore/types';
import { SelectOption } from '@/components/ui/Select/types';
import Select from '@/components/ui/Select/Select';

const options = [
  { id: '1', title: 'Frontend-321' },
  { id: '2', title: 'Frontend-322' },
  { id: '3', title: 'Frontend-323' },
];

const ExamplePage: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(options[1]);
  const { studentsStore } = useStores();
  const [data, setData] = useState<Partial<Student>>();

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

  useEffect(() => {
    studentsStore.fetch();
  }, []);

  return (
    <>
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
      { !!studentsStore.list?.length && (
        <Table<Student>
          data={studentsStore.list}
          headers={[
            { key: 'name', name: 'Имя' },
            { key: 'surname', name: 'Фамилия' },
          ]}
        />
      ) }
    </>
  );
};

export default observer(ExamplePage);
