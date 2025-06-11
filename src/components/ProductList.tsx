import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {

    const imgs = [
        
        "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
        "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg", // boutique interior rack
        "https://images.pexels.com/photos/772286/pexels-photo-772286.jpeg", // jeans hanging
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",

    ];

    return (
        <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href='/test' className='w-full flex  gap-4  flex-wrap  '  >
                {
                    imgs.map((img, idx) => (

                        <div key={idx} className="  h-fit w-full md:w-[44%] lg:w-[22%] mb-5">

                            <Image src={img} alt=''  width={1000} height={1000} className=' object-cover rounded-md h-[200px] ' />

                            <div className="flex justify-between my-2">
                                <span className='font-medium'>Product Name</span>
                                <span className='font-semibold'>$5</span>
                            </div>

                            <div className="text-sm   my-2 text-gray-500">Lorem ipsum dolor sit amet.</div>
                            <button className='rounded-2xl ring-1 ring-red-500 text-red-500 py-2 px-4 text-xs hover:text-white hover:bg-red-500'>Add To Cart</button>



                        </div>




                    ))


                }





            </Link>

        </div>
    )
}
