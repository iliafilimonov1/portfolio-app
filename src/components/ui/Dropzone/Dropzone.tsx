import React from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone: React.FC<{
  onDrop: (value: File[]) => void;
  children: React.ReactNode;
}> = ({ onDrop, children }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className="bg-cyan-900 h-min"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {children}

    </div>
  );
};

export default Dropzone;
