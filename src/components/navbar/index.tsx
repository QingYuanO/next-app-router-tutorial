'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className='flex justify-between items-center h-[100px]'>
      <Link href={'/'} className=' font-bold text-2xl'>
        lamamia
      </Link>
      <div className='flex items-center gap-5'>
        {links.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link key={link.id} href={link.url} className={`${isActive ? 'text-[#53c28b]' : ''}`}>
              {link.title}
            </Link>
          );
        })}
        <button className='p-1 bg-[#53c28b] text-white rounded'>Logout</button>
      </div>
    </div>
  );
}
