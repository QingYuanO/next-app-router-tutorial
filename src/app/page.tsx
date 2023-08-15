import Button from '@/components/Button';
import Image from 'next/image';
import Hero from 'public/images/hero.png';

export default function Home() {
  return (
    <div className='flex items-center gap-24'>
      <div className='flex-1 flex flex-col gap-12'>
        <h1 className='text-[68px] leading-none bg-[linear-gradient(to_bottom,#194c33,#bbb)] bg-clip-text text-transparent'>
          Better design for your digital products.
        </h1>
        <p className='text-2xl font-light'>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url='/portfolio'>See Our Works</Button>
      </div>
      <div className='flex-1'>
        <Image src={Hero} alt='' className='w-full h-[500px] object-contain animate-move' />
      </div>
    </div>
  );
}
