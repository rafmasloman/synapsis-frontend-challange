import Button from '@/components/atomic/button/Button';
import { COLORS } from '@/utils/Colors';
import Image from 'next/image';

import HeroCardImage from '@/assets/images/hero-card.jpg';

export default function Home() {
  return (
    <main className="container  p-24 relative">
      <section className="flex">
        <div>
          <h1 className="lg:text-3xl font-bold">
            Get your best experience for reading & writing article blog
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sint
            officia tempore fugiat incidunt amet dignissimos ducimus ullam
            omnis, tenetur sed, reprehenderit possimus quidem, illum molestiae
            animi deserunt tempora quis id? Perspiciatis eligendi fugiat
            aliquid!
          </p>
        </div>

        <div className="mt-7 flex-1">
          <Button
            className={`bg-primary-color p-2 md:p-2.5 lg:p-3.5 rounded-lg text-white`}
          >
            Explore Article
          </Button>
        </div>

        <div className="absolute bg-red-500 right-0">
          <Image
            src={HeroCardImage.src}
            width={400}
            height={200}
            quality={100}
            alt="City View"
          />
        </div>
      </section>
    </main>
  );
}
