import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

export default function Button({ children, url }: PropsWithChildren<{ url: string }>) {
  return (
    <Link href={url}>
      <button className='p-5 py-4 bg-[#53c28b] text-white rounded max-w-max cursor-pointer'>{children}</button>
    </Link>
  );
}
