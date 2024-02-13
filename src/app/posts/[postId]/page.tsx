'use client';

import {
  queryBlogPostCommentsDetail,
  queryBlogPostDetail,
} from '@/app/actions/PostAction';
import { queryUserDetail } from '@/app/actions/UserAction';
import CommentCard from '@/components/molecul/card/CommentCard';
import { IGetCommentsQueryResponse } from '@/interfaces/comment.interfaces';
import { IGetAllPostsQuery } from '@/interfaces/post.interfaces';
import { IGetUserQueryResponse } from '@/interfaces/user.interfaces';
import { PostDetailSchema } from '@/schema/PostSchema';
import { UserSchema } from '@/schema/UserSchema';
import PostServices from '@/services/post/post.services';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiCircle, BiSolidCircle } from 'react-icons/bi';
import { GoPencil } from 'react-icons/go';
import { MdPublish } from 'react-icons/md';

type IPostDetailUrlParams = {
  postId: string;
};

const PostDetailPage = () => {
  const { postId } = useParams<IPostDetailUrlParams>();
  const [postDetail, setPostDetail] =
    useState<IGetAllPostsQuery>(PostDetailSchema);
  const [postComments, setPostComments] = useState([]);
  const [userDetail, setUserDetail] =
    useState<IGetUserQueryResponse>(UserSchema);

  useEffect(() => {
    const getPostDetail = async () => {
      const response = await queryBlogPostDetail(postId);

      setPostDetail(response);
    };

    const getPostComments = async () => {
      const response = await queryBlogPostCommentsDetail(postId);
      setPostComments(response);
    };

    getPostDetail();
    getPostComments();
  }, [postId]);

  useEffect(() => {
    const getUserDetail = async () => {
      const response = await queryUserDetail(postDetail.user_id);

      setUserDetail(response.data);
    };

    getUserDetail();
  }, [postDetail.user_id]);

  return (
    <div>
      <div className="bg-gray-100 h-[300px] flex flex-col justify-center px-3.5 lg:px-12 rounded-lg">
        <h1 className="text-xl md:text-3xl lg:text-5xl  font-bold">
          {postDetail.title}
        </h1>
        <p className="mt-5 text-sm md:text-base">{postDetail.body}</p>

        <div className="flex flex-col text-xs md:text-base mt-5">
          <p>{userDetail.name}</p>
          <div className="flex items-center gap-2.5 md:mt-2.5 ">
            <p className="text-xs md:text-base">Author status : </p>
            <div className="flex items-center gap-1.5">
              <BiSolidCircle
                size={10}
                color={`${userDetail.status === 'active' ? 'green' : 'red'}`}
              />
              <p>{userDetail.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10"></div>
      <div>
        <h2 className="md:text-lg lg:text-2xl font-semibold">
          See Comments for this Post
        </h2>

        <div className="my-10"></div>

        <section className="flex flex-col gap-3.5">
          {postComments.map((comment: IGetCommentsQueryResponse) => {
            return (
              <CommentCard
                key={comment.id}
                body={comment.body}
                name={comment.name}
                id={comment.id}
                post_id={comment.post_id}
                email={comment.email}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default PostDetailPage;
