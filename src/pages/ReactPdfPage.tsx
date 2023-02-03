import ReactPdf from '@/components/ReactPdf/ReactPdf';
import React from 'react';
import * as PDFJS from 'pdfjs-dist';

interface ReactPdfPageProps { }

const ReactPdfPage: React.FC<ReactPdfPageProps> = () => {
  const [pdfDataUrl, setPdfDataUrl] = React.useState<string | undefined>(undefined);

  const handleConvertClick = async (pdfFile: File) => {
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      try {
        const pdfData = new Uint8Array(fileReader.result as ArrayBuffer);
        const pdf: PDFJS.PDFDocumentProxy = await PDFJS.getDocument({ data: pdfData }).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
        const imgData = canvas.toDataURL('image/jpeg');
        setPdfDataUrl(imgData);
      } catch (error) {
        console.error(error);
        alert('An error occurred while converting the PDF to JPEG');
      }
    };
    fileReader.readAsArrayBuffer(pdfFile);
  };

  return (
    <ReactPdf
      data={pdfDataUrl}
      onConvert={handleConvertClick}
    />
  );
};

export default ReactPdfPage;
