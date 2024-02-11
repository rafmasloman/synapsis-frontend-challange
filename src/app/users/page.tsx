'use client';
import Button from '@/components/atomic/button/Button';
import Header from '@/components/molecul/header/Header';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { BiPlus } from 'react-icons/bi';

type Props = {};

const UserPage = (props: Props) => {
  const { push } = useRouter();
  const params = usePathname();

  console.log('params : ', params);

  const handleMovePage = () => {
    push(`/users/add-user`);
  };

  return (
    <div>
      <Header title="Manage User">
        <Button
          className="bg-primary-color text-white flex items-center gap-2.5 lg:px-3 lg:py-2 rounded-full"
          leftSection={<BiPlus size={20} />}
          onClick={handleMovePage}
        >
          Tambah User
        </Button>
      </Header>
    </div>
  );
};

export default UserPage;
