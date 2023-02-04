import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import WalnutUpload from '@/components/WalnutComponents/WalnutUpload';
import { imageSlice } from '@/store/imagestore/ImageSlice';
import CropImage from '@/components/CropImage/CropImage';
import { convertPDFToJPEG } from '@/services/utils';

/** Страница для работы с пдф */
const Walnut = () => {
  const { file } = useAppSelector((state) => state.imageReducer);
  const { change } = imageSlice.actions;
  const dispatch = useAppDispatch();

  const changeHandler = async (files: File[]) => {
    const selectedFile = files[0];
    const convertedFile = await convertPDFToJPEG(selectedFile);

    dispatch(change({
      file: convertedFile?.[0].Url ?? '',
      imageName: selectedFile.name,
      imageSize: selectedFile.size.toString(),
    }));
  };
  return (
    <div className="flex flex-col">
      <div className="bg-slate-400">
        <WalnutUpload onDrop={changeHandler} />
      </div>
      {file && (<CropImage file={file} />)}
    </div>
  );
};

export default Walnut;
