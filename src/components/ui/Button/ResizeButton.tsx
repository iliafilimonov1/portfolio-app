import { extractStyles } from '@/services/utils';
import React, {
  useEffect, useLayoutEffect, useRef, useState,
} from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

interface ResizeButtonProps {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: ()=>void;
  loading?: boolean;
  disabled?: boolean;
  onFocus?: ()=> void;
}

const ResizeButton: React.FC<ResizeButtonProps> = ({
  disabled,
  icon,
  label,
  loading,
  iconPosition,
  onClick,
  onFocus,
}) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const [buttonContainerWidth, setButtonContainerWidth] = useState<number>();
  const [showOnlyIcon, setShowOnlyIcon] = useState<boolean>();

  useLayoutEffect(() => {
    if (loading) {
      return;
    }
    setButtonContainerWidth(buttonContainerRef.current?.clientWidth);
  }, [loading]);

  useEffect(() => {
    const buttonParent = buttonContainerRef.current?.parentElement;
    if (buttonParent && buttonContainerWidth) {
      if (buttonParent.clientWidth < buttonContainerWidth) {
        setShowOnlyIcon(true);
      }
    }
  }, []);

  useEffect(() => {
    const buttonParent = buttonContainerRef.current?.parentElement;
    if (buttonParent) {
      const resizeCallback = () => {
        setShowOnlyIcon(false);
        setButtonContainerWidth(buttonContainerRef.current?.clientWidth);
      };

      const observer = new ResizeObserver(resizeCallback);

      observer.observe(buttonParent);

      return () => observer.disconnect();
    }
    return () => undefined;
  }, []);

  return (
    <div ref={buttonContainerRef}>
      {loading
        ? (
          <>
            <div className={
              extractStyles`
                ${iconPosition === 'right' && 'order-1'}
            `
            }
            >
              {icon}
            </div>
            {
              !showOnlyIcon && (
                <button
                  className={
                    extractStyles`
                        px-4 py-2 rounded-sm border-1
                        whitespace-nowrap
                `
                  }
                  disabled={disabled}
                  onClick={onClick}
                  onFocus={onFocus}
                  type="button"
                >
                  {label}
                </button>
              )
            }
          </>
        )
        : <BiLoaderCircle />}
    </div>
  );
};

export default React.memo(ResizeButton);
