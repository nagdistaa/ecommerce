"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CartModal from './CartModal';

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIN = true;
  const router = useRouter();
  function handleOpenProfile() {
    if (!isLoggedIN) {
      router.push('/login')
      return 0;
    }
    setIsProfileOpen((prevStaus) => (!prevStaus))
  }
  function handleOpenCart() {
    setIsCartOpen((prevStaus) => (!prevStaus))
  }
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image src='/profile.png' alt='profile icon' width={22} height={22} className='cursor-pointer' onClick={handleOpenProfile} />
      {/* OPEN CLOSE PROFILE */}
      {isProfileOpen && (<div className='absolute p-4 top-12 left-0 rounded-md text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
        <Link href='/'>Profile</Link>
        <div className="mt-2 cursor-pointer">Logout</div>
      </div>)}
      <Image src='/notification.png' alt='profile icon' width={22} height={22} className='cursor-pointer' />

      <div className="cursor-pointer relative">
        <Image src='/cart.png' alt='profile icon' width={22} height={22} onClick={handleOpenCart} />
        <div className="absolute -top-4 -right-4 h-6 w-6 bg-[#f35c7a] text-white text-sm rounded-full flex items-center justify-center  ">2</div>
      </div>
      {/* OPEN CLOSE CART */}
      {isCartOpen && <CartModal />}

    </div>
  )
}
