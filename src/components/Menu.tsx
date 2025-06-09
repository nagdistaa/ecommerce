"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
export default function Menu() {
    const [open, setOpen] = useState(false)

    const navLinks = [{ title: 'Home', href: '/' }, { title: 'Shop', href: '/shop' }, { title: 'About', href: '/' }, { title: 'Contact', href: '/contact' }, { title: 'Logout', href: '/logout' },{ title: 'Login', href: '/login' }, { title: 'Cart(10)', href: '/cart' }]
    function handleClick() {
        setOpen((prevState) => (!prevState))
    }

    return (
        <div >
            <Image src='/menu.png' alt='menu icon' width={28} height={28} className='cursor-pointer' onClick={handleClick} />

            {open && (<div className='absolute left-0 top-20 w-full h-[calc(100vh-80px)] bg-black text-white flex flex-col justify-center items-center gap-8 text-xl z-10 '>
                {navLinks.map((ele, idx) => (
                    <Link href={ele.href}
                        key={idx} onClick={()=>(setOpen(false))} >{ele.title}</Link>
                ))}
            </div>)}
        </div>
    )
}
