import Image from 'next/image'
import React from 'react'
import rightBlurred from '@/public/koinfolio/right-blurred.svg'

const RightBlurred = () => {
  return (
    <div className='max-w-[1440px] mx-auto relative hidden md:block'>
      <div
        className="pointer-events-none absolute -right-[30%] top-[0px] -z-10 -translate-x-1/4"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={rightBlurred}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>
      
    </div>
  )
}

export default RightBlurred
