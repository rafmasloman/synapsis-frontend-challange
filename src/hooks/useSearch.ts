import { ChangeEvent, useState } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  return { searchQuery, handleSearchChange };
};
