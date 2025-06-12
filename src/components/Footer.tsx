import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24 '>
      {/*TOP  */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/*LEFT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href='/'>
            <div className="text-2xl tracking-wide font-medium bg-gradient-to-r  from-[#422067] via-[#e93c25] to-[#217ac1]  bg-clip-text text-transparent">Flow Media</div></Link>
          <p>10 Main Streat</p>
          <span className='font-semibold'>flowmedia@gmail.com</span>
          <span className='font-semibold'>+11434848</span>
          <div className="flex gap-6">
            <Image src='/facebook.png' alt='icon' width={30} height={30} className='rounded-full bg-white p-[5px] shadow-md object-contain' />
            <Image src='/instagram.png' alt='icon' width={30} height={30} className='rounded-full bg-white  p-[5px] shadow-md ' />
            <Image src='/youtube.png' alt='icon' width={30} height={30} className='rounded-full bg-white p-[5px] shadow-md object-contain' />
            <Image src='/pinterest.png' alt='icon' width={30} height={30} className='rounded-full bg-white p-[5px] shadow-md object-contain' />
            <Image src='/x.png' alt='icon' width={30} height={30} className='rounded-full bg-white p-[5px] shadow-md object-contain' />
          </div>
        </div>
        {/*CENTER  */}
        <div className="hidden md:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className='font-bold'>Company</h1>
            <div className="flex flex-col gap-6">
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-bold'>Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className='font-bold'>Help</h1>
            <div className="flex flex-col gap-6">
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
        </div>
        {/*RIGHT  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className='font-medium text-lg '>Subscribe</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="flex">
            <input type="text" name="email" id="email" placeholder='Email adress' className='p-4 w-3/4' />
            <button className='w-1/4 border-2 bg-red-500 text-white'>send</button>
          </div>

          <span className='font-semibold '>Secure Payment</span>
          <div className="flex justify-between">
            <Image src='/discover.png' alt='payment' width={40} height={20} />
            <Image src='/visa.png' alt='payment' width={40} height={20} />
            <Image src='/mastercard.png' alt='payment' width={40} height={20} />
            <Image src='/paypal.png' alt='payment' width={40} height={20} />
          </div>
        </div>
      </div>
      {/*BOTTOM  */}
      <div className="flex justify-center items-center py-5 mt-10 tracking-wide font-medium bg-white">
        
        <span>ALL RIGTH RESERVED &copy; 2025</span>
      </div>
    </div>
  )
}
