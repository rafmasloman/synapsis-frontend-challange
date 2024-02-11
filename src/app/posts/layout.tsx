import Header from '@/components/molecul/header/Header';
import React, { ReactNode } from 'react';

type Props = {};

const PostLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="container px-10 lg:px-24">
      <Header title="Best Articles" />
      {children}
    </main>
  );
};

export default PostLayout;
