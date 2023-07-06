import React, { useState } from 'react';
import { PatternFormat } from 'react-number-format';

const ReactNumberFormat: React.FC = () => {
  const [number, setNumber] = useState<string>();
  return (
    <PatternFormat
      format="+7 (###) ###-##-##"
      onChange={(e) => setNumber(e.target.value)}
      placeholder="Ввести"
      value={number}
    />
  );
};

export default ReactNumberFormat;
