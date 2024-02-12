import WarningIcon from '@/assets/icons/WarningIcon';
import Button from '@/components/atomic/button/Button';
import React, { ReactNode, useState } from 'react';
import { BiX } from 'react-icons/bi';

type PopupModalPropsTypes = {
  title: string;
  description: string;
  confirm?: () => void;
  cancel?: () => void;
  isModalOpen?: boolean;
  children: ReactNode;
};

const PopupModal = ({
  title,
  description,
  confirm,
  cancel,
  isModalOpen,
  children,
}: PopupModalPropsTypes) => {
  return (
    <div
      className={`${
        isModalOpen ? 'fixed flex items-center justify-center' : 'hidden'
      } fixed z-10 inset-0 overflow-y-auto bg-gray-500 bg-opacity-75`}
    >
      <div
        className={` z-50     bg-white rounded-lg shadow-xl w-[500px] h-fit px-5 py-7`}
      >
        <div className="flex  items-start justify-between">
          <div>
            <WarningIcon className="text-[20px]" />
          </div>
          <div className="ml-3">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm mt-1.5">{description}</p>
          </div>
          <div>
            <BiX
              size={28}
              className="text-gray-400 cursor-pointer hover:text-primary-color"
              onClick={cancel}
            />
          </div>
        </div>

        <div className="my-5"></div>

        {children}
      </div>
    </div>
  );
};

export default PopupModal;
