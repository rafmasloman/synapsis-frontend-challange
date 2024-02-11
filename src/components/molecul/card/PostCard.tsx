'use client';

import { COLORS } from '@/utils/Colors';
import { PostCardTypes } from './types/PostCardTypes';
import Button from '@/components/atomic/button/Button';
import PostServices from '@/services/post/post.services';
import { useEffect, useState } from 'react';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import Avatar from '@/components/atomic/avatar/Avatar';
import UserService from '@/services/user/user-services';
import { IGetUserQueryResponse } from '@/interfaces/user.interfaces';
import { UserSchema } from '@/schema/UserSchema';
import { useRouter } from 'next/navigation';

const PostCard = ({ id, title, body, user_id }: PostCardTypes) => {
  const [comments, setComments] = useState<[]>([]);
  const [author, setAuthor] = useState<IGetUserQueryResponse>(UserSchema);

  const { push } = useRouter();

  const handleMovePage = () => {
    push(`/posts/${id}`);
  };

  useEffect(() => {
    const fetchPostComments = async () => {
      const postComments = await PostServices.getAllCommentsByPost(id);

      setComments(postComments);
    };

    const fetchUserDetail = async () => {
      const userDetail = await UserService.getUserDetail(user_id);

      setAuthor(userDetail);
    };

    fetchPostComments();
    fetchUserDetail();
  }, [id, user_id]);

  console.log('author name : ', id);

  return (
    <div className="bg-white flex flex-col justify-between space-y-4 md:space-y-7 rounded-xl shadow-md p-6 lg:p-7">
      <Avatar>
        <div>
          <p className="text-primary-color text-xs md:text-base">
            {author.name}
          </p>
          <p className={`text-gray-400 text-xs md:text-sm `}>
            Author status :{' '}
            <span
              className={` font-medium ${
                author.status !== 'active' ? 'text-red-400' : 'text-green-500'
              }`}
            >
              {author.status}
            </span>
          </p>
        </div>
      </Avatar>
      <div>
        <h3 className={`text-primary-color font-semibold text-lg md:text-2xl`}>
          {title}
        </h3>
        <p className="text-gray-400 text-justify line-clamp-4 mt-2.5 text-xs md:text-base">
          {body}
        </p>
      </div>

      <div className="flex w-fit items-center space-x-1.5">
        <IoChatboxEllipsesOutline className="text-sky-600 text-sm md:text-base" />
        <p className="text-sky-600 text-xs">{comments?.length} Komentar</p>
      </div>

      <div className="">
        <Button
          className="bg-secondary-color text-gray-500 font-medium w-full py-3 rounded-lg text-xs md:text-base"
          onClick={handleMovePage}
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export default PostCard;
