'use client';

import Link from 'next/link';
import React from 'react';
import { NavLinkTypes } from './types/NavLinkTypes';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label }: NavLinkTypes) => {
  const params = usePathname();
  return (
    <Link className="ml-10 text-white" href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
