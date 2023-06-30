import Navigation from '@/components/Navigation/Navigation';
import React, { memo } from 'react';

/** Обертка основного контента */
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navigation />
    <div className="p-4">{children}</div>
    <footer>test</footer>
  </>
);

export default memo(MainLayout);
