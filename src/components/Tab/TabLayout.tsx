import React, { useMemo, useState } from 'react';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({children})=> {
  const childrenArray = useMemo(()=> {
    console.log(children);
    
  },[])
  const [activeTab, setActiveTab] = useState()
  return (<div className='flex'>{children}</div>)};

export default React.memo(TabLayout);