import TabLayout from '@/components/Tab/TabLayout';
import TabPanel from '@/components/Tab/TabPanel';
import React from 'react';

const Frameworks: React.FC = () => (
  <>
    <div className="h-[100px] w-[100px] bg-red-400">1</div>
    <TabLayout>
      <TabPanel
        accessor="tab1"
        title="tab1"
      >
        <div>Content 1</div>
      </TabPanel>
      <TabPanel
        accessor="tab2"
        title="tab2"
      >
        <div>Content 2</div>
      </TabPanel>
    </TabLayout>
  </>
);
export default Frameworks;
