import React, {
  useMemo, useState, useCallback, useEffect,
} from 'react';
import { extractStyles } from '@/services/utils';
import { TabLayoutProps } from './types';

const TabLayout: React.FC<TabLayoutProps> = ({ children }) => {
  const currentTabPrefix = `tabs_${document.querySelectorAll('#tab_component').length.toString()}`;
  const currentHash = window.location.hash.split('').filter(Boolean);
  console.log(currentHash);

  const childrenArray = useMemo(() => {
    const preparedChildren = Array.isArray(children) ? children.flat() : [children];
    return preparedChildren.map((child) => child?.props).map((child) => ({
      ...child,
      accessor: `${String(currentTabPrefix)}${child?.accessor}`,
    }));
  }, []);
  const [activeTabAccessor, setActiveTabAccessor] = useState<string | undefined>();

  /** Активный таб из дочерних табов */
  const activeTab = useMemo(() => childrenArray.find(
    (child) => child?.accessor === activeTabAccessor,
  ), [childrenArray, activeTabAccessor]);

  const changeActiveTabHandler = useCallback((accessor: string) => {
    setActiveTabAccessor(accessor);
  }, []);

  useEffect(() => {
    const hasPrefixInHash = !!currentHash.find((h) => h.includes(currentTabPrefix));
    if (hasPrefixInHash) {
      window.location.hash = `${currentTabPrefix}${activeTab?.accessor}`;
    }
  }, []);

  return (
    <div
      className="flex flex-col"
      id="tab_component"
    >
      <div>
        {childrenArray.map((child) => (
          <div
            key={child?.accessor}
            className={extractStyles`
            ${
          child?.accessor === activeTabAccessor
            ? 'bg-red-400'
            : 'bg-green-400'
          }
          `}
            onClick={() => changeActiveTabHandler(child.accessor)}
          >
            {child?.title}
          </div>
        ))}
      </div>
      <div>{activeTab?.children}</div>
    </div>
  );
};

export default React.memo(TabLayout);
