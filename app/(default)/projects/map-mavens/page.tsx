import Cta from '@/components/home/cta'
import Features from '@/components/map-mavens/Feature'
import Hero from '@/components/map-mavens/Hero'
import Message from '@/components/map-mavens/Message'
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