import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React from 'react'

export default function ListPage() {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-5 '>
      {/* CAMPAIGN */}
      <div className="hidden sm:flex bg-pink-50 px-4  justify-between h-64  ">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grap Up 10 Styles</h1>
          <button className='rounded-3xl bg-red-500 text-white w-max py-3 px-5 text-sm '>Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src='/woman.png' alt='woman' fill className='object-contain' />
        </div>
      </div>
      {/* FILTER COMPONENT */}
      <Filter />
      {/* PRODUCT LIST COMPONETN */}
      <h1 className='mt-12 text-xl font-semibold'>Shoes For You!</h1>
      <ProductList />
    </div>
  )
}
