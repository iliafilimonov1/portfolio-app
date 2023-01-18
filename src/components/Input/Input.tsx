import React, { forwardRef } from 'react';

import { isValidForType } from '@/services/utils';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type,
  onClick,
}, ref) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: val } = e.target;
    // console.log(isValidForType(type, value ?? ''));
    if (onChange && isValidForType(type, val ?? '')) {
      onChange(val);
    }
  };

  return (
    <div>
      {label && <div>{label}</div>}
      <input
        ref={ref}
        id={id}
        onBlur={onBlur}
        onChange={onChangeHandler}
        onClick={onClick}
        placeholder={placeholder}
        type="text"
        value={value || ''}
      />
    </div>

  );
});

Input.displayName = 'Input';
export default Input;
