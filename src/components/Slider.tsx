"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

  function handleDotClick(index: number) {
    setCurrent(index);
  }

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrent(prev=>(prev===slides.length - 1 ?0 : prev +1))
    }, 5000);

    return () =>clearInterval(interval)
  },[])

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      {/* Container OF TEXT AND IMAGE */}
      <div
        className="w-max h-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row gap-16`}
          >
            {/* TEXT SLIDE */}
            <div className="xl:w-1/2 h-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center xl:h-full">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl">{slide.title}</h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="xl:w-1/2 h-1/2 relative xl:h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      {/* END Container OF TEXT AND IMAGE */}

      {/* CONTAINER OF DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === idx ? "scale-150" : ""
            }`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {current === idx && (
              <div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
      {/* END CONTAINER OF DOTS */}
    </div>
  );
}
