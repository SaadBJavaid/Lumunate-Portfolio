import Cta from '@/components/home/cta'
import Features from '@/components/koinfolio/Features'
import Hero from '@/components/koinfolio/Hero'
import Message from '@/components/koinfolio/Message'
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