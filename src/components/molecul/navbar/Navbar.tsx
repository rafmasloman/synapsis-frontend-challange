import React from 'react';
import { NavbarTypes } from './types/NavbarTypes';
import NavLink from '@/components/atomic/navlink/NavLink';
import GonewsIcon from '@/assets/icons/GonewsIcon';

type Props = {};

const Navbar = ({ data }: NavbarTypes) => {
  return (
    <nav className="hidden md:flex  md:flex-row items-center justify-between py-5 lg:px-24 bg-black-primary mb-16">
      <div>
        <GonewsIcon />
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
