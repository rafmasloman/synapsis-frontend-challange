'use client';

import React from 'react';
import { InputPropsTypes } from './types/InputTypes';

const TextInput = ({
  label,
  placeholder,
  classname,
  name,
  ...props
}: InputPropsTypes) => {
  console.log('props : ', props);

  return (
    <div className="flex flex-col justify-center">
      <label>{label}</label>
      <input placeholder={placeholder} name={name} {...props} />
    </div>
  );
};

export default TextInput;
