import React from 'react';
import { PaginationPropsTypes } from './types/PaginationTypes';

type Props = {};

const Pagination = ({
  currentPage,
  onNextPage,
  onPreviousPage,
}: PaginationPropsTypes) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600 ">
        Showing <span className="font-semibold text-gray-900 ">10 </span> data
        from page
        <span className="font-semibold text-gray-900 "> {currentPage}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary-color "
          onClick={onPreviousPage}
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary-color"
          onClick={onNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
