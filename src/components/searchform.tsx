'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`events/${searchText}`);
  }

  return (
    <form onSubmit={handleSubmit} className='w-full sm:w-[580px]'>
      <input
        className='w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-acctext-accent/50 transition focus:ring-2 focus:bg-white/10'
        placeholder='Search events in any city...'
        spellCheck={false}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
