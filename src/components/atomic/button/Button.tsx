import React from 'react';
import { ButtonPropsTypes } from './types/ButtonTypes';

const Button = ({
  children,
  className,
  onClick,
  leftSection,
  type,
  ...props
}: ButtonPropsTypes) => {
  return (
    <button className={className} onClick={onClick} type={type} {...props}>
      {leftSection}
      {children}
    </button>
  );
};

export default Button;
