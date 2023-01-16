import React, { useMemo } from 'react';

export interface ButtonTemplateProps {
  children: React.ReactNode;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
}

const ButtonTemplate: React.FC<ButtonTemplateProps> = ({
  className, children, size, onClick,
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
      className={`${getStyle} ${className} rounded-md`}
      onClick={onClick}
      type="button"
    >

      {children}
    </button>
  );
};

export default ButtonTemplate;
