import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

export default function Navbar() {
    const navLinks = [{ title: 'Home', href: '/' }, { title: 'Shop', href: '/shop' }, { title: 'Logout', href: '/logout' },  ]
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ] shadow-[_0_2px_5px_rgba(0,0,0,0.2)]' >
            {/* !MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden 
            ">
                <Link href='/'>
                    <div className="text-2xl tracking-wide font-medium bg-gradient-to-r  from-[#422067] via-[#e93c25] to-[#217ac1]  bg-clip-text text-transparent shadow-[_0_0_1px_rgba(0,0,0,0.2)]">Flow Media</div></Link>
                <Menu />
            </div>
            {/* BIGGER SCREEN */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full w-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex
                items-center gap-12">
                    <Link href='/' className='flex items-center gap-3'>
                        <Image src='/logo.png' height={24} width={24} alt='logo' />
                        <div className="text-2xl tracking-wide font-medium        bg-gradient-to-r from-[#422067] via-[#e93c25] to-[#217ac1] bg-clip-text text-transparent shadow-[_0_0_1px_rgba(0,0,0,0.2)]">Flow Media</div></Link>

                    <div className="hidden xl:flex gap-4">
                        {navLinks.map((ele, idx) => (
                            <Link href={ele.href}
                                key={idx} >{ele.title}</Link>
                        ))}
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2  flex justify-between items-center gap-8  ">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
            {/* !END BIGGENER SCREEN */}

        </div>
    )
}
