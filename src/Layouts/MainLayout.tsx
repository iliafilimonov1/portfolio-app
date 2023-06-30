import Navigation from '@/components/Navigation/Navigation';
import React from 'react';

/** Обертка всех страниц */
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    <div className="p-4">{children}</div>
    <footer>test</footer>
  </>
);

export default React.memo(MainLayout);
