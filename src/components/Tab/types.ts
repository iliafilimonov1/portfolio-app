import React, { ReactElement } from 'react';

type TabChildren = ReactElement<TabProps>;

export interface TabProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  accessor: string;
}

export interface TabLayoutProps {
  children?: Array<TabChildren> | TabChildren | Array<TabChildren[] | TabChildren>;
  onChangeTab?: (accessor?: string)=> void;
  observeURL?: boolean;
}
