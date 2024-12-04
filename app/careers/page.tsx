"use client"
import React from 'react'
import Head from '../components/head'
import Description from '../components/description'
import Careercomponent1 from '../components/Careercomponent1'
import Careercomponent2 from '../components/Careercomponent2'
import Careercomponent3 from '../components/Careercomponent3'
import Section from '../components/Section'

const Page = () => {
  return (
    <>
      <div className='container w-full flex flex-col items-center justify-center mx-auto px-24 max-md:px-5'>
        <Head text1='Join Our Team at SquareUp' text2='Unlock your potential and join our team of innovators and problem solvers.' />

        <Description text1='Welcome to SquareUp, where talent meets opportunity!' text2="At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product  agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us." text3='Why Work at SquareUp?' />

        <div className='flex flex-wrap w-full'>

          <Careercomponent1 text1='Innovative and Impactful Projects' text2="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." />
          <Careercomponent1 text1='Supportive Environment' text2="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference." />
          <Careercomponent1 text1='Continuous Learning and Growth' text2="We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies." />
          <Careercomponent1 text1='Challenging and Rewarding Work' text2="Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life." />

        </div>

        <div className='flex flex-col gap-5 px-14 py-10 border-[#65656542] border max-md:px-5'>
          <div className='text-4xl font-semibold'>Current Openings</div>
          <div className='text-sm text-[#E6E6E6] font-light'>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you&apos;re a designer, engineer, project manager, or have skills that align with our agency&apos;s mission, we encourage you to explore our open positions.</div>
        </div>

        <Careercomponent2 text='Design Job Openings' />

        <div className='flex w-full flex-wrap'>

          <Careercomponent3 src='/career-1.png' text1='UI Designer' text2='Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.' />
          <Careercomponent3 src='/career-2.png' text1='UX Designer' text2='Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.' />
          <Careercomponent3 src='/career-3.png' text1='Design Head' text2='Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.' />

        </div>

        <Careercomponent2 text='Development Job Openings' />

        <div className='flex w-full flex-wrap'>

          <Careercomponent3 src='/career-4.png' text1='Front - End Developer' text2='Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.' />
          <Careercomponent3 src='/career-5.png' text1='Back - End  Developer' text2='Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.' />
          <Careercomponent3 src='/career-6.png' text1='Full Stack Developer' text2='Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.' />

        </div>

        <Careercomponent2 text='Management Job Openings' />

        <div className='flex w-full flex-wrap'>

          <Careercomponent3 src='/career-7.png' text1='BA Manager' text2='Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.' />
          <Careercomponent3 src='/career-8.png' text1='Project Manager' text2='Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.' />
          <Careercomponent3 src='/career-9.png' text1='HR Manager' text2='Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.' />

        </div>

        <Careercomponent2 text='QA Job Openings' />

        <div className='flex w-full flex-wrap'>

          <Careercomponent3 src='/career-10.png' text1='QA Tester' text2='Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.' />
          <Careercomponent3 src='/career-11.png' text1='SQL Tester' text2='Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.' />
          <Careercomponent3 src='/career-12.png' text1='Manual Tester' text2='Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.' />

        </div>

        <Section />

      </div>
    </>
  )
}

export default Page
