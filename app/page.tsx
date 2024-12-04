"use client"
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contactbtn from './components/contactbtn';
import Form from './components/Form';
import Foot from './components/foot';
import Head from './components/head';
import Faq from './components/Faq';
import Marquee from "react-fast-marquee"
import { motion, useInView } from "motion/react"

export default function Home() {

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1, { once: true });
  const ref2 = useRef(null)
  const isInView2 = useInView(ref2, { once: true });

  useEffect(() => { }, [isInView1, isInView2]);

  return (
    <>
      <div className="container w-full flex flex-col items-center justify-center mx-auto px-24 max-md:px-5">

        <div className="flex flex-col justify-center items-center mt-20 gap-16">

          <motion.div className="text-5xl font-semibold w-[50%] text-center mx-auto max-md:text-3xl max-md:w-[70%]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1, delay: 1 }}

          >
            A Digital Agency that helps you grow your business.
          </motion.div>

          <motion.div className="bg-[url('/bg-1.png')] bg-no-repeat flex flex-col gap-10 bg-contain bg-center w-[99vw] mx-auto h-[40vh] max-md:bg-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 1.5 }}
          >

            <div className="flex gap-2 items-center mx-auto border rounded-xl p-4 border-[#262626] w-fit bg-[#2424245e] max-md:hidden">
              <span className="text-[#98989A] text-lg">For</span>
              <span className="p-2 bg-[#262626] text-lg font-thin cursor-pointer rounded-lg hover:bg-[#202020] duration-300">Startups</span>
              <span className="text-[#98989A]">,</span>
              <span className="p-2 bg-[#262626] text-lg font-thin cursor-pointer rounded-lg hover:bg-[#202020] duration-300">Enterprise leaders</span>
              <span className="text-[#98989A]">,</span>
              <span className="p-2 bg-[#262626] text-lg font-thin cursor-pointer rounded-lg hover:bg-[#202020] duration-300">Media & Publisers</span>
              <span className="text-[#98989A] text-lg">and</span>
              <span className="p-2 bg-[#262626] text-lg font-thin cursor-pointer rounded-lg hover:bg-[#202020] duration-300">Social Good</span>
            </div>
            <div className='text-center py-3 px-5 mx-10 rounded-xl border border-[#525252] md:hidden font-thin bg-[#242424] text-[#98989A]'>
              For startups, enterprise leaders, media & publishers, and social good.
            </div>
            <div className="flex justify-center items-center gap-3 bg-contain bg-center">
              <Link href={'/work'}>
                <button className='bg-[#2625255d] hover:bg-[#252525ee] border-[#65656542] border rounded-lg py-3 px-5 duration-300'>
                  Our Works
                </button>
              </Link>
              <Contactbtn params={'Contact Us'} />
            </div>

          </motion.div>
        </div>

        <div className='flex flex-col gap-5 my-10'>
          <motion.div className='border-[#65656542] border py-3 px-7 cursor-pointer text-center w-fit mx-auto rounded-3xl hover:bg-[#2625255d]'
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 1, delay: 2 }}

          >
            Trusted By 250+ Companies
          </motion.div>
          <motion.div className='max-md:hidden'
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 1, delay: 3 }}
          >
            <Marquee pauseOnHover gradient gradientColor='#1A1A1A' delay={2.5} speed={100} className='flex items-center'>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='zapier' src={'/zapier.png'}></Image>
              </div>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='spotiy' src={'/spotify.png'}></Image>
              </div>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' property='' height={100} width={100} alt='zoom' src={'/zoom.png'}></Image>
              </div>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='slack' src={'/slack.png'}></Image>
              </div>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='amazon' src={'/amazon.png'}></Image>
              </div>
              <div className='mx-10 cursor-pointer'>
                <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='adobe' src={'/adobe.png'}></Image>
              </div>
            </Marquee>
          </motion.div>

          <motion.div className='md:hidden flex items-center flex-wrap px-5 w-full'
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
            transition={{ duration: 1, delay: 3 }}
          >
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='zapier' src={'/zapier.png'}></Image>
            </div>
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='spotiy' src={'/spotify.png'}></Image>
            </div>
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' property='' height={100} width={100} alt='zoom' src={'/zoom.png'}></Image>
            </div>
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='slack' src={'/slack.png'}></Image>
            </div>
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='amazon' src={'/amazon.png'}></Image>
            </div>
            <div className='cursor-pointer w-1/2 p-5 flex items-center justify-center border border-[#262626]'>
              <Image className='h-20 w-auto max-md:h-10' height={100} width={100} alt='adobe' src={'/adobe.png'}></Image>
            </div>
          </motion.div>

        </div>
        <div className='w-full px-24 max-md:px-2'>
          <Head text1='Why Choose SquareUp?' text2='Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.' />
        </div>
        <div className='max-md:px-2'>

          <div ref={ref1} className='flex w-full flex-wrap md:px-24'
            style={{
              opacity: isInView1 ? 1 : 0,
              transition: "5s",
            }}
          >

            <div className='w-1/2 flex flex-col gap-10 justify-center px-14 py-14 border border-[#262626] max-md:w-full  max-md:px-5'>
              <div className='flex gap-5 items-center'>
                <div className="bg-gradient-to-b border cursor-pointer border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-4 px-4">
                  <Image className="h-10 w-auto" alt="twitter" height={100} width={100} src={'/expertise.png'}></Image>
                </div>
                <div className='font-semibold text-2xl'>Expertise</div>
              </div>
              <div className='text-[#E6E6E6] font-light'>
                Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-10 justify-center px-14 py-14 border border-[#262626] max-md:w-full max-md:px-5'>
              <div className='flex gap-5 items-center'>
                <div className="bg-gradient-to-b border cursor-pointer border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-4 px-4">
                  <Image className="h-10 w-auto" alt="twitter" height={100} width={100} src={'/approach.png'}></Image>
                </div>
                <div className='font-semibold text-2xl'>Client-Centric Approach</div>
              </div>
              <div className='text-[#E6E6E6] font-light'>
                We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-10 justify-center px-14 py-14 border border-[#262626] max-md:w-full max-md:px-5'>
              <div className='flex gap-5 items-center'>
                <div className="bg-gradient-to-b border cursor-pointer border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-4 px-4">
                  <Image className="h-10 w-auto" alt="twitter" height={100} width={100} src={'/solution.png'}></Image>
                </div>
                <div className='font-semibold text-2xl'>Results-Driven Solutions</div>
              </div>
              <div className='text-[#E6E6E6] font-light'>
                Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-10 justify-center px-14 py-14 border border-[#262626] max-md:w-full max-md:px-5'>
              <div className='flex gap-5 items-center'>
                <div className="bg-gradient-to-b border cursor-pointer border-[#262626] rounded-xl flex justify-center items-center w-fit from-[#74747439] to-[#181818c6] hover:from-[#181818c6] py-4 px-4">
                  <Image className="h-10 w-auto" alt="twitter" height={100} width={100} src={'/partnership.png'}></Image>
                </div>
                <div className='font-semibold text-2xl'>Collaborative Partnership</div>
              </div>
              <div className='text-[#E6E6E6] font-light'>
                We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.
              </div>
            </div>

          </div>
        </div>
        <div className='w-full px-24 max-md:px-2'>
          <Head text1='What our Clients say About us' text2='At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.' />
        </div>
        <div className='max-md:px-2 max-md:w-full'>

          <div ref={ref2} className='flex w-full flex-wrap md:px-24'
            style={{
              opacity: isInView2 ? 1 : 0,
              transition: "5s",
            }}
          >

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>SquareUp has been Instrumental in Transforming our Online Presence. </div>
              <div className='text-[#E6E6E6] text-base font-light'>Their team&apos;s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn&apos;t be happier.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-1.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>John Smith</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>CEO of Chic Boutique</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>Working with SquareUp was a breeze.</div>
              <div className='text-[#E6E6E6] text-base font-light'>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-2.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>Sarah Johnson</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>Founder of HungryBites.</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>SquareUp developed a comprehensive booking and reservation system for our event management company</div>
              <div className='text-[#E6E6E6] text-base font-light'>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients&apos; event experiences.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-3.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>Mark Thompson</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>CEO of EventMasters</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>ProTech Solutions turned to SquareUp to automate our workflow</div>
              <div className='text-[#E6E6E6] text-base font-light'>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp&apos;s expertise and professionalism have made them a trusted technology partner.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-4.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>Laura Adams</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>COO of ProTech Solutions.</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>SquareUp designed and developed a captivating web portal for showcasing our real estate listings.</div>
              <div className='text-[#E6E6E6] text-base font-light'>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp&apos;s expertise in the real estate industry is unmatched.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-5.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>Michael Anderson</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>Founder of Dream Homes Realty.</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col gap-8 justify-center px-14 py-16 border border-[#262626] max-md:w-full max-md:px-5 max-md:py-10'>
              <div className='text-2xl text-[#D8FF99] max-md:text-lg'>FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.</div>
              <div className='text-[#E6E6E6] text-base font-light'>Their team&apos;s expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn&apos;t be happier.</div>
              <div className='flex gap-4 p-5 justify-between border-[#65656542] border rounded-xl'>
                <div className='flex gap-4'>
                  <div>
                    <Image className='h-14 w-auto' width={100} height={100} alt='client-1' src={'/profile-6.png'}></Image>
                  </div>
                  <div className='flex flex-col gap-1 justify-center'>
                    <div className='text-base font-normal'>Emily Turner</div>
                    <div className='text-sm text-[#E6E6E6] font-light'>CEO of FitLife Tracker</div>
                  </div>
                </div>
                <div className='flex items-center max-md:hidden'>
                  <Link target='_blank' href={'https://github.com/hetchawda007'}>
                    <button className='bg-[#262626] px-4 py-3 rounded-xl hover:bg-[#3b3b3b]'>Visit Profile</button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='w-full px-24 max-md:px-2'>
          <Head text1='Frequently Asked Questions' text2='Still you have any questions? Contact our Team via hello@squareup.com' />
        </div>
        <div className='max-md:px-2'>

          <div className='flex w-full flex-wrap md:px-24'>
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
        </div>
        <div className='w-full px-24 max-md:px-2'>
          <Foot text1='Thank you for your Interest in SquareUp.' text2='We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.' />
        </div>
        <div className='max-md:w-full max-md:px-2'>
          <Form />
        </div>

      </div >
    </>
  );
}