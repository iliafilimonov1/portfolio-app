import React from 'react';
import WalnutPreviewFile from './WalnutPreviewFile';

const WalnutImage: React.FC<{ file: File }> = ({ file }) => (
  <div>
    <div>{file?.name}</div>
    <WalnutPreviewFile />
  </div>

);

export default WalnutImage;
