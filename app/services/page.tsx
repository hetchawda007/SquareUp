import React from 'react'
import Foot from '../components/foot'
import Head from '../components/head'
import Description from '../components/description'
import Servicecomponent1 from '../components/Servicecomponent1'
import Servicecomponent2 from '../components/Servicecomponent2'
const Page = () => {
  return (
    <>
      <div className='container w-full flex flex-col items-center justify-center mx-auto px-24 md:border-[#65656542] md:border max-md:px-5'>


        <Head text1='Our Services' text2='Transform your brand with our innovative digital solutions that captivate and engage your audience.' />


        <div className='flex flex-col max-md:px-2 w-full'>
          <Description text1='Design' text2='At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; its;s about creating seamless and intuitive user experiences.' text3='Our design services include:' />

          <Servicecomponent1 text='User Experience (UX) Design' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='User Research and Persona Development' src='/service-1.png' />
            <Servicecomponent2 text='Information Architecture and Wireframing' src='/service-2.png' />
            <Servicecomponent2 text='Interactive Prototyping and User Testing' src='/service-3.png' />
            <Servicecomponent2 text='UI Design and Visual Branding' src='/service-4.png' />

          </div>

          <Servicecomponent1 text='User Interface (UI) Design' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Intuitive and Visually Appealing Interface Design' src='/service-5.png' />
            <Servicecomponent2 text='Custom Iconography and Illustration' src='/service-6.png' />
            <Servicecomponent2 text='Typography and Color Palette Selection' src='/service-7.png' />
            <Servicecomponent2 text='Responsive Design for Various Devices' src='/service-8.png' />

          </div>

          <Servicecomponent1 text='Branding and Identity' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Logo Design and Visual Identity Development' src='/service-9.png' />
            <Servicecomponent2 text='Brand Strategy and Positioning' src='/service-10.png' />
            <Servicecomponent2 text='Brand Guidelines and Style Guides' src='/service-11.png' />
            <Servicecomponent2 text='Marketing Collateral Design (Brochures, Business Cards, etc.)' src='/service-12.png' />

          </div>

        </div>

        <div className='flex flex-col max-md:px-2 w-full'>

          <Description text1='Engineering' text2='Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.' text3='Our engineering services include:' />

          <Servicecomponent1 text='Web Development' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Front-End Development (HTML, CSS, JavaScript)' src='/service-13.png' />
            <Servicecomponent2 text='Back-End Development (PHP, Python, Ruby)' src='/service-14.png' />
            <Servicecomponent2 text='Content Management System (CMS) Development (WordPress, Drupal)' src='/service-15.png' />
            <Servicecomponent2 text='E-Commerce Platform Development (Magento, Shopify)' src='/service-16.png' />

          </div>

          <Servicecomponent1 text='Mobile App Development' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Native iOS and Android App Development' src='/service-17.png' />
            <Servicecomponent2 text='Cross-Platform App Development (React Native, Flutter)' src='/service-18.png' />
            <Servicecomponent2 text='App Prototyping and UI/UX Design Integration' src='/service-19.png' />
            <Servicecomponent2 text='App Testing, Deployment, and Maintenance' src='/service-20.png' />

          </div>
          <Servicecomponent1 text='Custom Software Development' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Enterprise Software Development' src='/service-21.png' />
            <Servicecomponent2 text='Custom Web Application Development' src='/service-23.png' />
            <Servicecomponent2 text='Integration with Third-Party APIs and Systems' src='/service-24.png' />
            <Servicecomponent2 text='Legacy System Modernization and Migration' src='/service-25.png' />

          </div>

        </div>

        <div className='flex flex-col max-md:px-2 w-full'>

          <Description text1='Project Management' text2='Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.' text3='Our project management services include:' />

          <Servicecomponent1 text='Project Planning and Scoping' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Requirements Gathering and Analysis' src='/service-26.png' />
            <Servicecomponent2 text='Project Roadmap and Timeline Development' src='/service-27.png' />
            <Servicecomponent2 text='Resource Allocation and Task Assignment' src='/service-28.png' />
            <Servicecomponent2 text='Risk Assessment and Mitigation Strategies' src='/service-29.png' />

          </div>
          <Servicecomponent1 text='Agile Development' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Iterative Development and Sprints' src='/service-30.png' />
            <Servicecomponent2 text='Scrum or Kanban Methodology Implementation' src='/service-31.png' />
            <Servicecomponent2 text='Regular Progress Updates and Demos' src='/service-32.png' />
            <Servicecomponent2 text='Continuous Improvement and Feedback Incorporation' src='/service-33.png' />

          </div>
          <Servicecomponent1 text='Quality Assurance and Testing' />

          <div className='flex flex-wrap'>

            <Servicecomponent2 text='Test Planning and Execution' src='/service-34.png' />
            <Servicecomponent2 text='Functional and Usability Testing' src='/service-35.png' />
            <Servicecomponent2 text='Performance and Security Testing' src='/service-36.png' />
            <Servicecomponent2 text='Bug Tracking and Issue Resolution' src='/service-37.png' />

          </div>

          <Foot text1='Let us Bring your Ideas to Life in the Digital World.' text2='No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.' />
        </div>


      </div>

    </>
  )
}

export default Page
