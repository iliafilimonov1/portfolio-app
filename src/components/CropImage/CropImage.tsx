import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import Button from '../ui/Button/Button';

const CropImage: React.FC<{ file?: string }> = ({ file }) => {
  /** Стэйты необходимые для работы ReactCrop */
  const [image, setImage] = useState<HTMLImageElement>();
  const [crop, setCrop] = useState<ReactCrop.Crop>({ aspect: 16 / 9 });
  const [croppedImage, setCroppedImage] = useState<string>();

  /** Функция для обрезки */
  function getCroppedImg() {
    if (!image) {
      return;
    }
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    image.crossOrigin = 'Anonymous';
    canvas.width = crop.width ?? 0;
    canvas.height = crop.height ?? 0;
    const ctx = canvas.getContext('2d');

    ctx?.drawImage(
      image,
      (crop?.x ?? 0) * scaleX,
      (crop?.y ?? 0) * scaleY,
      (crop?.width ?? 0) * scaleX,
      (crop?.height ?? 0) * scaleY,
      0,
      0,
      crop?.width ?? 0,
      crop?.height ?? 0,
    );

    canvas.toBlob(() => {
      const base64Image = canvas.toDataURL('image/jpeg');
      setCroppedImage(base64Image);
    });
  }

  return (
    <div className="w-full">
      <div className="right">
        {file && (
          <div className="flex flex-col">
            <ReactCrop
              crop={crop}
              onChange={setCrop}
              onImageLoaded={setImage}
              src={file}
            />
            <Button
              className="rounded-none"
              onClick={() => getCroppedImg()}
              variant="primary"
            >
              CROP
            </Button>
          </div>
        )}
        {croppedImage && (
          <img
            alt="asd"
            src={croppedImage}
          />
        )}
      </div>
    </div>
  );
};

export default CropImage;
