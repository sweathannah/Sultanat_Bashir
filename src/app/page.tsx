import Hero from '@/src/components/home/Hero';
import Experiences from '@/src/components/home/Experience';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-[#FAFAFA] dark:bg-[#0F0F0F]">
      <Hero />
      <Experiences />
    </div>
  );
}