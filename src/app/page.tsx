import Button from '@/components/atomic/button/Button';
import { COLORS } from '@/utils/Colors';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div>
          <h1>Welcome to GoNews</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            delectus ipsa sunt incidunt, est natus ullam culpa maxime itaque
            animi.{' '}
          </p>
        </div>

        <div>
          <Button
            className={`bg-primary-color p-2 md:p-2.5 lg:p-3.5 rounded-lg`}
          >
            Explore Article
          </Button>
        </div>
      </section>
    </main>
  );
}
