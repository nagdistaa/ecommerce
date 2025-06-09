import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function SinglePage({ params }: Props) {
  const { slug } = params;

  return (
    <div className="h-[calc(100vh-120px)] w-full flex justify-center items-center text-3xl">
      Single Page | {slug} Page
    </div>
  );
}
