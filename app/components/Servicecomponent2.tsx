"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useInView } from 'motion/react'
interface Props {
    text: string;
    src: string;
}

const Servicecomponent3: React.FC<Props> = ({ text, src }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);

    return (
        <div ref={ref} className='flex flex-col gap-4 p-10 border-[#65656542] border w-[25%] max-md:w-1/2'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className="bg-gradient-to-br border cursor-pointer border-[#535353c6] rounded-xl flex justify-center items-center w-fit from-[#9dff0027] via-[#181818c6] to-[#181818c6] hover:from-[#535353c6] py-4 px-4">
                <Image className="h-8 w-auto max-md:w-8" alt="twitter" height={100} width={100} src={src}></Image>
            </div>
            <div className='font-light max-md:text-sm'>{text}</div>
        </div>
    )
}

export default Servicecomponent3
