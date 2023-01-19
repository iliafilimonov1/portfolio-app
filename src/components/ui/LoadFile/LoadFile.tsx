/* eslint-disable jsx-a11y/label-has-associated-control */
import { extractStyles } from '@/services/utils';
import React from 'react';
import { LoadFileProps } from './types';

const LoadFile: React.FC<LoadFileProps> = ({
  callBack,
  title = 'Select file',
  previewFileUrl,
}) => {
  const loadFileHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (callBack && files?.length) {
      callBack(files);
    }
  };
  return (
    <label
      className={
        extractStyles`
      input-file flex-1 h-min items-center justify-center
      bg-slate-200 px-4 py-2 rounded-md font-bold text-gray-500 text-center
    `
      }
      htmlFor="drop"
    >

      <div>
        {title}
      </div>
      <div className="
        flex items-center justify-center font-bold relative overflow-auto hover:opacity-70
        text-gray-500 min-w-[300px] min-h-[300px] border-dashed border-gray-500 bg-white border-[1px]"
      >
        <input
          id="drop"
          onChange={loadFileHandler}
          type="file"
        />
        {
          previewFileUrl
            ? (
              <div className="absolute top-0">
                {previewFileUrl.map((url) => (
                  <img
                    key={url}
                    alt="droppedimage"
                    className="z-0"
                    src={url}
                  />
                ))}
              </div>
            )
            : <div className="absolute">Drop file...</div>
        }
      </div>
    </label>
  );
};

export default LoadFile;
