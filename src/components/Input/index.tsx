import React, { InputHTMLAttributes } from 'react';

import { Input } from './styles';

const CustomInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props,
) => {
  return <Input {...props} />;
};

export default CustomInput;
