"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Head from '../components/head'
import Image from 'next/image'
import Link from 'next/link'
import Form from '../components/Form'
import Faq from '../components/Faq'
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
        <Head text1='Contact Us' text2='Get in touch with us today and let us help you with any questions or inquiries you may have.' />
        <div className='w-full'>

          <div ref={ref1} className="flex justify-center gap-4 py-10 items-center border border-[#262626] w-full max-md:flex-col max-md:px-5"
            style={{
              opacity: isInView1 ? 1 : 0,
              transition: "4s",
            }}
          >
            <Link className="flex items-center gap-2 bg-[#262626] px-4 py-3 rounded-md hover:bg-[#161616] max-md:w-full max-md:justify-center max-md:py-5" href={'/'}>
              <Image className="h-3 w-auto max-md:h-5" alt="mail" height={100} width={100} src={'/mail.png'}></Image>
              <div className="hover:brightness-200 hover:text-white text-[#E6E6E6] font-light">hellow@suqareup.com</div>
            </Link>
            <Link className="flex items-center gap-2 bg-[#262626] px-4 py-3 rounded-md hover:bg-[#161616] max-md:w-full max-md:justify-center max-md:py-5" href={'/'}>
              <Image className="h-4 w-auto max-md:h-6" alt="call" height={100} width={100} src={'/call.png'}></Image>
              <div className="hover:brightness-200 hover:text-white text-[#E6E6E6] font-light">+14 0919454776</div>
            </Link>
            <Link className="flex items-center gap-2 bg-[#262626] px-4 py-3 rounded-md hover:bg-[#161616] max-md:w-full max-md:justify-center max-md:py-5" href={'/'}>
              <Image className="h-4 w-auto max-md:h-6" alt="location" height={100} width={100} src={'/location.png'}></Image>
              <div className="hover:brightness-200 hover:text-white text-[#E6E6E6] font-light">Usa San-Fransisco.</div>
            </Link>
          </div>
          <div className='border border-[#262626]'>
            <Form />
          </div>

          <div ref={ref2} className='w-full flex max-md:flex-col'
            style={{
              opacity: isInView2 ? 1 : 0,
              transition: "4s",
            }}
          >
            <div className='flex gap-3 border border-[#262626] justify-center items-center py-10 w-[50%] max-md:w-full'>
              <div className='text-[#E6E6E6]'>Operating Days</div>
              <div className='bg-[#262626] rounded-md text-[#E6E6E6] px-4 py-2'>Monday to Friday</div>
            </div>
            <div className="p-3 border w-[50%] border-[#262626] flex justify-center items-center gap-3 max-md:w-full max-md:py-5">
              <div>Stay Connected</div>
              <Link href={'/'}>
                <div className="bg-gradient-to-b border border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-3 px-4">
                  <Image className="h-5 w-auto" alt="facebook" height={100} width={100} src={'/facebook.png'}></Image>
                </div>
              </Link>
              <Link href={'/'}>
                <div className="bg-gradient-to-b border border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-3 px-4">
                  <Image className="h-5 w-auto" alt="twitter" height={100} width={100} src={'/twitter.png'}></Image>
                </div>
              </Link>
              <Link href={'/'}>
                <div className="bg-gradient-to-b border border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-3 px-4">
                  <Image className="h-5 w-auto" alt="linkedin" height={100} width={100} src={'/linkedin.png'}></Image>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Head text1='Frequently Asked Questions' text2='Still you have any questions? Contact our Team via hello@squareup.com' />
      </div>

      <div className='flex w-full px-24 max-md:px-5 max-md:flex-col'>
        <div className='flex flex-col w-1/2 max-md:w-full'>
          <div className='flex flex-col gap-4 justify-center items-center px-14 py-6 border border-[#262626]'></div>
          <Faq number='01' question='What services does SquareUp provide?' answer='SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.' />

          <Faq number='02' question='How can SquareUp help my business?' answer='SquareUp can help your business by providing tailored digital solutions that enhance your online presence, streamline operations, and drive growth. Our services are designed to meet your unique needs and help you achieve your business goals.' />

          <Faq number='03' question='What industries does SquareUp work with?' answer='SquareUp works with clients across various industries, including technology, healthcare, finance, e-commerce, real estate, and more. Our team has the expertise and experience to deliver digital solutions that meet the unique needs of each industry.' />

          <Faq number='04' question='How long does it take to complete a project with SquareUp?' answer='The time it takes to complete a project with SquareUp depends on the scope and complexity of the project. We work closely with our clients to establish timelines and milestones to ensure timely delivery. Our team is committed to delivering high-quality results within the agreed-upon timeframe.' />

          <Faq number='05' question='Do you offer ongoing support and maintenance after the project is completed?' answer='Yes, we offer ongoing support and maintenance services to ensure your digital products continue to perform optimally. Our team is available to provide updates, troubleshooting, and technical assistance to help you get the most out of your digital solutions.' />

          <div className='flex flex-col gap-4 justify-center items-center px-14 py-6 border border-[#262626] max-md:hidden'></div>
        </div>

        <div className='flex flex-col w-1/2 max-md:w-full'>
          <div className='flex flex-col gap-4 justify-center items-center px-14 py-6 border border-[#262626] max-md:hidden'></div>

          <Faq number='06' question='Can you work with existing design or development frameworks?' answer='Yes, we can work with existing design and development frameworks. Our team has experience working with a variety of frameworks and technologies to deliver customized solutions that meet your specific requirements. We can adapt to your existing systems and processes to ensure a seamless integration.' />

          <Faq number='07' question='How involved will I be in the project development process?' answer='We believe in open communication and collaboration with our clients throughout the project development process. We will keep you informed of progress, milestones, and any changes to the project scope. Your feedback and input are essential to ensuring the project meets your expectations.' />

          <Faq number='08' question='Can you help with website or app maintenance and updates?' answer='Yes, we offer website and app maintenance and update services to ensure your digital products remain up-to-date and secure. Our team can provide ongoing support, troubleshooting, and updates to keep your website or app running smoothly and efficiently.' />

          <Faq number='09' question='What services does SquareUp provide?' answer='SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.' />

          <Faq number='10' question='How can SquareUp help my business?' answer='SquareUp can help your business by providing tailored digital solutions that enhance your online presence, streamline operations, and drive growth. Our services are designed to meet your unique needs and help you achieve your business goals.' />

          <div className='flex flex-col gap-4 justify-center items-center px-14 py-6 border border-[#262626]'></div>
        </div>

      </div>
      <div className='w-full px-24 max-md:px-5'>
        <Section />
      </div>
    </>
  )
}

export default Page
