import React from 'react'

export default function Filter() {
    return (
        <div className='mt-12 flex justify-between '>
            {/* LEFT */}
            <div className="flex gap-6 flex-wrap">
                <select name="type" id="" className='py-2 px-4  rounded-2xl text-xs font-medium bg-gray-200'>
                    <option>Type</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
                <input type="text" name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24
                ring-1 ring-gray-400' />
                <input type="text" name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24
                ring-1 ring-gray-400' />
                {/* COLOR */}
                <select name="type" id="" className='py-2 px-4  rounded-2xl text-xs font-medium bg-gray-200'>
                    <option>Color</option>
                    <option value='red'>Red</option>
                    <option value='black'>Black</option>
                </select>
                {/* SIZE */}
                <select name="type" id="" className='py-2 px-4  rounded-2xl text-xs font-medium bg-gray-200'>
                    <option>Size</option>
                    <option value='lg'>LG</option>
                    <option value='xlg'>XLG</option>
                </select>
            </div>
            {/* RIGHT */}
            <div className="">
                <select name="type" id="" className='py-2 px-4  rounded-2xl text-xs font-medium bg-gray-200'>
                    <option>Sort By</option>
                    <option value='physical'>Price (low to high)</option>
                    <option value='digital'>Price (high to low)</option>
                    <option value='digital'>Newest</option>
                    <option value='digital'> Oldest</option>
                </select>
            </div>
        </div>
    )
}
