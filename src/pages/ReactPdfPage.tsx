import ReactPdf from '@/components/ReactPdf/ReactPdf';
import React, { useState } from 'react';
import Dropzone from '@/components/ui/Dropzone/Dropzone';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { imageSlice } from '@/store/imagestore/ImageSlice';
import CropImage from '@/components/CropImage/CropImage';

interface ReactPdfPageProps { }

const ReactPdfPage: React.FC<ReactPdfPageProps> = () => {
  const { file } = useAppSelector((state) => state.imageReducer);
  const { change } = imageSlice.actions;
  const dispatch = useAppDispatch();

  const [cropImage, setCropImage] = useState<string>();

  const onDropHandler = (value: File[]) => {
    const urlFile = URL.createObjectURL(value[0]);
    dispatch(change({
      file: urlFile,
    }));
  };

  return (
    <div>
      <Dropzone onDrop={onDropHandler} />
      <ReactPdf
        onConvert={(url) => setCropImage(url)}
        pdfFileUrl={file}
      />
      <CropImage
        file={cropImage}
      />
    </div>
  );
};

export default ReactPdfPage;
