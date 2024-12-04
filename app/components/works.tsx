"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
interface WorksProps {
    heading: string,
    name: string,
    src: string,
    imagesrc: string,
    description: string,
}
const Works: React.FC<WorksProps> = ({ heading, name, imagesrc, src, description }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);

    return (
        <div ref={ref} className='w-1/2 flex flex-col max-md:w-full'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            <div className='border-[#65656542] border px-10 text-xl py-4 text-[#98989A] max-md:px-5'>{heading}</div>
            <div className='flex flex-col gap-8 px-10 pt-6 pb-20 items-center border-[#65656542] border max-md:px-5'>

                <div>
                    <Image className='h-[360px] w-auto max-md:h-[200px]' src={imagesrc} alt='' width={600} height={400}></Image>
                </div>
                <div className='flex justify-between w-full items-center'>
                    <div className='flex flex-col gap-3'>
                        <div className='text-lg'>{name}</div>
                        <Link target='_blank' href={src}>
                            <div className='px-4 py-2 bg-[#262626] text-[#98989A] font-light rounded-md'>{src}</div>
                        </Link>
                    </div>
                    <Link className='max-md:hidden' target='_blank' href={src}>
                        <div className='bg-[#262626] p-4 rounded-xl hover:bg-[#1d1d1d]'>
                            <Image className='h-[14px] w-auto ' src={'/arrow.png'} alt='' width={100} height={100}></Image>
                        </div>
                    </Link>
                </div>
                <div className='text-[#98989A] font-light'>{description}</div>
            </div>
        </div>
    )
}

export default Works
