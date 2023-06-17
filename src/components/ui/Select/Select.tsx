import React, { useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { useOnClickOutside } from 'usehooks-ts';
import Input from '../Input/Input';
import { SelectOption, SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ options, onSelect, selectedOption }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false); // открытие/закрытие
  useOnClickOutside(containerRef, () => setIsOpen(false));

  // клик по иконке
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // клик по пункту меню
  const handleOptionClick = (value: SelectOption) => {
    onSelect?.(value);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-8"
    >
      <Input value={selectedOption?.title} />
      <GoChevronDown
        className={`absolute top-1/2 mt-[-8px] right-3 transform transition-transform ${isOpen ? 'rotate-180' : ''} cursor-pointer`}
        onClick={handleToggle}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-36 overflow-auto">
          {options && options.map((option) => (
            <li
              key={option.title}
              aria-selected={option.title === selectedOption?.title ? 'true' : 'false'} // Добавляем атрибут aria-selected для доступности
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${option.title === selectedOption?.title ? 'bg-gray-200' : ''}`}
              onClick={() => handleOptionClick(option)}
              role="option" // Добавляем роль "option" для семантики
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Select.displayName = 'Select';
export default React.memo(Select);
