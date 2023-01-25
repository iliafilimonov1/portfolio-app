/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer, Worker, Plugin } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const WalnutPreviewFile: React.FC<{}> = () => {
  const [pdfFile, setPDFFile] = useState<any>();
  const [viewFile, setViewFile] = useState<any>();

  const fileType = ['application/pdf'];

  const changeHandler = (e: any) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (evt: any) => {
          setPDFFile(evt.target.result);
        };
      } else {
        setPDFFile('');
      }
    } else {
      console.log('Please choose file!');
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewFile(pdfFile);
    } else {
      setViewFile(null);
    }
  };

  const newplugin = defaultLayoutPlugin();

  return (
    (
      <div className="bg-slate-50">
        <form
          action="#"
          onSubmit={handleSubmit}
        >
          <input
            onChange={changeHandler}
            type="file"
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>

        <h2>View PDF</h2>
        <div className="w-full h-screen d-flex bg-slate-400">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            {viewFile && (
              <Viewer
                fileUrl={viewFile}
                plugins={[newplugin as Plugin]}
              />
            )}
            {!viewFile && <>No PDF File</>}
          </Worker>
        </div>
      </div>
    )
  );
};

export default WalnutPreviewFile;
