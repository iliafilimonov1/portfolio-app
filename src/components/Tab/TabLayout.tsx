import React from 'react';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({children})=> (<div>{children}</div>);

export default React.memo(TabLayout);