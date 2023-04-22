import TabLayout from '@/components/Tab/TabLayout';
import TabPanel from '@/components/Tab/TabPanel';
import React from 'react';

const Frameworks: React.FC = ()=> (
    <TabLayout>
        <TabPanel accessor='tab1'>
            Content 1
        </TabPanel>
        <TabPanel accessor='tab2'>
            Content 2
        </TabPanel>
    </TabLayout>
)