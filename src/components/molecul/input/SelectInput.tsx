import React from 'react';
import { OptionInputPropsTypes, SelectPropsTypes } from './types/InputTypes';

const SelectInput = React.forwardRef<HTMLInputElement, any>(
  ({ label, options, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label>{label}</label>

        <div className="my-1.5"></div>
        <select
          className="bg-gray-100 border px-5 py-2.5 rounded-lg"
          {...props}
        >
          <option defaultValue={`Pilih ${label}`}>Pilih {label}</option>
          {options?.map((option: OptionInputPropsTypes) => {
            return (
              <option key={option.text} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
    );
  },
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
