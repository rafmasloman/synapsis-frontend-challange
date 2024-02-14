'use client';
import Button from '@/components/atomic/button/Button';
import { COLORS } from '@/utils/Colors';
import Image from 'next/image';

import HeroCardImage from '@/assets/images/hero-card.jpg';
import { useEffect, useState } from 'react';
import {
  queryBlogPostCommentsDetail,
  queryBlogPostDetail,
  queryGetAllPosts,
} from './actions/PostAction';
import { IGetAllPostsQuery } from '@/interfaces/post.interfaces';
import PostCard from '@/components/molecul/card/PostCard';
import Link from 'next/link';
import { MdArticle, MdOutlineArticle } from 'react-icons/md';
import { PostDetailSchema } from '@/schema/PostSchema';
import ViewImageHiking from '@/assets/images/view_hking.jpg';
import { IGetCommentsQueryResponse } from '@/interfaces/comment.interfaces';
import { PiUserCircle } from 'react-icons/pi';
import { BiComment } from 'react-icons/bi';
import { GoCommentDiscussion } from 'react-icons/go';

export default function Home() {
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] =
    useState<IGetAllPostsQuery>(PostDetailSchema);
  const [postComments, setPostComments] = useState<IGetCommentsQueryResponse[]>(
    [],
  );

  useEffect(() => {
    const getPosts = async () => {
      const response = await queryGetAllPosts({
        title: '',
        page: '7',
        per_page: '5',
      });

      setPosts(response);
    };

    const getPostDetail = async () => {
      const response = await queryBlogPostDetail('102031');

      setPostDetail(response);
    };

    const getPostComment = async () => {
      const response = await queryBlogPostCommentsDetail('102031');

      setPostComments(response);
    };

    getPosts();
    getPostDetail();
    getPostComment();
  }, []);

  return (
    <main className="container">
      <section className="flex flex-col justify-center items-center p-5  lg:p-24  bg-black-primary w-full">
        <div className="text-white text-center flex flex-col justify-center">
          <p className="text-2xl lg:text-5xl font-semibold">
            Get your best experience <br /> for reading & writing article blog
          </p>
          <p className="mt-5  font-light text-sm md:text-base leading-loose  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur veniam ullam tempora dolorum beatae voluptatibus
            laborum, esse officia libero sequi dicta vero rerum ipsam vitae
            praesentium excepturi atque magnam quam?
          </p>
        </div>

        <div className="mt-7 flex-1 relative">
          <Button
            className={`bg-yellow-primary relative  px-5 h-12 lg:h-14 rounded-xl text-white font-normal border-white border-2 text-sm md:text-base z-10 `}
            onMouseEnter={() => {
              setIsButtonHover(true);
            }}
            onMouseLeave={() => {
              setIsButtonHover(false);
            }}
          >
            Explore Article
          </Button>
          <div
            className={`${
              isButtonHover ? 'translate-x-0.5 translate-y-0.5' : ''
            } w-full h-12 lg:h-14 rounded-xl bg-stone-200  absolute top-1 left-1  -z-5   transition-all duration-300  `}
          ></div>
        </div>
      </section>

      <div className="my-20 "></div>

      <section className="flex flex-col px-5 lg:px-24">
        <div className="mb-5">
          <h2 className="font-medium text-base md:text-2xl text-primary-color mx-0 md:mx-10 lg:mx-16">
            {postDetail.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full h-full order-3 md:order-2">
          <Image
            src={ViewImageHiking.src}
            width={800}
            height={400}
            className="w-[800px] h-fit lg:h-fit rounded-lg md:rounded-2xl lg:rounded-3xl"
            quality={100}
            alt="Image View"
          />

          <div className="bg-white rounded-xl shadow-sm border w-full h-fit">
            <div className="flex px-7 pt-7 pb-2.5 gap-5  items-center">
              <GoCommentDiscussion className="text-3xl text-gray-600" />
              <h3 className="text-2xl font-semibold ">Komentar</h3>
            </div>

            <div className="w-full bg-gray-200 h-0.5 mt-1.5 "></div>

            <div className="mt-5 flex flex-col p-7 pt-2 gap-10 ">
              {postComments.map((comment) => {
                return (
                  <div
                    key={comment.id}
                    className="flex  items-center gap-3.5   p-3 bg-gray-100  rounded-lg"
                  >
                    <div>
                      <PiUserCircle className="text-gray-500 text-[25px] md:text-[32px]" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-medium">
                        {comment.name}
                      </h3>
                      <p className="text-sm mt-1 text-gray-500">
                        {comment.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-5 lg:my-7 order-2 md:order-3">
          <p className="text-justify text-sm md:text-base lg:text-lg">
            {postDetail.body}
          </p>
        </div>
      </section>

      <div className="my-20 "></div>

      <section className=" px-5 lg:px-24">
        <div>
          <h1 className="font-semibold text-2xl text-center md:text-left">
            Best Articles
          </h1>
          <p className="text-sm md:text-base text-center md:text-left md:w-2/3 text-gray-500 mt-2.5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            earum debitis nam! Accusantium eaque alias quos velit quisquam. Id
            iste vitae, quidem molestias provident laborum.
          </p>
        </div>

        <div className="my-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: IGetAllPostsQuery) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                user_id={post.user_id}
              />
            );
          })}

          <Link
            href={'/posts'}
            className="bg-gray-50 hover:bg-stone-100 border-4 border-dashed border-gray-300 flex flex-col items-center justify-center space-y-4 md:space-y-7 rounded-xl p-6 lg:p-7"
          >
            <MdOutlineArticle className="text-6xl text-gray-400 text-opacity-50" />
            <p className="text-base md:text-2xl text-gray-400">
              Lihat Lebih Banyak .....{' '}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
