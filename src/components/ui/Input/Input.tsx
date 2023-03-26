import { extractStyles } from '@/services/utils';
import React, { forwardRef, useCallback } from 'react';
import { InputProps } from './types';

export type InputTypes = 'text' | 'number';

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  onClick,
  error,
  postfix,
}, ref) => {

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: val } = e.target;
    if (onChange) {
      onChange(val);
    }
  }, [onChange]);

  return (
    <div className="flex flex-col">
      {label && (
        <div className={
          extractStyles`
            pb-1
            ${error && 'text-red-600'}
          `
        }
        >
          {label}
        </div>
      )}
      <div className={
        extractStyles`
         input
         ${error && 'border-red-600'}
         ${error && 'text-red-600'}
          `
      }
      >
        <input
          ref={ref}
          className="outline-none flex-1"
          id={id}
          onBlur={onBlur}
          onChange={onChangeHandler}
          onClick={onClick}
          placeholder={placeholder}
          type="text"
          value={value || ''}
        />
        {postfix && <div className="w-min h-full">{postfix}</div>}
      </div>

      {error && <div className="text-red-600 break-words text-xs pt-1">{error}</div>}
    </div>

  );
});

Input.displayName = 'Input';
export default React.memo(Input);
