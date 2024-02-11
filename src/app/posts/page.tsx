import PostTemplate from '@/components/template/posts/PostTemplate';
import PostServices from '@/services/post/post.services';
import React from 'react';

const PostPage = async () => {
  const posts = await PostServices.getAllPosts();

  return (
    <section className="">
      <div className="w-full h-[2px] bg-gray-200 my-2"></div>

      <PostTemplate data={posts} />
    </section>
  );
};

export default PostPage;
