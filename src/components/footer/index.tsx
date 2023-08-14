import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <div className=' h-12 flex items-center justify-between'>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className='flex items-center gap-3'>
        <Image src='/images/1.png' width={15} height={15} className='opacity-60 cursor-pointer' alt='Lama Dev Facebook Account' />
        <Image src='/images/2.png' width={15} height={15} className='opacity-60 cursor-pointer' alt='Lama Dev' />
        <Image src='/images/3.png' width={15} height={15} className='opacity-60 cursor-pointer' alt='Lama Dev' />
        <Image src='/images/4.png' width={15} height={15} className='opacity-60 cursor-pointer' alt='Lama Dev' />
      </div>
    </div>
  );
}
