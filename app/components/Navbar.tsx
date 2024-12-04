"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Contactbtn from './contactbtn'
import { motion } from "motion/react"
import { usePathname } from 'next/navigation'
const Navbar = () => {

  const [hamburger, setHamburger] = useState<boolean>(false)
  const ref = useRef(null)
  const handleclick = () => {
    setHamburger(!hamburger)
  }

  const params = usePathname()
  return (
    <>
      <motion.div className='z-10 mx-auto flex border-b-2 sticky top-0 bg-[#1A1A1A] border-[#262626] items-center justify-around text-[14px] py-2 md:px-24 w-screen max-md:py-4'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        <div className='flex gap-2 items-center cursor-pointer'>
          <Image className='h-10 w-auto' src='/logo.png' alt='logo' width={100} height={100} />
          <div className='font-semibold text-lg'>SquareUp</div>
        </div>
        <nav className='max-lg:hidden'>
          <ul className='flex items-center gap-2 text-[#E6E6E6] font-semibold'>
            <Link href={'/'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/' ? '#262626' : '' }}>Home</li></Link>
            <Link href={'/services'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/services' ? '#262626' : '' }}>Services</li></Link>
            <Link href={'/work'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/work' ? '#262626' : '' }}>Work</li></Link>
            <Link href={'/process'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/process' ? '#262626' : '' }}>Process</li></Link>
            <Link href={'/about'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/about' ? '#262626' : '' }}>About</li></Link>
            <Link href={'/careers'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/careers' ? '#262626' : '' }}>Careers</li></Link>
          </ul>
        </nav>
        <button onClick={handleclick} className='bg-[#262626] p-3 rounded-md md:hidden'><Image className='h-5 w-6' src='/hamburger.png' alt='logo' width={100} height={100} /></button>

        <div className='max-md:hidden'>
          <Contactbtn params='Contact Us' />
        </div>

      </motion.div>

      <motion.div ref={ref} className='h-[110vh] top-0 z-20 w-[70vw] left-[30vw] bg-black fixed md:hidden'
        style={{
          left: hamburger ? "50vw" : "150vw",
          transition: "0.8s",
        }}
      >
        <nav className='h-full flex flex-col justify-evenly pl-8 pt-5 gap-5'>
          <button onClick={handleclick} className='bg-[#131313] p-3 w-fit rounded-lg md:hidden'><Image className='h-5 w-auto' src='/cross.png' alt='logo' width={100} height={100} /></button>
          <ul className='h-full flex flex-col items-start justify-start gap-5 text-[#E6E6E6] font-semibold'>
            <Link href={'/'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/' ? '#262626' : '' }}>Home</li></Link>
            <Link href={'/services'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/services' ? '#262626' : '' }}>Services</li></Link>
            <Link href={'/work'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/work' ? '#262626' : '' }}>Work</li></Link>
            <Link href={'/process'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/process' ? '#262626' : '' }}>Process</li></Link>
            <Link href={'/about'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/about' ? '#262626' : '' }}>About</li></Link>
            <Link href={'/careers'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/careers' ? '#262626' : '' }}>Careers</li></Link>
            <Link href={'/contact'}><li className="cursor-pointer p-[10px] rounded-lg hover:bg-[#262626]" style={{ backgroundColor: params == '/contact' ? '#262626' : '' }}>Contact</li></Link>
          </ul>
        </nav>

      </motion.div>
    </>
  )
}

export default Navbar
