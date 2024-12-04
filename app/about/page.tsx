"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Head from '../components/head'
import Image from 'next/image'
import Number from '../components/number'
import Section from '../components/Section'

const Page = () => {
  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true });
  useEffect(() => { }, [isInView1]);
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true });
  useEffect(() => { }, [isInView2]);
  return (
    <>
      <div className='container w-full flex flex-col items-center justify-center mx-auto px-24 max-md:px-5'>
        <Head text1='About Us' text2='Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.' />

        <div ref={ref1} className='flex md:justify-around pl-24 items-center py-20 border-[#65656542] border max-md:flex-col max-md:px-5 max-md:gap-14'
          style={{
            opacity: isInView1 ? 1 : 0,
            transition: "4s",
          }}
        >
          <div className='w-[50%] justify-center flex items-center flex-col gap-4 max-md:gap-10 max-md:w-full'>
            <div className='text-4xl font-semibold'>About SquareUp</div>
            <div className='text-[#E6E6E6] font-light w-[85%] text-center max-md:w-full'>SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</div>
          </div>
          <div className='w-[50%] flex justify-center max-md:w-full'><Image className='h-96 w-auto max-md:h-72' src={'/about.png'} alt='' height={700} width={700}></Image></div>
        </div>

        <div ref={ref2} className='px-14 text-5xl barlow-regular border-[#65656542] border w-full py-20 max-md:text-3xl'
          style={{
            opacity: isInView2 ? 1 : 0,
            transition: "4s",
          }}
        >
          Our Story
        </div>

        <div className='w-full flex flex-wrap'>

          <Number text1='01' text2='Design' text3="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression." />
          <Number text1='02' text2='Engineering' text3='Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.' />
          <Number text1='03' text2='Project Management' text3="In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget." />
          <Number text1='04' text2='Collaboration' text3='At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.' />
          <Number text1='05' text2='Client-Centric Approach' text3="SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey." />
          <Number text1='06' text2='Driving Success' text3="With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world." />

        </div>

        <Section />

      </div>
    </>
  )
}

export default Page
