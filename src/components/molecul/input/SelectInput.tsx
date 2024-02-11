import React from 'react';
import { OptionInputPropsTypes, SelectPropsTypes } from './types/InputTypes';

const SelectInput = ({ label, options, name }: SelectPropsTypes) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name}>
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
};

export default SelectInput;
