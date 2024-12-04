"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'

interface Props {
    text: string;
}

const Servicecomponent2: React.FC<Props> = ({ text }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    useEffect(() => { }, [isInView]);
    return (
        <div ref={ref} className='text-[#98989A] text-lg text-center font-semibold px-14 border-[#65656542] border p-8'
            style={{
                opacity: isInView ? 1 : 0,
                transition: "4s",
            }}
        >
            {text}
        </div>
    )
}

export default Servicecomponent2
