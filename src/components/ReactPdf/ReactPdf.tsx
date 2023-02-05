import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

// interface PDFDocument {
//   numPages?: number;
//   fileUrl?: string | ArrayBuffer;
//   // onConvert?: (pdfFile: File) => Promise<void>;
// }

const ReactPdf: React.FC<{ fileUrl?: string }> = ({ fileUrl }) => {
  const [pdfDataUrl, setPdfDataUrl] = useState<string | undefined>(undefined);

  const handleConvertClick = async (file: string) => {
    try {
      const pdf = await pdfjs.getDocument(file).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      await page.render({ canvasContext: context as CanvasRenderingContext2D, viewport }).promise;
      const imgData = canvas.toDataURL('image/jpeg');
      setPdfDataUrl(imgData);
    } catch (error) {
      console.error(error);
      alert('An error occurred while converting the PDF to JPEG');
    }
  };

  return (
    <div className="w-60 h-20 bg-slate-500">
      {fileUrl && (
        <button
          onClick={() => handleConvertClick(fileUrl)}
          type="button"
        >
          Convert
        </button>
      )}
      {pdfDataUrl && (
        <img
          alt="some text"
          src={pdfDataUrl}
        />
      )}
    </div>
  );
};

export default ReactPdf;
