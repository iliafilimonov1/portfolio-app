import React, { useMemo, useState } from 'react';
import { extractStyles } from '@/services/utils';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({ children }) => {
  const childrenArray = useMemo(() => (Array.isArray(children) ? children.flat() : [children]), []);
  const [activeTabAccessor, setActiveTabAccessor] = useState<string | undefined>();

  const activeContent = useMemo(() => childrenArray.find(
    (child) => child?.props.accessor === activeTabAccessor,
  ), [childrenArray, activeTabAccessor]);

  return (
    <div className="flex">
      <div>
        {childrenArray.map((child) => (
          <div
            key={child?.props.accessor}
            className={extractStyles`
            ${
          child?.props.accessor === activeTabAccessor
            ? 'bg-red-400'
            : 'bg-green-400'
          }
          `}
            onClick={() => setActiveTabAccessor(child?.props.accessor)}
          >
            {child?.props.title}
          </div>
        ))}
      </div>
      <div>{activeContent?.props.children}</div>
    </div>
  );
};

export default React.memo(TabLayout);
