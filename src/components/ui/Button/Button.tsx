import React, { useMemo } from 'react';
import { extractStyles } from '@/services/utils';

/** Возможные варианты расположения иконок относительно текста кнопки */
export type IconPositions = 'left' | 'right';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: IconPositions;
  variant?: 'outlined' | 'primary';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  icon,
  disabled,
  iconPosition,
  className,
  variant = 'outlined',
}) => {
  const buttonStyles = useMemo(() => {
    switch (variant) {
      case 'outlined':
        return '';
      default:
        return 'bg-blue-300 rounded-lg text-blue-900 hover:opacity-80 active:bg-blue-600';
    }
  }, [variant]);

  return (
    <button
      className={extractStyles`
      flex items-center justify-center
      px-6 py-2 
      ${buttonStyles}
      ${className}
    `}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children && <div className={iconPosition === 'left' ? 'order-1' : 'order-0'}>{children}</div>}
      {icon && <div className={iconPosition === 'left' ? 'mr-[5px]' : 'ml-[5px]'}>{icon}</div>}
    </button>
  );
};

export default Button;
