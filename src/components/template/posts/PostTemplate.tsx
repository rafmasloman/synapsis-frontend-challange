'use client';

import PostServices from '@/services/post/post.services';
import { PostTemplateTypes } from './types/PostTemplateTypes';
import PostCard from '@/components/molecul/card/PostCard';

const PostTemplate = ({ data }: PostTemplateTypes) => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {data?.map((post) => {
        return (
          <PostCard
            key={post.id}
            body={post.body}
            title={post.title}
            id={post.id}
            user_id={post.user_id}
          />
        );
      })}
    </section>
  );
};

export default PostTemplate;
