'use client';

import { createUser } from '@/app/actions/UserAction';
import Button from '@/components/atomic/button/Button';
import SelectInput from '@/components/molecul/input/SelectInput';
import TextInput from '@/components/molecul/input/TextInput';
import { ICreateUserMutationParams } from '@/interfaces/user.interfaces';
import UserService from '@/services/user/user-services';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';

const AddUserPage = () => {
  // async function createUser(formData: FormData) {
  //   'use server';

  //   const bodyData = {
  //     name: formData.get('name'),
  //     email: formData.get('email'),
  //     gender: formData.get('gender'),
  //     status: formData.get('status'),
  //   };

  //   const postData = await UserService.createUser(bodyData);

  //   console.log('body data : ', bodyData);

  //   console.log('data : ', postData);
  // }

  const { push } = useRouter();

  const { register, handleSubmit, control } =
    useForm<ICreateUserMutationParams>();

  const handleSubmitAction: () => void = handleSubmit(async (data: any) => {
    const response = await createUser(data);

    if (response.status !== 201) {
      throw new Error();
    }

    push('/users');

    // revalidatePath('/users');

    console.log('response data : ', response);
  });

  return (
    <div>
      <form
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
            Tambah Data
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
