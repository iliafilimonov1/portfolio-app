import React from 'react';
import { TabProps } from './types';

const TabPanel: React.FC<TabProps> = ({ children, title }) => (
  <div>
    <div>{title}</div>
    <div>{children}</div>
  </div>
);

export default React.memo(TabPanel);
