'use server';

import { useRouter } from 'next/navigation';

export const useRefetch = () => {
  const { refresh } = useRouter();

  return [refresh];
};
