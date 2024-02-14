'use client';

import Button from '@/components/atomic/button/Button';
import Header from '@/components/molecul/header/Header';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';
import { BiPlus } from 'react-icons/bi';

const UserLayout = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();

  const handleMovePage = () => {
    push(`/users/add-user`);
  };

  return (
    <main className="container px-10 lg:px-24">
      <div className="my-20"></div>
      {children}
    </main>
  );
};

export default UserLayout;
