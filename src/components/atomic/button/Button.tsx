import React from 'react';
import { ButtonPropsTypes } from './types/ButtonTypes';

const Button = ({ children, className, onClick }: ButtonPropsTypes) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
