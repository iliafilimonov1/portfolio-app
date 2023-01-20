import React from 'react';
import { extractStyles } from '@/services/utils';

/** Возможные варианты расположения иконок относительно текста кнопки */
export type IconPositions = 'left' | 'right';

export interface ButtonProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  size: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'negative' | 'clear';
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: IconPositions;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  onClick,
  icon,
  disabled,
  iconPosition,
  fullWidth,
  variant = 'clear',
}) => (
  <button
    className={extractStyles`
      rounded-md flex items-center justify-center
      ${size === 'md' ? 'px-4 py-2' : 'px-2 py-1'}
      ${variant === 'primary' && 'bg-blue-300'}
      ${fullWidth && 'w-full'}
    `}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children && <div className={iconPosition === 'left' ? 'order-1' : 'order-0'}>{children}</div>}
    {icon && <div className={iconPosition === 'left' ? 'mr-[5px]' : 'ml-[5px]'}>{icon}</div>}
  </button>
);

export default Button;
