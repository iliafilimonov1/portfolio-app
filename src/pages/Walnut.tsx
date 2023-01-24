import React from 'react';
import WalnutImage from '@/components/WalnutComponents/WalnutImage';
import WalnutUpload from '@/components/WalnutComponents/WalnutUpload';

const Walnut = () => (
  <div className="flex flex-col">
    <div className="h-screen bg-slate-400">
      <WalnutUpload />
    </div>

    <div className="h-screen bg-blue-200">
      <WalnutImage file={'asd' as unknown as File} />
    </div>
  </div>
);

export default Walnut;
