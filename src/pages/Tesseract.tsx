/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

type Language = 'eng' | 'rus';

const Tesseracts: React.FC = () => {
  const [recognizedText, setRecognizedText] = useState<string>();
  const [selectedImage, setSelectedImage] = useState<string>();
  const [language, setLanguage] = useState<Language>('rus');
  const recognize = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (!file) {
      return;
    }

    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);

    try {
      const worker = await createWorker();
      await worker.loadLanguage(language);
      await worker.initialize(language);
      const { data: { text } } = await worker.recognize(fileUrl);
      await worker.terminate();
      setRecognizedText(text);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center gap-4">
      <h1 className="font-bold text-3xl">Tesseract test</h1>
      <div className="flex">
        <label className="input-file flex-1 min-w-[300px]">
          <input
            onChange={recognize}
            type="file"
          />
          <span className="bg-slate-500 px-4 py-2 rounded-md font-bold text-white">Выберите изображение с тестом</span>
        </label>
        <div className="flex flex-col">
          <h2>
            Язык текста на картинке
          </h2>
          <select onChange={(e) => setLanguage(e.target.value as Language)}>
            <option value="rus">Русский</option>
            <option value="eng">Английский</option>
          </select>
          {' '}
          <img
            alt="img"
            src={selectedImage}
          />
        </div>

        <div className="bg-white w-[40vw]">
          {recognizedText}
        </div>
      </div>
    </div>
  );
};

export default Tesseracts;
