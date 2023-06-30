import Navigation from '@/components/Navigation/Navigation';
import React, { memo } from 'react';

/** Обертка основного контента */
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default memo(MainLayout);
