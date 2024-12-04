"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
type HeadProps = {
    text1: string,
    text2: string
}

const Head: React.FC<HeadProps> = ({ text1, text2 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className="border border-[#262626] bg-[url('/banner-1.jpg')] py-20 text-center flex flex-col items-center justify-center gap-5 md:bg-center w-full mx-auto max-md:w-full max-md:px-5 max-md:py-14"
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className='text-4xl font-semibold max-md:text-3xl'>{text1}</div>
            <div className='text-[#E6E6E6] md:font-light max-md:text-sm'>{text2}</div>
        </div>
    )
}

export default Head
