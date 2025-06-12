"use client";
import Image from "next/image";
import React, { useState } from "react";

const imgs = [
  "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
  "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg",
  "https://images.pexels.com/photos/772286/pexels-photo-772286.jpeg",
  "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
];

export default function ProductImages() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 px-4 mt-5">
      <div className="relative w-full h-[500px]">
        <Image
          src={imgs[imageIndex]}
          alt="Main Image"
          fill
          className="object-cover rounded-md"
          sizes="100vw"
        />
      </div>

      <div className="flex gap-4 mt-4 flex-wrap">
        {imgs.map((img, idx) => (
          <div
            key={idx}
            className={`relative w-24 h-24 cursor-pointer border-2 ${
              idx === imageIndex ? "border-black" : "border-gray-300"
            } rounded-md hover:border-black transition-all`}
            onClick={() => setImageIndex(idx)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${idx}`}
              fill
              className="object-cover rounded-md"
              sizes="100px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
