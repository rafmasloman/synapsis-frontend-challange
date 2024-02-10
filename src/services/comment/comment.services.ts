import axios from 'axios';

class CommentServices {
  private static commentEndpoint = '/comments';

  static async getAllComments() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${this.commentEndpoint}`,
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default CommentServices;
