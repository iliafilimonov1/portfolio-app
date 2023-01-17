import React, { useMemo } from 'react';

export type IconPositions = 'left' | 'center' | 'right';

export interface ButtonTemplateProps {
  children?: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  bgColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  iconPosition?: IconPositions;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  className, children, size, onClick, bgColor, icon, disabled, iconPosition,
}) => {
  const getStyle = useMemo(() => {
    switch (size) {
      case 'small': return 'p-2';
      case 'medium': return 'p-4';
      case 'large': return 'p-8';
      default:
        return 'p-2';
    }
  }, [size]);

  return (

    <button
      className={`${getStyle} ${className} ${bgColor} rounded-md`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >

      {children}
      {
        icon && (
          <img
            alt="asd"
            className={iconPosition === 'left' ? 'order-1' : 'order-0'}
            src={icon as string}
          />
        )
      }
    </button>
  );
};

export default ButtonTemplate;
