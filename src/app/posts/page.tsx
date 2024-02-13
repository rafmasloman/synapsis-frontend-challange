'use client';

import Pagination from '@/components/molecul/pagination/Pagination';
import PostTemplate from '@/components/template/posts/PostTemplate';
import { usePagination } from '@/hooks/usePagination';
import PostServices from '@/services/post/post.services';
import React, { useEffect, useState } from 'react';
import { queryGetAllPosts } from '../actions/PostAction';
import { useRouter } from 'next/navigation';
import { useBlogPost } from '@/hooks/useBlogPost';

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  const { currentPage, handleNextPage, handlePreviousPage } = usePagination();
  const {
    data: blogPosts,
    isSuccess,
    refetch,
  } = useBlogPost({
    title: '',
    page: currentPage.toString(),
    per_page: '10',
  });

  useEffect(() => {
    setPosts(blogPosts);
  }, [blogPosts, isSuccess]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <section className="">
      <div className="w-full h-[2px] bg-gray-200 my-2"></div>

      <PostTemplate data={posts} />

      <div className=" my-3.5"></div>

      <Pagination
        currentPage={currentPage}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
      />
    </section>
  );
};

export default PostPage;
