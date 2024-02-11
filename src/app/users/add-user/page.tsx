import Button from '@/components/atomic/button/Button';
import SelectInput from '@/components/molecul/input/SelectInput';
import TextInput from '@/components/molecul/input/TextInput';
import UserService from '@/services/user/user-services';

const AddUserPage = () => {
  async function createUser(formData: FormData) {
    'use server';

    const bodyData = {
      name: formData.get('name'),
      email: formData.get('email'),
      gender: formData.get('gender'),
      status: formData.get('status'),
    };

    const postData = await UserService.createUser(bodyData)

    console.log('data : ', bodyData);
  }

  return (
    <div>
      <form method="POST" action={createUser}>
        <TextInput label="Nama" placeholder="Masukkan Nama Anda" name="name" />

        <TextInput
          label="Email"
          placeholder="Masukkan Email Anda"
          name="email"
        />

        <SelectInput
          label="Gender"
          options={[
            { text: 'Laki-laki', value: 'male' },
            { text: 'Perempuan', value: 'female' },
          ]}
          name="gender"
        />

        <SelectInput
          label="Status"
          options={[
            { text: 'Aktif', value: 'active' },
            { text: 'Tidak Aktif', value: 'inactive' },
          ]}
          name="status"
        />

        <div>
          <Button className="bg-primary-color text-white" type="submit">
            Tambah Data
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;
