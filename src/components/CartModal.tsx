"useClient"
import Image from 'next/image';
import React from 'react'

export default function CartModal() {
  const cartItems = true ;
  return (
    <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-14 right-0 flex flex-col gap-6 z-20'>
      {!cartItems?(<div>Cart is Empty</div>):(<div className='flex flex-col gap-4 '>
        <Image src='/favIcon.ico' alt='element image' width={72} height={96} className='object-cover rounded-md'/>
        <div className=" flex flex-col justify-between w-full"></div>
        {/* TOP */}
        <div className="">

        </div>
        {/* TITLE */}
        <div className="flex items-center justify-between gap-8">
          <h3 className='font-semibold'>Product Name</h3>
          <div className="">$49</div>
        </div>
        {/* DISCRIPTION */}
        <div className="">
          available
        </div>
        {/* BOTTOM */}
        <div className="">
          <span>Qty.2</span>
        </div>
      </div>)}
    </div>
  )
}
