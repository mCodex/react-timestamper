import { ButtonHTMLAttributes } from 'react';

import styled from 'styled-components';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = styled.button`
  align-self: stretch;
  border-radius: 5px;
  height: 50px;
  color: #fff;
  margin: 30px 0 0 0;
  border: 2px solid #eb9932;
  background-color: #eb9932;
`;

export default Button;
