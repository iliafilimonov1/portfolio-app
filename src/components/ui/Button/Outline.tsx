import React from 'react';
import ButtonTemplate, { ButtonTemplateProps } from './ButtonTemplate';

const Outline: React.FC<ButtonTemplateProps> = (props) => (
  <ButtonTemplate
    {...props}
    className="bg-green-800"
  />
);

export default Outline;
