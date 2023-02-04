import Navigation from '@/components/Navigation/Navigation';
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default MainLayout;
