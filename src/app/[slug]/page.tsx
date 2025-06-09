import React from 'react'

export default async function SinglePage({params}:{params:{slug:string}}) {
  const slugName = params.slug ;
  return (
    <div className='h-[calc(100vh-120px)] w-full flex justify-center items-center text-3xl'>Single Page | {slugName} Page </div>
  )
}
