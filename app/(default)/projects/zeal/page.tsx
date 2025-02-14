import Cta from '@/components/home/cta'
import Features from '@/components/zeal/Feature'
import Hero from '@/components/zeal/Hero'
import Message from '@/components/zeal/Message'
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