import React from 'react';
import { SearchInputPropsTypes } from './types/InputTypes';

const SearchInput = ({
  searchQuery,
  handleSearchChange,
  placeholder
}: SearchInputPropsTypes) => {
  return (
    <input
      className="bg-stone-100 shadow-sm px-5 py-2.5 rounded-lg w-full md:w-1/2 lg:w-1/3"
      placeholder={placeholder}
      value={searchQuery}
      onChange={handleSearchChange}
    />
  );
};

export default SearchInput;
