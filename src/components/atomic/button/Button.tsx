import React from 'react';
import { ButtonPropsTypes } from './types/ButtonTypes';

const Button = ({
  children,
  className,
  onClick,
  leftSection,
  type,
}: ButtonPropsTypes) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {leftSection}
      {children}
    </button>
  );
};

export default Button;
