"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Contactbtn from './contactbtn'
import { useInView } from 'motion/react'

type params = {
    text1: string,
    text2: string
}

const Foot: React.FC<params> = ({ text1, text2 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className="border border-[#262626] bg-[url('/banner-1.jpg')] flex flex-col items-center text-center justify-center gap-8 md:bg-contain bg-center w-full mx-auto py-20 max-md:w-full max-md:px-5"
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div>
                <Image className='h-auto w-16 cursor-pointer' width={100} height={100} alt='client-1' src={'/logo.png'}></Image>
            </div>
            <div className='flex flex-col gap-5 items-center'>
                <div className='text-4xl font-semibold max-md:text-3xl'>{text1}</div>
                <div className='text-[#E6E6E6] font-light w-[85%] md:font-light max-md:text-sm text-center'>{text2}</div>
            </div>
            <Contactbtn params='Start Project' />
        </div>
    )
}

export default Foot
