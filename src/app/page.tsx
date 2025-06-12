// app/page.tsx

import React from "react";
import Slider from "@/components/Slider";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";

export default function HomePage() {
  return (
    <div className="w-full">
      <Slider />

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-8">Featured Products</h1>
        <ProductList />
      </div>

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-12">Category List</h1>
        <CategoryList />
      </div>
    </div>
  );
}
