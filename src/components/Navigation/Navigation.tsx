import { NAVIGATION_SIZE } from '@/projectParams';
import { extractStyles } from '@/services/utils';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '../ui/Button/Button';
// import Drawer from '../ui/Drawer/Drawer';

type NavItem = { label: string; link: string; subItem?: string[] };

const navItems: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'Example', link: '/Example' },
  { label: 'Walnut Page', link: '/Walnut' },
  { label: 'Tesseract', link: '/Tesseract' },
  { label: 'Framer-motion', link: '/FramerMotion' },
  // { label: 'RTKQuery', link: '/RTKQuery' },
  // { label: 'NASAApi', link: '/NasaApi' },
  // { label: 'History', link: '/History' },
];
const Navigation: React.FC = () => {
  const router = useRouter();

  // const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={
      extractStyles`
        px-6 flex flex-wrap sticky top-0 left-0 right-0 z-[9999]
         bg-slate-100 items-center shadow-lg
        ${NAVIGATION_SIZE && `min-h-[${NAVIGATION_SIZE}px]`}
      `
    }
    >
      {/* <button
        onClick={() => setDrawerOpen(true)}
        type="button"
      >
        Open drawer
      </button>
      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={(value: boolean) => setDrawerOpen(value)}
      >
        asdasda
      </Drawer> */}
      {
        navItems.map((item) => (
          <div key={item.link}>
            <Button
              className="text-gray-700 hover:text-gray-500 px-4 p-2 rounded-sm transition-all tracking-wider text-xl"
              onClick={() => router.push(item.link)}
            >
              {item.label}
            </Button>
          </div>
        ))
      }
    </div>
  );
};

export default Navigation;
