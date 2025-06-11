import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryList() {
    const imgs = [

        "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
        "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg", // boutique interior rack
        "https://images.pexels.com/photos/772286/pexels-photo-772286.jpeg", // jeans hanging
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
        "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
        "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg", // boutique interior rack
        "https://images.pexels.com/photos/772286/pexels-photo-772286.jpeg", // jeans hanging
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",

    ];

    
    return (
        <div className='px-4 overflow-x-scroll '  style={{
    overflow: "scroll",
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none" // IE and Edge
  }}>
            <div className="flex gap-4 md:gap-8">
                <Link href='/list?category=test'>
                    <div className="w-full flex gap-8">
                       {
                        imgs.map((img,idx)=>(
                            <Image src={img} key={idx} alt='img'width={1000} height={1000} className='object-cover h-[200px] w-[200px] rounded-2xl'/>
                        ))
                       }
                    </div>
                </Link>
            </div>
        </div>
    )
}
