import { NAVIGATION_SIZE } from '@/projectParams';
import { extractStyles } from '@/services/utils';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../ui/Button/Button';

type NavItem = { label: string; link: string; subItem?: string[] };

const navItems: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'Tesseract', link: '/Tesseract' },
  { label: 'Framer-motion', link: '/FramerMotion' },
  { label: 'RTKQuery', link: '/RTKQuery' },
];

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <div className={
      extractStyles`
        px-6 flex flex-wrap sticky top-0 left-0 right-0 z-[9999]
         bg-slate-100 items-center shadow-lg
        ${NAVIGATION_SIZE && `min-h-[${NAVIGATION_SIZE}px]`}
      `
    }
    >
      {navItems.map((item) => (
        <div key={item.link}>
          <Button
            className="text-gray-700 hover:text-gray-500 px-4 p-2 rounded-sm transition-all tracking-wider text-xl"
            onClick={() => router.push(item.link)}
          >
            {item.label}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
