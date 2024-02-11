import React from 'react';
import { NavbarTypes } from './types/NavbarTypes';
import NavLink from '@/components/atomic/navlink/NavLink';

type Props = {};

const Navbar = ({ data }: NavbarTypes) => {
  return (
    <nav className="hidden md:flex  md:flex-row items-center justify-between lg:px-24">
      <div>
        <h1 className="italic font-bold text-2xl">GoNews</h1>
      </div>
      <ul className="">
        {data.map((item) => {
          return <NavLink key={item.id} label={item.label} href={item.href} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
