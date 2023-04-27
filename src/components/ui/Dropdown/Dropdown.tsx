import React, { useState } from 'react';
import { DropdownProps } from './types';

const Dropdown: React.FC<DropdownProps> = ({
  buttons, defaultButton,
}) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex flex-col absolute">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              {...btn}
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
