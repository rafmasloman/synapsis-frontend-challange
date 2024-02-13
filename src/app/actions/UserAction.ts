'use server';

import { ICreateUserMutationParams } from '@/interfaces/user.interfaces';
import UserService from '@/services/user/user-services';

export async function createUser(payload: ICreateUserMutationParams) {
  const bodyData = {
    name: payload.name,
    email: payload.email,
    gender: payload.gender,
    status: payload.status,
  };

  const postData = await UserService.createUser(bodyData);

  return postData;
}

export async function fetchUser() {
  const getData = await UserService.getAllUsers();

  return getData;
}

export async function deleteUser(userId: string, refresh?: () => void) {
  const deleteUser = await UserService.deleteUser(userId);

  if (deleteUser !== 204) {
    return null;
  }

  return deleteUser;
}

export async function mutationUpdate(
  payload: ICreateUserMutationParams,
  userId: string,
) {
  const updateUser = await UserService.updateUser(payload, userId);

  return updateUser;
}

export async function queryUserDetail(userId: string) {
  const getUser = await UserService.getUserDetail(userId);

  return getUser;
}
