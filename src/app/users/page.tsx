'use client';

import Button from '@/components/atomic/button/Button';
import Header from '@/components/molecul/header/Header';
import PopupModal from '@/components/molecul/modal/PopupModal';
import { IGetUserQueryResponse } from '@/interfaces/user.interfaces';
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { BiPlus } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import useModal from '@/hooks/useModal';
import {
  useUserDeleteMutation,
  useUserQueryGetMutation,
} from '@/hooks/useUser';
import { useQueryClient } from '@tanstack/react-query';
import TextInput from '@/components/molecul/input/TextInput';
import { usePagination } from '@/hooks/usePagination';
import Pagination from '@/components/molecul/pagination/Pagination';
import { useSearch } from '@/hooks/useSearch';
import SearchInput from '@/components/molecul/input/SearchInput';

const UserPage = () => {
  const [userId, setUserId] = useState<string>('');

  const { isOpen, closeModal, openModal } = useModal(false);
  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const { searchQuery, handleSearchChange } = useSearch();

  const { data: userData, refetch } = useUserQueryGetMutation({
    name: searchQuery,
    page: currentPage.toString(),
    per_page: '10',
  });
  const { mutate: deleteUser, isPending } = useUserDeleteMutation();

  const handleDeleteUser = async () => {
    deleteUser(userId);

    if (!isPending) {
      closeModal();
    }
  };

  const handleOpenModal = (userId: string) => {
    setUserId(userId);

    openModal();
  };

  useEffect(() => {
    refetch();
  }, [currentPage, searchQuery, refetch]);

  return (
    <div>
      <Header title="Manage User">
        <Button
          className="bg-primary-color text-white flex items-center gap-2.5 lg:px-3 lg:py-2 rounded-full"
          leftSection={<BiPlus size={20} />}
        >
          <Link href={`/users/add-user`}>Tambah User</Link>
        </Button>
      </Header>

      <div className="my-7"></div>

      <SearchInput
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        placeholder="Cari User"
      />

      <div className="my-12"></div>

      <PopupModal
        title="Hapus data user?"
        description="Data yang telah dihapus tidak dapat dikembalikan"
        isModalOpen={isOpen}
        cancel={closeModal}
      >
        <div className="grid grid-cols-2 gap-5">
          <Button
            className="bg-red-500 py-1.5 text-white rounded-lg w-full"
            type="button"
            onClick={handleDeleteUser}
          >
            Hapus
          </Button>

          <Button
            className="w-full bg-gray-200 text-gray-500 rounded-lg"
            onClick={closeModal}
          >
            Batal
          </Button>
        </div>
      </PopupModal>

      <div className="relative  overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-white ">
          <thead className="text-xs text-white uppercase bg-primary-color ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user: IGetUserQueryResponse) => {
              return (
                <tr
                  key={user.id}
                  className="bg-white border-b text-primary-color"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">{user.status}</td>
                  <td className="px-6 py-4 flex gap-2.5">
                    <div>
                      <Link
                        className="flex items-center px-2.5 py-1.5 bg-primary-color text-white rounded-lg gap-2"
                        href={`/users/${user.id}/edit`}
                      >
                        <TbEdit />
                        <p>Edit</p>
                      </Link>
                    </div>

                    <div>
                      <Button
                        className="flex items-center gap-2 bg-red-500 text-white px-2.5 py-1.5 rounded-md"
                        leftSection={<MdDeleteOutline />}
                        onClick={() => handleOpenModal(user.id)}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="my-10"></div>

        <Pagination
          currentPage={currentPage}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </div>
  );
};

export default UserPage;
