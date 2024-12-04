import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  useEffect(() => { }, [isInView]);

  type form = {
    name: string,
    email: string,
    webdesign: boolean,
    collaboration: boolean,
    mobileapp: boolean,
    others: boolean,
    budget: number,
    message: string
  }
  const [form, setform] = useState<form>({ name: '', email: '', webdesign: false, collaboration: false, mobileapp: false, others: false, budget: 100, message: '' }) // Initialize budget

  const handleclick = async (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.textContent
    if (value === 'Web Design') {
      setform({ ...form, webdesign: !form.webdesign })
    }
    if (value === 'Collaboration') {
      setform({ ...form, collaboration: !form.collaboration })
    }
    if (value === 'Mobile App Design') {
      setform({ ...form, mobileapp: !form.mobileapp })
    }
    if (value === 'Others') {
      setform({ ...form, others: !form.others })
    }
  }

  const handlechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setform({ ...form, [name]: name === 'budget' ? Number(value) : value })
  }

  const handlesubmit = async () => {
    console.log(form)

    setTimeout(() => {
      toast('✅ We will contact you shortly', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 1000);

    setform({ name: '', email: '', webdesign: false, collaboration: false, mobileapp: false, others: false, budget: 100, message: '' })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <ToastContainer />
      <div ref={ref} className='w-[70%] p-6 mx-auto border pt-20 pb-10 border-[#262626] max-md:w-full'
        style={{
          opacity: isInView ? 1 : 0,
          transition: "4s",
        }}
      >
        <form className='flex flex-col gap-5 max-md:gap-10' action={handlesubmit}>

          <div className='flex gap-10 justify-center items-center max-md:flex-col'>
            <div className='flex flex-col w-[45%] gap-4 bg-[#242424] justify-center px-8 py-5 rounded-xl max-md:w-full'>
              <label className='text-2xl text-left' htmlFor="name">Full Name</label>
              <div>
                <input onChange={handlechange} value={form.name} className='w-full bg-[#242424] placeholder:text-left text-base placeholder:text-[#656567] text-[#838387] outline-none' type="text" name="name" id="name" placeholder='Your Name' />
                <div className='h-[1px] bg-[#3f3f3f] w-full mx-auto'></div>
              </div>
            </div>

            <div className='flex flex-col w-[45%] gap-4 bg-[#242424] justify-center px-8 py-5 rounded-xl max-md:w-full'>
              <label className='text-2xl text-left' htmlFor="name">Email</label>
              <div>
                <input onChange={handlechange} value={form.email} className='w-full bg-[#242424] placeholder:text-left text-base placeholder:text-[#656567] text-[#838387] outline-none' type="email" name="email" id="email" placeholder='Your Email' />
                <div className='h-[1px] bg-[#3f3f3f] w-full mx-auto'></div>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[94%] mx-auto gap-4 bg-[#242424] justify-center px-8 py-5 rounded-xl max-md:w-full'>
            <div className='text-xl font-semibold mb-3'>Why are you contacting us?</div>
            <div className='flex md:flex-wrap w-full max-md:flex-col max-md:gap-5'>
              <div onClick={handleclick} className='flex gap-3 md:w-[50%] items-center py-1'>
                <div className='bg-[262626] border border-[#333333] flex items-center justify-center rounded-md p-2 cursor-pointer'>
                  <Image style={{ opacity: form.webdesign === false ? 0 : 1 }} className='h-[12px] w-auto' height={100} width={100} src={'/check.png'} alt='check'></Image>
                </div>
                <div>Web Design</div>
              </div>
              <div onClick={handleclick} className='flex gap-3 md:w-[50%] items-center py-1'>
                <div className='bg-[262626] border border-[#333333] flex items-center justify-center rounded-md p-2 cursor-pointer'>
                  <Image style={{ opacity: form.collaboration === false ? 0 : 1 }} className='h-[12px] w-auto' height={100} width={100} src={'/check.png'} alt='check'></Image>
                </div>
                <div>Collaboration</div>
              </div>
              <div onClick={handleclick} className='flex gap-3 md:w-[50%] items-center py-1'>
                <div className='bg-[262626] border border-[#333333] flex items-center justify-center rounded-md p-2 cursor-pointer'>
                  <Image style={{ opacity: form.mobileapp === false ? 0 : 1 }} className='h-[12px] w-auto' height={100} width={100} src={'/check.png'} alt='check'></Image>
                </div>
                <div>Mobile App Design</div>
              </div>
              <div onClick={handleclick} className='flex gap-3 md:w-[50%] items-center py-1'>
                <div className='bg-[262626] border border-[#333333] flex items-center justify-center rounded-md p-2 cursor-pointer'>
                  <Image style={{ opacity: form.others === false ? 0 : 1 }} className='h-[12px] w-auto' height={100} width={100} src={'/check.png'} alt='check'></Image>
                </div>
                <div>Others</div>
              </div>
            </div>
          </div>

          <div className='flex flex-col w-[94%] mx-auto gap-4 bg-[#242424] justify-center px-8 py-5 rounded-xl max-md:w-full'>
            <div className='flex flex-col'>
              <div className='text-xl font-semibold mb-2'>Your Budget</div>
              <div className='text-sm font-normal text-[#E6E6E6]'>Slide to indicate your budget range</div>
            </div>
            <div className='flex justify-center items-center my-6'>
              <div className='mr-5 text-[#9EFF00] '>${form.budget != 10000 ? form.budget : form.budget + `+`}</div>
              <input onChange={handlechange} value={form.budget} className='w-full bg-[#242424] range-1 text-[#838387] outline-none' type="range" name="budget" id="budget" min="100" max="10000" />
            </div>
          </div>

          <div className='flex flex-col w-[94%] mx-auto gap-4 bg-[#242424] justify-center px-8 py-8 rounded-xl max-md:w-full'>
            <label className='text-xl text-left' htmlFor="name">Message</label>
            <div>
              <input onChange={handlechange} value={form.message} className='w-full bg-[#242424] placeholder:text-left text-base placeholder:text-[#656567] text-[#838387] outline-none' type="text" name="message" id="message" placeholder='Your Message' />
              <div className='h-[1px] bg-[#3f3f3f] w-full mx-auto'></div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-5 py-5'>
            <button
              disabled={
                !form.name ||
                !form.email ||
                !form.message ||
                form.budget < 100 ||
                form.budget > 10000 ||
                (!form.webdesign && !form.collaboration && !form.mobileapp && !form.others)
              }
              className='bg-[#262626] w-fit text-[#9EFF00] border hover:bg-[#9EFF00] hover:text-black disabled:text-[#9EFF00] disabled:bg-[#262626] border-[#9EFF00] px-8 py-2 rounded-md'
            >
              Submit
            </button>
            <div className=' max-md:hidden'>
              <div className='text-xl text-center'>By clicking submit, you agree to our Terms and Conditions</div>
              <div className='text-sm text-center'>We respect your privacy and will never share your information</div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Form