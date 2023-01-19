/* eslint-disable jsx-a11y/label-has-associated-control */
import LoadFile from '@/components/ui/LoadFile/LoadFile';
import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

type Language = 'eng' | 'rus';

const Tesseracts: React.FC = () => {
  const [recognizedText, setRecognizedText] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<string[]>();
  const [language, setLanguage] = useState<Language>('rus');
  const recognize = async (files: FileList) => {
    if (!files.length) {
      return;
    }

    const filesURL = Array.from(files)?.map((file) => URL.createObjectURL(file));
    setSelectedImage(filesURL);

    try {
      const worker = await createWorker();
      await worker.loadLanguage(language);
      await worker.initialize(language);
      const { data: { text } } = await worker.recognize(filesURL[0]);
      await worker.terminate();
      setRecognizedText(text);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="font-bold text-3xl">Tesseract test</h1>
      <div className="flex flex-col self-start">
        <div className="flex text-white bg-slate-600 p-2 rounded-md">
          <h2>Text language in the pictures:</h2>
          <select
            className="bg-transparent"
            onChange={(e) => setLanguage(e.target.value as Language)}
          >
            <option value="rus">Русский</option>
            <option value="eng">English</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 justify-between w-full">
        <LoadFile
          callBack={recognize}
          previewFileUrl={selectedImage}
        />

        <div className="bg-white w-[50vw] p-4 border-[1px] rounded-md">
          <div className="text-center font-bold mb-2">Result</div>
          {recognizedText}
        </div>
      </div>
    </div>
  );
};

export default Tesseracts;
