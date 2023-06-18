import React, { useRef, useState, useEffect } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { useOnClickOutside } from 'usehooks-ts';
import Input from '../Input/Input';
import { SelectOption, SelectProps } from './types';

const Select: React.FC<SelectProps> = ({ options, onSelect, selectedOption }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false); // открытие/закрытие списка

  // отслеживание индекса выбранного элемента в списке
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useOnClickOutside(containerRef, () => setIsOpen(false));

  // события с клавиатуры
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const lastIndex = options.length - 1;

    switch (e.key) {
      case 'Enter':
        e.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex === null || prevIndex === 0 ? lastIndex : prevIndex - 1));
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex === null || prevIndex === lastIndex ? 0 : prevIndex + 1));
        break;
      default:
        break;
    }
  };

  // клик по селекту
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // клик по пункту в выпадающем списке
  const handleOptionClick = (value: SelectOption, index: number) => {
    setSelectedIndex(index);
    onSelect?.(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const index = options.findIndex((option) => option.title === selectedOption?.title);
    setSelectedIndex(index !== -1 ? index : null);
  }, [selectedOption, options]);

  useEffect(() => {
    if (selectedIndex !== null) {
      onSelect?.(options[selectedIndex]);
    }
  }, [selectedIndex, onSelect, options]);

  return (
    <div
      ref={containerRef}
      className="relative h-8 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Input
        className="cursor-pointer"
        onKeyDown={handleKeyDown}
        value={selectedOption?.title}
        readOnly
      />
      <GoChevronDown
        className={`absolute top-1/2 mt-[-8px] right-3 transform transition-transform ${isOpen ? 'rotate-180' : ''} cursor-pointer`}
        onClick={(e) => {
          e.stopPropagation();
          handleToggle();
        }}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-36 overflow-auto">
          {options.map((option, index) => (
            <li
              key={option.title}
              aria-selected={index === selectedIndex ? 'true' : 'false'}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${index === selectedIndex ? 'bg-gray-200' : ''}`}
              onClick={() => handleOptionClick(option, index)}
              role="option"
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
