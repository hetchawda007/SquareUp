"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'

interface Props {
    text1: string;
    text2: string;
    text3: string;
}

const Description: React.FC<Props> = ({ text1, text2, text3 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className='flex flex-col w-full px-14 gap-10 border-[#65656542] border pt-20 pb-10 max-md:px-5'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className='flex flex-col gap-3'>
                <div className='text-3xl font-semibold'>{text1}</div>
                <div className='text-sm font-light text-[#E6E6E6] md:w-[75%]'>{text2}</div>
            </div>
            <div className='bg-[#262626] w-fit font-light py-2 px-3 rounded-xl'>{text3}</div>
        </div>
    )
}

export default Description
