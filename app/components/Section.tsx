"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Image from 'next/image'
import Contactbtn from '../components/contactbtn'
const Section = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  useEffect(() => { }, [isInView]);
  return (
    <div ref={ref} className='flex flex-col gap-8 justify-around items-center py-16 border-[#65656542] border px-14 max-md:px-5 max-md:text-center'
      style={{
        opacity: isInView ? 1 : 0,
        transition: "4s",
      }}
    >

      <div className='flex gap-10 items-center justify-center max-md:flex-col'>
        <div>
          <Image className='h-24 w-auto' src={'/logo1.png'} alt='' height={150} width={150}></Image>
        </div>
        <div className='flex flex-col gap-4 justify-center w-[80%]'>
          <div className='text-[#98989A] text-2xl font-semibold'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</div>
          <div className='text-[#98989A] font-light text-sm'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</div>
        </div>
      </div>

      <div className='flex gap-5 items-center border-[#65656542] border px-8 py-5 rounded-xl max-md:flex-col'>
        <div className='text-[#98989A] font-light'>Welcome to SquareUp</div>
        <div className='bg-[#262626] py-3 px-4 rounded-xl'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</div>
        <Contactbtn params='Start Project' />
      </div>

    </div>
  )
}

export default Section
