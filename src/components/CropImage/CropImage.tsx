import React, { useEffect, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const CropImage: React.FC<{ file?: string }> = ({ file }) => {
  const [src, selectFile] = useState<string | undefined>(file);

  console.log('file', file);

  const [image, setImage] = useState<HTMLImageElement>();

  const [crop, setCrop] = useState<ReactCrop.Crop>({ aspect: 16 / 9 });

  const [result, setResult] = useState<string>();

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const urlFile = e.target.files ? URL.createObjectURL(e.target.files[0]) : undefined;
    selectFile(urlFile);
  };

  useEffect(() => {
    selectFile(file);
  }, [file]);

  function getCroppedImg() {
    if (!image) {
      return;
    }
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
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
      setResult(base64Image);
    });
  }

  return (
    <div className="container">
      <div className="left">
        <input
          accept="image/*"
          onChange={changeHandle}
          type="file"
        />
      </div>

      <div className="right">
        {
          src && (
            <>
              <ReactCrop
                crop={crop}
                onChange={
                  (cropObj: ReactCrop.Crop) => setCrop(cropObj)
                }
                onImageLoaded={(e) => setImage(e)}
                src={src}
              />
              <button
                onClick={getCroppedImg}
                type="submit"
              >
                Crop image
              </button>
            </>
          )
        }
        {
          result && (
            <p>
              <img
                alt="asd"
                src={result}
              />
            </p>
          )
        }
      </div>
    </div>
  );
};

export default CropImage;
