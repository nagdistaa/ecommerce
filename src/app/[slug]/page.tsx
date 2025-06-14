import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-12 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-16">

        {/* IMG CONTAINER */}
        <div className="w-full lg:w-1/2 lg:sticky top-24 self-start h-max">
          <ProductImages />
        </div>

        {/* TEXTS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-semibold">Product Name</h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, incidunt!
          </p>

          <div className="h-[1px] bg-gray-200 my-2" />

          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-400 line-through">$20</h3>
            <h3 className="font-semibold text-2xl text-black">$10</h3>
          </div>

          <div className="h-[1px] bg-gray-200 my-2" />
          
          <CustomizeProducts />
          <Add />
          
          <div className="h-[1px] bg-gray-200 my-2" />

          <div className="text-sm space-y-6">
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatibus illum, fugiat eum laborum quae.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Details</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatibus illum, fugiat eum laborum quae.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Shipping</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptatibus illum, fugiat eum laborum quae.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SinglePage;
