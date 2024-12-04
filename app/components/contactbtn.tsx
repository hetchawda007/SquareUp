import React from 'react'
import Link from 'next/link'
type props = {
  params: string,
}
const Contactbtn: React.FC<props> = ({params})=> {
  return (
    <Link href={'/contact'}><button className='bg-[#9EFF00] p-3 text-center rounded-lg font-semibold hover:bg-[#73b804] transition-all text-black'>{params}</button></Link>
  )
}

export default Contactbtn
