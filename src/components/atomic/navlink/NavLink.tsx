import Link from 'next/link';
import React from 'react';
import { NavLinkTypes } from './types/NavLinkTypes';

const NavLink = ({ href, label }: NavLinkTypes) => {
  return <Link href={href}>{label}</Link>;
};

export default NavLink;
