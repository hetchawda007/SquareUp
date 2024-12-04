import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from "motion/react"
import Image from 'next/image';

type FaqProps = {
  number: string,
  question: string,
  answer: string
}

const Faq: React.FC<FaqProps> = ({ number, question, answer }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const [show, setshow] = useState(true)
  useEffect(() => { }, [isInView]);
  return (
    <motion.div ref={ref} className='flex flex-col gap-4 justify-center items-center px-14 py-6 border border-[#262626] max-md:px-5'
      style={{
        opacity: isInView ? 1 : 0,
        transition: "4s",
      }}
    >
      <div className='flex justify-around items-center w-full'>
        <div className='flex gap-4 items-center w-full'>
          <div
            className="bg-gradient-to-b border text-xl border-[#262626] rounded-xl from-[#74747439] to-[#181818c6] px-5 py-4 font-semibold h-fit transition-all duration-1000"
            style={{
              color: show === true ? 'white' : '#9EFF00'
            }}
          >{number}</div>
          <div className='flex flex-col gap-4 transition-all duration-1000'>
            <div
              style={{
                color: show === true ? 'white' : '#C5FF66'
              }}
            >{question}</div>
          </div>
        </div>
        <div>
          {show === true ? <Image onClick={() => setshow(!show)} className='h-auto w-5 hover:scale-125 cursor-pointer transition-all duration-500' width={100} height={100} alt='client-1' src={'/plus.png'}></Image>
            : <Image onClick={() => setshow(!show)} className='h-auto w-5 hover:scale-125 cursor-pointer transition-all duration-500' width={100} height={100} alt='client-1' src={'/cross.png'}></Image>}
        </div>
      </div>
      {show === false && <motion.div className='px-5 text-center'
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          y: 0,
          opacity: 1
        }}

        exit={{
          opacity: 0,
          y: -10,
        }}

        transition={{
          type: 'spring',
          duration: 1,
          ease: "backInOut"
        }}

      >
        {answer}</motion.div>}
    </motion.div>
  )
}

export default Faq
