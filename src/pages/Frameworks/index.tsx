import Box from '@/components/ui/Containers/Box/Box';
import React from 'react';
import { BiCrop } from 'react-icons/bi';

const Frameworks: React.FC = () => (
  <div className="grid grid-cols-3 gap-4 p-4">
    <Box>
      <div className="flex items-start">
        <BiCrop className="w-[100px] h-[100px]" />
        <div>Библиотека для обрезания! Изображений.</div>
      </div>
    </Box>
  </div>
);

export default Frameworks;
