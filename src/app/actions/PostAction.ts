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

export async function queryGetAllPosts({
  title,
  page,
  per_page,
}: {
  title?: string;
  page?: string;
  per_page?: string;
}) {
  const posts = await PostServices.getAllPosts({ title, page, per_page });

  return posts;
}
