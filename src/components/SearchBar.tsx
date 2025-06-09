"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SearchBar() {

  const router = useRouter() ;

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`)
    }
  }
  return (
    <form onSubmit={handleSearch} className='flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1'>
      <input type="text" name='name' placeholder='search' className='border-0 outline-0 flex-1 bg-transparent' />
      <button className='cursor-pointer'>
        <Image src='/search.png' alt='search icon' width={16} height={16} />
      </button>
    </form>
  )
}
