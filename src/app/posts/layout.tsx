import Header from '@/components/molecul/header/Header';
import React, { ReactNode } from 'react';

type Props = {};

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container px-10 lg:px-24">
      <div className="my-20"></div>
      <Header title="Best Articles" />

      <div className="my-5"></div>
      {children}
    </main>
  );
};

export default PostLayout;
