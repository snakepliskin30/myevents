'use client';

import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'All Events',
    path: '/events/all',
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className='flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9'>
      <Logo />

      <nav className='h-full'>
        <ul className='flex h-full gap-x-6 text-sm'>
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                'hover:text-white transition flex items-center relative h-full',
                {
                  'text-white': pathName === route.path,
                  'text-white/50': pathName !== route.path,
                },
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {pathName === route.path && (
                <motion.div
                  layoutId='header-active-link'
                  className='bg-accent h-1 w-full absolute bottom-0'
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
