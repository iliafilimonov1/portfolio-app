import { NAVIGATION_SIZE } from '@/projectParams';
import { extractStyles } from '@/services/utils';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../ui/Button/Button';

type NavItem = { label: string; link: string; subItem?: string[] };

const navItems: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'ReactPdfPage', link: '/ReactPdfPage' },
  { label: 'Tesseract', link: '/Tesseract' },
  { label: 'Framer-motion', link: '/FramerMotion' },
  // { label: 'RTKQuery', link: '/RTKQuery' },
  { label: 'NASAApi', link: '/NasaApi' },
  // { label: 'History', link: '/History' },
];
const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <header className={
      extractStyles`
        px-6 flex flex-wrap sticky top-0 left-0 right-0 z-[9999]
         bg-slate-100 items-center shadow-lg
        ${NAVIGATION_SIZE && `min-h-[${NAVIGATION_SIZE}px]`}
      `
    }
    >
      {
        navItems.map((item) => (
          <nav key={item.link}>
            <Button
              onClick={() => router.push(item.link)}
              variant="ghost"
            >
              {item.label}
            </Button>
          </nav>
        ))
      }
    </header>
  );
};

export default Navigation;
