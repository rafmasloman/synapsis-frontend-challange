'use client';

import React from 'react';
import { InputPropsTypes } from './types/InputTypes';
import Input from '@/components/atomic/input/Input';

const TextInput = React.forwardRef<HTMLInputElement, InputPropsTypes>(
  ({ label, placeholder, type, ...props }, ref) => {
    return (
      <div className="flex flex-col justify-center">
        <label>{label}</label>

        <div className="my-1.5"></div>
        <input
          type={type}
          className="bg-gray-50 px-5 py-2.5 rounded-lg"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
export default TextInput;
