"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
type props = {
    text1: string,
    text2: string,
    text3: string
}

const Number: React.FC<props> = ({ text1, text2, text3 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className='flex flex-col gap-8 px-14 py-20 text-[#98989A] border-[#65656542] border w-1/2 max-md:w-full'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className='flex gap-3 items-center'>
                <div className='text-[#D8FF99] font-bold text-8xl barlow-semibold'>{text1}</div>
                <div className='text-xl barlow-medium'>{text2}</div>
            </div>
            <div className='text-sm barlow-regular'>{text3}</div>
        </div>
    )
}

export default Number
