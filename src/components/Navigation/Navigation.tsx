import { useRouter } from 'next/router';
import React from 'react';
import Button from '../ui/Button';

const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Tesseract', link: '/Tesseract' },
];

const Navigation: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex items-center fap-[20px] px-2 py-6 shadow-lg">
      {
        navItems.map((item) => (
          <Button.Default
            key={item.link}
            onClick={() => router.push(item.link)}
            size="small"
          >
            {item.label}
          </Button.Default>
        ))
      }
    </div>
  );
};

export default Navigation;
