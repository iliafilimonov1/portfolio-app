import { useRouter } from 'next/router';
import React from 'react';
import { Globe, User } from 'lucide-react';
import { AiFillFilePdf } from 'react-icons/ai';
import { IoLogoApple } from 'react-icons/io';
import Button from '../ui/Button/Button';
import { NavItem } from './types';

/** Элементы навишации */
const navItems: NavItem[] = [
  { label: 'Home', link: '/', icon: <AiFillFilePdf /> },
  { label: 'ReactPdfPage', link: '/ReactPdfPage' },
  { label: 'Tesseract', link: '/Tesseract' },
  { label: 'Framer-motion', link: '/FramerMotion' },
  { label: 'NASAApi', link: '/NasaApi' },
];

/** Компонент панель навигации */
const Navigation: React.FC = () => {
  /** Для маршрутизации */
  const router = useRouter();

  return (
    <header className="shadow bg-white h-16 mx-auto px-5 flex items-center justify-between">
      <IoLogoApple
        onClick={() => router.push('/')}
        size={40}
      />
      <nav className="flex items-center gap-5">
        {navItems.map((item) => (
          <Button
            key={item.link}
            onClick={() => router.push(item.link)}
            variant="ghost"
          >
            {item.label}
          </Button>
        ))}
      </nav>
      <div className="flex cursor-pointer">
        <Globe />
        <User />
      </div>
    </header>
  );
};

export default Navigation;
