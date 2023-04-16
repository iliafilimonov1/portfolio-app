import React, { ReactElement } from "react";
import TabPanel from "./TabPanel";

interface TabProps {
    children?: React.ReactNode;
    title?: React.ReactNode;
}

export interface TabLayoutProps {
    children?: ReactElement<TabProps, typeof TabPanel>
    onChangeTab?: (accessor?: string)=> void;
    observeURL?: boolean;
}