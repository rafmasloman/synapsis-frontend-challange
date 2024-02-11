export interface ICreateUserMutationParams {
  name: string;
  gender: string;
  email: string;
  status: string;
}

export interface IUpdateUserMutationParams {
  name?: string;
  gender?: string;
  email?: string;
  status?: string;
}

export interface IGetUserQueryResponse {
  id: string;
  name: string;
  gender: string;
  email: string;
  status: string;
}
