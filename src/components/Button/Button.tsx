import React from 'react';
import cn from 'classnames';
import s from './Button.module.css';

export type IconPositions = 'left' | 'center' | 'right';

export interface ButtonProps {
  children?: React.ReactNode;
  fullWidth?: boolean;
  size: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'negative';
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: IconPositions;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  onClick,
  fullWidth,
  icon,
  disabled,
  iconPosition,
  variant = 'primary',
}) => {
  const classes = cn(s.root, s[variant], s[size], {
    [s.fullWidth]: fullWidth,
  });

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >

      {children && <div className={iconPosition === 'left' ? 'order-1' : 'order-0'}>{children}</div>}
      {
        icon && (
          <img
            alt="icon"
            src={icon as string}
          />
        )
      }
    </button>
  );
};

export default Button;
