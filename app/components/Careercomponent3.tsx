"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    src: string,
    text1: string,
    text2: string,
}

const Careercomponent3: React.FC<Props> = ({ src, text1, text2 }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => { }, [isInView]);
    const handleclick = () => {
        toast('Sorry Currently not available :(', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
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

            <div ref={ref} className='flex flex-col gap-5 w-[33.33%] px-8 py-8 border-[#65656542] border max-md:w-full max-md:px-5'
                style={{
                    opacity: isInView ? 1 : 0,
                    transition: "4s",
                }}
            >
                <div className="bg-gradient-to-br border cursor-pointer border-[#535353c6] rounded-xl flex justify-center items-center w-fit from-[#9dff002e] via-[#181818c6] to-[#181818c6] hover:from-[#1a1a1ac6] p-5">
                    <Image className="h-8 w-auto" alt="twitter" height={100} width={100} src={src}></Image>
                </div>
                <div className='font-semibold text-lg'>{text1}</div>
                <div className='text-[#E6E6E6] text-sm font-light'>{text2}</div>
                <button onClick={handleclick} className='bg-[#262626] rounded-xl px-5 py-3 text-sm hover:bg-[#1c1c1c]'>Apply Now</button>
            </div>
        </>
    )
}

export default Careercomponent3
