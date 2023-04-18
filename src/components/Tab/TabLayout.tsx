import React, { useMemo, useState } from 'react';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({children})=> {
  const childrenArray = useMemo(()=> {
    return Array.isArray(children) ? children.flat(): [children]
  },[])
  const [activeTab, setActiveTab] = useState()
  return (<div className='flex'>{children}</div>)};

export default React.memo(TabLayout);