import Navigation from '@/components/Navigation/Navigation';
import React from 'react';

/** Обертка всех страниц */
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default React.memo(MainLayout);
