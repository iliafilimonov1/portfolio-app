import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format';

const ReactNumberFormat: React.FC = () => {
  const [number, setNumber] = useState<string>();
  return (
    <div>
      <h1>Библиотека автоматически подставляет указанные шаблон под данные</h1>
      <PatternFormat
        format="+7 (###) ###-##-##"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ввести"
        value={number}
      />
      <PatternFormat
        format="    -    -    -    "
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ввести"
        value={number}
      />
      <PatternFormat
        format="_ _ _ _ _ _ _ _"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ввести"
        value={number}
      />
      <PatternFormat
        format="_ _ _ _ _ _ _ _"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ввести"
        value={number}
      />
    </div>
  );
};

export default ReactNumberFormat;
