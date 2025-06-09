"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Discover the hottest summer trends and amazing discounts.",
    img: "https://images.pexels.com/photos/9186049/pexels-photo-9186049.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Stylish Summer Dresses",
    description: "Explore our collection of stylish and comfortable summer dresses.",
    img: "https://images.pexels.com/photos/29055438/pexels-photo-29055438.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-100 to-pink-100",
  },
  {
    id: 3,
    title: "Trendy Beachwear",
    description: "Get ready for the beach with our trendy swimwear and accessories.",
    img: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-200 to-pink-200",
  },
  {
    id: 4,
    title: "Summer Accessories Sale",
    description: "Complete your look with our summer accessories at great prices.",
    img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-300 to-pink-300",
  },
  {
    id: 5,
    title: "Seasonal Sale Picks",
    description: "Don't miss out on our exclusive seasonal sale picks just for you.",
    img: "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-400 to-pink-400",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

 

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
       
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row items-center gap-8 px-8`}
          >
            {/* نصوص السلايد */}
            <div className="xl:w-1/2 flex flex-col justify-center h-full">
              <h2 className="text-lg mb-4">{slide.description}</h2>
              <h1 className="text-4xl font-bold mb-6">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* صورة السلايد */}
            <div className="xl:w-1/2 relative h-[60vh] w-full rounded-md overflow-hidden">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100vw"
                className="object-cover"
                priority={slide.id === 1} // تخلي أول صورة تتحمل بسرعة
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
