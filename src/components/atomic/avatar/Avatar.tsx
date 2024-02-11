import React from 'react';
import { AvatarPropsTypes } from './types/AvatarTypes';
import { PiUserCircle } from 'react-icons/pi';

const Avatar = ({ src, children }: AvatarPropsTypes) => {
  return (
    <div className="flex items-center space-x-2 w-fit">
      <PiUserCircle className="text-gray-400 text-[25px] md:text-[36px]" />
      {children}
    </div>
  );
};

export default Avatar;
