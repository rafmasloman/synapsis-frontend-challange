'use client';

import PostTemplate from '@/components/template/posts/PostTemplate';
import PostServices from '@/services/post/post.services';
import React, { useEffect, useState } from 'react';

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const posts = await PostServices.getAllPosts();
      setPosts(posts);
    };

    fetchPost();
  }, []);

  return (
    <section className="">
      <div className="w-full h-[2px] bg-gray-200 my-2"></div>

      <PostTemplate data={posts} />
    </section>
  );
};

export default PostPage;
