import { useRouter } from 'next/router';
import React from 'react';
import { Globe, User } from 'lucide-react';
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
    <header className="shadow bg-white h-16 mx-auto px-5 flex items-center justify-between">
      <a
        className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
        href="https://www.airbnb.com/"
      >
        Logo
      </a>
      <nav className="flex items-center gap-5">
        {
          navItems.map((item) => (
            <Button
              key={item.link}
              onClick={() => router.push(item.link)}
              variant="ghost"
            >
              {item.label}
            </Button>
          ))
        }
      </nav>

      <div className="flex cursor-pointer">
        <Globe />
        <User />
      </div>

    </header>
  );
};

export default Navigation;
