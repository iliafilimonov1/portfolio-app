import * as React from 'react';
import * as PDFJS from 'pdfjs-dist';

interface PdfToJpegConverterProps { }

const PdfToJpegConverter: React.FC<PdfToJpegConverterProps> = () => {
  const [pdfFile, setPdfFile] = React.useState<File | null>(null);
  const [imageInJpeg, setImageInJpeg] = React.useState<string | null>(null);

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPdfFile(file || null);
  };

  const handleConvertClick = async () => {
    if (!pdfFile) {
      alert('Please select a PDF file to convert.');
      return;
    }
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
        setImageInJpeg(imgData);
      } catch (error) {
        console.error(error);
        alert('An error occurred while converting the PDF to JPEG');
      }
    };
    fileReader.readAsArrayBuffer(pdfFile);
  };

  return (
    <>
      
      <button
        onClick={handleConvertClick}
        type="submit"
      >
        Convert to JPEG
      </button>
      {imageInJpeg && (
        <img
          alt="Converted JPEG"
          src={imageInJpeg}
        />
      )}
    </>
  );
};

export default PdfToJpegConverter;
