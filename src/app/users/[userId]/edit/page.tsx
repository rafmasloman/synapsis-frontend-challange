'use client';

import { getUserDetail, mutationUpdate } from '@/app/actions/UserAction';
import Button from '@/components/atomic/button/Button';
import SelectInput from '@/components/molecul/input/SelectInput';
import TextInput from '@/components/molecul/input/TextInput';
import { OptionInputPropsTypes } from '@/components/molecul/input/types/InputTypes';
import { ICreateUserMutationParams } from '@/interfaces/user.interfaces';
import UserService from '@/services/user/user-services';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const EditUser = () => {
  const params = useParams();
  const [userDetail, setUserDetail] = useState<any>({});

  useEffect(() => {
    const fetchUserDetail = async () => {
      const userDetail = await UserService.getUserDetail(
        params.userId as string,
      );

      setUserDetail(userDetail);
    };

    fetchUserDetail();
  }, []);

  const { register, handleSubmit, control } =
    useForm<ICreateUserMutationParams>({
      values: {
        name: userDetail?.name,
        email: userDetail?.email,
        gender: userDetail?.gender,
        status: userDetail?.status,
      },
    });

  const handleSubmitAction: () => void = handleSubmit(
    async (data: ICreateUserMutationParams) => {
      const response = await mutationUpdate(data, params.userId as string);

      if (response.status !== 201) {
        console.log('body : ', response);
      }
    },
  );

  console.log('user detail : ', userDetail);

  const options = [
    { text: 'Laki-laki', value: 'male' },
    { text: 'Perempuan', value: 'female' },
  ];

  return (
    <div>
      <form
        method="POST"
        action={handleSubmitAction}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <TextInput
          label="Nama"
          placeholder="Masukkan Nama Anda"
          {...register('name')}
        />

        <TextInput
          label="Email"
          placeholder="Masukkan Email Anda"
          {...register('email')}
        />

        <Controller
          control={control}
          render={({ field }) => (
            <SelectInput
              label="Jenis Kelamin"
              options={[
                { text: 'Laki-laki', value: 'male' },
                { text: 'Perempuan', value: 'female' },
              ]}
              {...field}
            />
          )}
          {...register('gender')}
        />


        <Controller
          control={control}
          render={({ field }) => (
            <SelectInput
              label="Status"
              options={[
                { text: 'Aktif', value: 'active' },
                { text: 'Tidak Aktif', value: 'inactive' },
              ]}
              {...field}
            />
          )}
          {...register('status')}
        />

        <div>
          <Button
            className="bg-primary-color px-5 py-2.5 rounded-lg text-white"
            type="submit"
          >
            Simpan Perubahan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
