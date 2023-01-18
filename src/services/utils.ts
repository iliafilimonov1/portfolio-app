import { InputTypes } from '@/components/Input/types';

export const isValidForType = (type: InputTypes, value: string) => {
  const regExps = {
    number: /[0-9]/,
    text: /./i,
  };
  // console.log(regExps.number.test(value), value);
  return regExps[type].test(value);
};
