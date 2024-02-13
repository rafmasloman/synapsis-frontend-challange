'use server';

import PostServices from '@/services/post/post.services';

export async function queryBlogPostDetail(postId: string) {
  const postDetail = await PostServices.getPostDetail(postId);

  return postDetail;
}

export async function queryBlogPostCommentsDetail(postId: string) {
  const postComments = await PostServices.getAllCommentsByPost(postId);

  return postComments;
}
