'use client';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';

type IPostDetailUrlParams = {
  postId: string;
};

const PostDetailPage = () => {
  const { postId } = useParams<IPostDetailUrlParams>();

  console.log('post id : ', postId);

  return (
    <div>
      <h1>This is post detail page</h1>
    </div>
  );
};

export default PostDetailPage;
