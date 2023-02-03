import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFDocument {
  numPages?: number;
  data?: string | ArrayBuffer;
}

const ReactPdf: React.FC<{ document?: string }> = ({ document }) => {
  const [file, setFile] = useState<string | undefined>(document);
  const [pdfData, setPdfData] = useState<PDFDocument | null>(null);

  // Хэндлер загрузки файла
  const handleDocumentLoad = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.files) {
      const objectUrl = URL.createObjectURL(event?.target.files[0]);
      setFile(objectUrl);
    }
  };

  const onLoadSuccess = (pdfDocument: PDFDocument) => {
    if (!pdfDocument) {
      return;
    }
    setPdfData(pdfDocument);
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
      {pdfData && <p>{pdfData.numPages}</p>}
    </div>
  );
};

export default ReactPdf;
