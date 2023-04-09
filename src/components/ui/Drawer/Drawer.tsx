import { extractStyles } from '@/services/utils';
import React from 'react';

export interface DrawerProps {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  position?: 'right' | 'left';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

/** Всплывающее меню */
const Drawer: React.FC<DrawerProps> = ({
  children,
  isOpen,
  setIsOpen,
  position = 'right',
  header,
  footer
}) => (
  <main
    className={
      extractStyles`
        fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out
        ${isOpen ? ' transition-opacity opacity-100 duration-500 translate-x-0' : 'transition-all delay-500 opacity-0 translate-x-full'}
      `
    }
  >
    <section
      className={
        extractStyles`
          w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform
          ${isOpen ? ' translate-x-0 ' : ' translate-x-full '}
        `
      }
    >
      <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
        <header className="p-4 font-bold text-lg">{header}</header>
        {children}
        <footer>{footer}</footer>
      </article>
    </section>
    <section
      className=" w-screen h-full cursor-pointer "
      onClick={() => setIsOpen(false)}
    />
  </main>
);

export default React.memo(Drawer);
