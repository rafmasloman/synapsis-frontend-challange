import React from 'react';
import { CommentCardTypes } from './types/PostCardTypes';
import Avatar from '@/components/atomic/avatar/Avatar';

const CommentCard = ({ name, body, email, id, post_id }: CommentCardTypes) => {
  return (
    <div className="flex flex-col justify-center shadow-lg bg-white rounded-lg px-5 py-3 w-full md:w-[60%] lg:w-[50%]">
      <Avatar>
        <h4>{name}</h4>
      </Avatar>

      <p>{body}</p>
    </div>
  );
};

export default CommentCard;
