import { API_KEY } from '@/utils/API';
import axios from 'axios';

class PostServices {
  private static postEndpoint = 'posts';

  static async getAllPosts() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.postEndpoint}`,
        {
          headers: {
            Authorization: `Bearer ${
              process.env.NEXT_PUBLIC_API_GO_TOKEN || API_KEY.TOKEN
            }`,
          },
        },
      );

      const data = await response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getAllCommentsByPost(postId: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.postEndpoint}/${postId}/comments`,
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async getPostDetail(postId: string) {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.postEndpoint}/${postId}`,
      );

      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default PostServices;
