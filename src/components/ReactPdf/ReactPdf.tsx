import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFDocument {
  numPages?: number;
  data?: string | ArrayBuffer;
  onConvert?: (pdfFile: File) => Promise<void>;
}

const ReactPdf: React.FC<{ data?: string }> = ({ data, onConvert }) => {
  const [file, setFile] = useState<string | undefined>(data);
  const [pdfDataUrl, setPdfDataUrl] = useState<string | undefined>(undefined);

  // Хэндлер загрузки файла
  const handleDocumentLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const objectUrl = URL.createObjectURL(event?.target.files[0]);
      setFile(objectUrl);
    }
  };

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
      <input
        onChange={handleDocumentLoad}
        type="file"
      />
      {file && (
        <button
          onClick={() => handleConvertClick(file)}
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
