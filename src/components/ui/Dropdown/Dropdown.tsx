import React, { useCallback, useState } from 'react';
import { DropdownButton, DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps> = ({
  buttons, defaultButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onButtonClickHandler = useCallback(async (btn: DropdownButton) => {
    btn?.onClick();
    setIsOpen(false);
  }, []);

  return (
    <div className="relative">
      <div className="flex">
        {defaultButton && (
          <button
            type="button"
            {...defaultButton}
          >
            {defaultButton.label}
          </button>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          +
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col absolute top-1">
          {buttons.map((btn) => (
            <button
              {...btn}
              key={btn.id}
              className="hover:bg-green-400"
              onClick={() => onButtonClickHandler(btn)}
              type="button"
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
