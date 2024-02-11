import PostTemplate from '@/components/template/posts/PostTemplate';
import PostServices from '@/services/post/post.services';
import React from 'react';

const PostPage = async () => {
  const posts = await PostServices.getAllPosts();

  return (
    <main className="container px-10 lg:px-24">
      <div>PostPage</div>

      <PostTemplate data={posts} />
    </main>
  );
};

export default PostPage;
