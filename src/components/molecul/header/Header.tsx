import React from 'react';
import { HeaderPropsTypes } from './types/HeaderTypes';

type Props = {};

const Header = ({ title, children }: HeaderPropsTypes) => {
  return (
    <div className="flex items-center justify-between ">
      <h2 className="font-bold text-2xl">{title}</h2>

      {children}
    </div>
  );
};

export default Header;
