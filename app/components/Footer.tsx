"use client"
import React, { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  useEffect(() => { }, [isInView]);

  return (
    <>
      <div ref={ref} className="bg-[#1A1A1A] border-t-2 border-[#262626] px-24 py-8 flex flex-col gap-5 text-[#E6E6E6] max-md:px-5"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "4s",
        }}
      >
        <div className="flex items-center justify-between text-[14px] py-2 max-lg:flex-col max-md:gap-5">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image
              className="h-12 w-auto"
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
            />
            <div className="font-semibold text-lg text-white">SquareUp</div>
          </div>
          <nav>
            <ul className="flex items-center font-semibold gap-2 flex-wrap max-md:justify-center">
              <Link href={'/'}><li className="cursor-pointer p-[10px] rounded-lg">Home</li></Link>
              <Link href={'/services'}><li className="cursor-pointer p-[10px] rounded-lg">Services</li></Link>
              <Link href={'/work'}><li className="cursor-pointer p-[10px] rounded-lg">Work</li></Link>
              <Link href={'/process'}><li className="cursor-pointer p-[10px] rounded-lg">Process</li></Link>
              <Link href={'/about'}><li className="cursor-pointer p-[10px] rounded-lg">About</li></Link>
              <Link href={'/careers'}><li className="cursor-pointer p-[10px] rounded-lg">Careers</li></Link>
              <Link href={'/contact'}><li className="cursor-pointer p-[10px] rounded-lg">Contact</li></Link>
            </ul>
          </nav>
          <div>
            <div className="p-3 border border-[#262626] flex justify-center items-center rounded-lg gap-3">
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

        <div className="border-[1px] border-[#262626]"></div>

        <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-5">
          <div className="flex justify-between gap-4 items-center max-md:flex-col max-md:gap-5">
            <Link className="flex items-center gap-2" href={'/'}>
              <Image className="h-4 w-auto" alt="mail" height={100} width={100} src={'/mail.png'}></Image>
              <div className="hover:brightness-200 hover:text-white">hellow@suqareup.com</div>
            </Link>
            <Link className="flex items-center gap-2" href={'/'}>
              <Image className="h-5 w-auto" alt="call" height={100} width={100} src={'/call.png'}></Image>
              <div className="hover:brightness-200 hover:text-white">+14 0919454776</div>
            </Link>
            <Link className="flex items-center gap-2" href={'/'}>
              <Image className="h-5 w-auto" alt="location" height={100} width={100} src={'/location.png'}></Image>
              <div className="hover:brightness-200 hover:text-white">Usa San-Fransisco.</div>
            </Link>
          </div>
          <div>&copy; 2024. SquareUp All Rights reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
