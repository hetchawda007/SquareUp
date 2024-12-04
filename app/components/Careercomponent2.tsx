"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'

interface Props {
    text: string
}

const Careercomponent2: React.FC<Props> = ({ text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className='flex text-xl w-full text-[#98989A] flex-col gap-5 px-14 py-8 barlow-medium border-[#65656542] border max-md:px-5 text-center'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            {text}
        </div>
    )
}

export default Careercomponent2
