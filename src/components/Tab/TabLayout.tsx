import React, { useMemo, useState } from "react";
import { TabLayoutProps } from "./types";
import { extractStyles } from "@/services/utils";

const TabLayout: React.FC<TabLayoutProps> = ({ children }) => {
  const childrenArray = useMemo(() => {
    return Array.isArray(children) ? children.flat() : [children];
  }, []);
  const [activeTabAccessor, setActiveTabAccessor] = useState<
    string | undefined
  >();

  const activeContent = useMemo(() => {
    return childrenArray.find(
      (child) => child?.props.accessor === activeTabAccessor
    );
  }, []);

  return (
    <div className="flex">
      <div>
        {childrenArray.map((child) => (
          <div
            className={extractStyles`
            ${
              child?.props.accessor === activeTabAccessor
                ? "bg-red-400"
                : "bg-green-400"
            }
          `}
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
