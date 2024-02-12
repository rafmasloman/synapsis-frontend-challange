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
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_TOKEN}`,
          },
        },
      );

      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      if (error.response) {
        const errorResponse = {
          ...error.response.data[0],
          status: error.response.status,
        };

        return errorResponse;
      } else {
        throw error;
      }
    }
  }

  static async getAllUsers() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_TOKEN}`,
          },
        },
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
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_TOKEN}`,
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

  static async updateUser(payload: ICreateUserMutationParams, userId: string) {
    console.log('user id : ', userId);

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_TOKEN}`,
          },
        },
      );

      const data = await response.data;
      return data;
    } catch (error: any) {
      console.log(error.response);

      throw error;
    }
  }

  static async deleteUser(userId: string) {
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.userEndpoint}/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GO_TOKEN}`,
          },
        },
      );

      const data = response.status;
      return data;
    } catch (error: any) {
      console.log(error.response.data);

      throw error;
    }
  }
}

export default UserService;
