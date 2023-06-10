import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import React, { useState } from 'react';

const ExamplePage: React.FC = () => {
  const [data, setData] = useState<{ name: string; lastName: string }>({}); // данные пользака

  const onInputHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    setData({
      ...data,
      [target.id as keyof typeof data]: target.value,
    });
  };

  const onsubmitHandler = () => {
    console.log(data);
    return data;
  };

  return (
    <form
      action="#"
      onInput={onInputHandler}
      onSubmit={onsubmitHandler}
    >
      <Input
        id="name"
        value={data.name}
      />
      <Input
        id="lastName"
        value={data.lastName}
      />
      <Button
        type="submit"
      >
        Submit form
      </Button>
    </form>

    

  );
};

export default React.memo(ExamplePage);
