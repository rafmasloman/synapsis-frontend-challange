'use client';
import Button from '@/components/atomic/button/Button';
import { COLORS } from '@/utils/Colors';
import Image from 'next/image';

import HeroCardImage from '@/assets/images/hero-card.jpg';
import { useState } from 'react';

export default function Home() {
  const [isButtonHover, setIsButtonHover] = useState(false);

  console.log('button hover : ', isButtonHover);

  return (
    <main className="container p-5  lg:p-24   bg-black-primary">
      <section className="flex flex-col justify-center items-center">
        <div className="text-white text-center">
          <h1 className="lg:text-4xl font-semibold ">
            Get your best experience for <br /> reading & writing article blog
          </h1>
          <p className="mt-5  font-light text-sm md:text-base leading-loose  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint
            officia tempore fugiat incidunt amet dignissimos ducimus ullam
            omnis, tenetur sed, reprehenderit possimus quidem, illum molestiae
            animi deserunt tempora quis id? Perspiciatis eligendi fugiat
            aliquid!
          </p>

          {/* <div className="absolute bottom-0 right-24 z-10 ">
            <Image
              src={HeroCardImage.src}
              width={400}
              height={200}
              quality={100}
              alt="City View"
              className="rounded-3xl"
            />
          </div> */}
        </div>

        <div className="mt-7 flex-1 relative">
          <Button
            className={`bg-yellow-primary relative  px-5 h-14 rounded-xl text-white font-normal border-white border-[1px] text-sm md:text-base z-10 `}
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
              isButtonHover ? 'top-2 left-2' : 'top-1 left-1'
            } w-full h-14 rounded-xl bg-stone-200  absolute  -z-5 `}
          ></div>
        </div>
      </section>
    </main>
  );
}
