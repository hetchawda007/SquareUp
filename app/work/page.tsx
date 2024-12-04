import React from 'react'
import Head from '../components/head'
import Foot from '../components/foot'
import Works from '../components/works'
import Description from '../components/description'
const Page = () => {
  return (
    <>
      <div className='container flex flex-col px-24 w-full mx-auto items-center max-md:px-5'>
        <Head text1='Our Works' text2='Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.' />
        <Description text1='Our Portfolio' text2='Explore our diverse range of digital projects that demonstrate our creativity, technical expertise, and commitment to delivering exceptional results for our clients.' text3='Our portfolio includes:' />
        <div className='flex flex-wrap w-full'>

          <Works heading='E-Commerce Platform for Fashion Hub' imagesrc='/work-1.png' name='Chic Boutique' src='htttps:/www.chicboutique.com' description='We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.' />

          <Works heading='Mobile App for Food Delivery Service' imagesrc='/work-2.png' name='HungryBites' src='htttps:/www.hungrybites.com' description='HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.' />

          <Works heading='Booking and Reservation System for Event Management' imagesrc='/work-3.png' name='EventMasters' src='htttps:/www.eventmasters.com' description='EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.' />

          <Works heading='Custom Software for Workflow Automation' imagesrc='/work-4.png' name='ProTech Solutions' src='htttps:/www.protechsolutions.com' description='HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.' />

          <Works heading='Web Portal for Real Estate Listings' imagesrc='/work-5.png' name='Dream Homes Realty' src='htttps:/www.dreamhomesrealty.com' description='Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.' />

          <Works heading='Mobile App for Fitness Tracking' imagesrc='/work-6.png' name='FitLife Tracker' src='htttps:/www.fitlifetracker.com' description='FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.' />

          <Works heading='Custom Software for Supply Chain Management' imagesrc='/work-7.png' name='Global Logistics Solutions' src='htttps:/www.globallogisticssolutions.com' description='Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs.' />

          <Works heading='Educational Platform for Online Learning' imagesrc='/work-8.png' name='EduConnect' src='htttps:/www.educonnect.com' description='EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages.' />

          <Works heading='Mobile App for Travel Planning' imagesrc='/work-9.png' name='WanderWise' src='htttps:/www.wanderwise.com' description='WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations hope it suits well for both of us.' />

          <Works heading='Web Application for Customer Relationship Management' imagesrc='/work-10.png' name='ConnectCRM' src='htttps:/www.connectcrm.com' description='ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth.' />
          <Foot text1='Let us Bring your Ideas to Life in the Digital World.' text2='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.' />
        </div>
      </div>
    </>
  )
}

export default Page
