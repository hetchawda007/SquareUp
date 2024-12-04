"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
interface Props {
    text1: string;
    text2: string;
}

const Careercomponent1: React.FC<Props> = ({ text1, text2 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className='flex flex-col px-14 py-16 gap-10 w-1/2 border-[#65656542] border max-md:w-full max-md:px-5'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className='text-[#D8FF99] text-3xl font-semibold'>{text1}</div>
            <div className="border-[1px] border-[#262626]"></div>
            <div className='text-sm font-light text-[#98989A]'>{text2}</div>
        </div>
    )
}

export default Careercomponent1
