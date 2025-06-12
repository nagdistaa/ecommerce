import ProductImages from "@/components/ProductImages";
import React from "react";

export default async function SinglePage() {

  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  flex flex-col lg:flex-row gap-16">
      {/* IMG CONTANIER */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
              <ProductImages/>

      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex-col gap-6"></div>
    </div>
  );
}
