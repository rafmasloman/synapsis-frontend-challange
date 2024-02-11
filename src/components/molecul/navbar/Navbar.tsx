import React from 'react';
import { NavbarTypes } from './types/NavbarTypes';
import NavLink from '@/components/atomic/navlink/NavLink';

type Props = {};

const Navbar = ({ data }: NavbarTypes) => {
  return (
    <div>
      <div>
        <h1>NulisYuk</h1>
      </div>
      <ul>
        {data.map((item) => {
          return <NavLink key={item.id} label={item.label} href={item.href} />;
        })}
      </ul>

      
    </div>
  );
};

export default Navbar;
