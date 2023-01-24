import React, { useState } from 'react';
import Dropzone from '../ui/Dropzone/Dropzone';
import Button from '../ui/Button/Button';

const WalnutUpload = () => {
  const [file, setFile] = useState<File>();
  return (
    <div className="flex flex-col text-center gap-[40px]">
      <Dropzone onDrop={(value: File[]) => setFile(value[0])}>
        <div className="flex items-center justify-center w-full">
          <span
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Drag &  drop some files here or select file</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 800x400px)</p>
            </div>
          </span>
        </div>
        {
          file && <span>{file.name}</span>
        }
      </Dropzone>

      <Button
        className="bg-blue-500 self-center text-white px-4 p-2 rounded-lg transition-all tracking-wider text-xl"
        onClick={() => console.log('Button submit')}
      >

        Submit
      </Button>
    </div>
  );
};

export default WalnutUpload;
