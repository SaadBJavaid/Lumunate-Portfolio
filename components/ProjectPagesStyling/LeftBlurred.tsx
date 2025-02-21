import Image from 'next/image'
import React from 'react'
import leftBlurred from '@/public/koinfolio/left-blurred.svg'

const LeftBlurred = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative opacity-75 hidden md:block'>
      <div
        className="pointer-events-none absolute left-[6%] top-[-86px] -z-10 -translate-x-1/4"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={leftBlurred}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      
    </div>
  )
}

export default LeftBlurred
