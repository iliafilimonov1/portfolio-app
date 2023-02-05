import ReactPdf from '@/components/ReactPdf/ReactPdf';
import React from 'react';
import Dropzone from '@/components/ui/Dropzone/Dropzone';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { imageSlice } from '@/store/imagestore/ImageSlice';

interface ReactPdfPageProps { }

const ReactPdfPage: React.FC<ReactPdfPageProps> = () => {
  const { file } = useAppSelector((state) => state.imageReducer);
  const { change } = imageSlice.actions;
  const dispatch = useAppDispatch();

  const onDropHandler = (value: File[]) => {
    const urlFile = URL.createObjectURL(value[0]);
    dispatch(change({
      file: urlFile,
    }));
  };

  return (
    <div>
      <Dropzone onDrop={onDropHandler} />

      <ReactPdf fileUrl={file} />
    </div>
  );
};

export default ReactPdfPage;
