'use-client';

import PostTemplate from '@/components/template/posts/PostTemplate';
import PostServices from '@/services/post/post.services';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react';

type Props = {};

// async function getAllPostData() {
//   const response = await axios.get(`https://gorest.co.in/public/v2/posts`);
//   const data = await response.data;

//   if (response.status !== 200) {
//     throw new Error('failed to fetch data');
//   }

//   return data;
// }

const PostPage = async () => {
  const posts = await PostServices.getAllPosts();
  console.log('post : ', posts);

  return (
    <main className="container px-10 lg:px-24">
      <div>PostPage</div>

      <PostTemplate
        data={[
          {
            id: '101484',
            user_id: '6260128',
            title: 'Careo bonus cometes decet ut.',
            body: 'Reiciendis artificiose capto. Usque terga cogito. Ipsum undique celebrer. Strenuus alveus vomer. Dolores verecundia avoco. Tenuis viscus in. Taedium cornu consequatur. Aut supplanto decet. Deleo tenax ceno. Claudeo adulescens distinctio. Et denuncio cornu.',
          },
          {
            id: '101483',
            user_id: '6260124',
            title: 'Curvus cibo apparatus agnitio auris quia solum creber.',
            body: 'Adsuesco sponte acer. Thymbra sollers delicate. Brevis utilis umerus. Suffragium desipio defigo. Vultuosus attero commodo. Vociferor cetera pectus. Utilis acervus vestrum. Terga vitiosus quo. Pariatur aggredior terminatio. Curvo angustus est.',
          },
          {
            id: '101482',
            user_id: '6260124',
            title: 'Quo arcesso ratione communis aro stella varietas fugiat.',
            body: 'Defluo voluptatem civis. Conscendo peior omnis. Capto animus vae. Curo ut tremo. Magnam vilitas varius. Crur verecundia aveho. Caveo maxime est. Alienus dolores tenetur. Deficio color cultellus. Acies aut vero. Causa cito conduco. Surculus sunt sed. Aut despecto cognatus. Universe triduana hic. Virtus curatio doloribus.',
          },
        ]}
      />
    </main>
  );
};

export default PostPage;
