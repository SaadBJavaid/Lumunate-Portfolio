import Features from '@/components/ayse/Feature'
import Hero from '@/components/ayse/Hero'
import Message from '@/components/ayse/Message'
import Cta from '@/components/home/cta'
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