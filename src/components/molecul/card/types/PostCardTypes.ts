import { IGetCommentsQueryResponse } from '@/interfaces/comment.interfaces';

export type PostCardTypes = {
  id: string;
  user_id: string;
  title: string;
  body: string;
  comments?: IGetCommentsQueryResponse[];
};

export type CommentCardTypes = {
  id: string;
  post_id: string;
  name: string;
  email: string;
  body: string;
};

export type UserPostTypes = {};
