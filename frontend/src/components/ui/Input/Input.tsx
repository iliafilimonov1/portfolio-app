import React, { forwardRef } from 'react';

export type InputTypes = 'text' | 'number';

export interface InputProps {
  id: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
  onClick: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  onClick,
}, ref) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: val } = e.target;
    // console.log(isValidForType(type, value ?? ''));
    if (onChange) {
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
