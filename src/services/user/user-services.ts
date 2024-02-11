import {
  ICreateUserMutationParams,
  IUpdateUserMutationParams,
} from '@/interfaces/user.interfaces';
import axios from 'axios';

class UserService {
  private static userEndpoint = '/users';

  static async createUser(payload: any) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer bdd54165b2e5cf0549d84dd3afcb78fc2e2bce2ccfa77b0194017dbecffe6594',
          },
        },
      );

      const data = await response.data;
      return data;
    } catch (error) {
      console.log('error : ', error);

      throw error;
    }
  }

  static async getAllUsers() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}`,
      );

      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUserPost(userId: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}/posts`,
      );

      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserDetail(userId: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}`,
      );

      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(payload: IUpdateUserMutationParams, userId: string) {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId: string) {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}`,
      );

      const data = await response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
