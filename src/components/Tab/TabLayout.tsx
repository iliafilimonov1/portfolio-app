import React, { useMemo, useState } from 'react';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({children})=> {
  const childrenArray = useMemo(()=> {
    return Array.isArray(children) ? children.flat(): [children]
  },[])
  const [activeTab, setActiveTab] = useState();

  const activeTabElement = useMemo(()=> {
    return childrenArray.find(child=> child?.props.accessor === activeTab);

  },[])
  return (<div className='flex flex-col'>
    <div>{childrenArray.map(child=> (
      <div>{child?.props.title}</div>
    ))}</div>
    {activeTabElement}</div>)};

export default React.memo(TabLayout);