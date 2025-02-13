import Cta from '@/components/home/cta'
import Features from '@/components/Koinfolio/Features'
import Hero from '@/components/Koinfolio/Hero'
import Message from '@/components/Koinfolio/Message'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Message/>
        <Cta/>
    </div>
  )
}

export default page