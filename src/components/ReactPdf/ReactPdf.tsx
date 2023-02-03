import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFDocument {
  numPages?: number;
  data?: string | ArrayBuffer;
  onConvert?: (pdfFile: File) => Promise<void>;
}

const ReactPdf: React.FC<{ data?: string }> = ({ data, onConvert }) => {
  const [file, setFile] = useState<string | undefined>(data);
  const [numPages, setNumPages] = useState<number | null>(null);

  // Хэндлер загрузки файла
  const handleDocumentLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const objectUrl = URL.createObjectURL(event?.target.files[0]);
      setFile(objectUrl);
    }
  };

  const onLoadSuccess = (pdfDocument: PDFDocument) => {
    if (pdfDocument && pdfDocument.numPages) {
      setNumPages(pdfDocument.numPages);
    }
  };

  return (
    <div className="w-60 h-20 bg-slate-500">
      <input
        onChange={handleDocumentLoad}
        type="file"
      />
      {file && (
        <Document
          file={file}
          onLoadSuccess={onLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      )}
      {numPages && <p>{numPages}</p>}
    </div>
  );
};

export default ReactPdf;
