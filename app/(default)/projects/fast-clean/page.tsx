import Features from '@/components/fast-clean/Feature'
import Hero from '@/components/fast-clean/Hero'
import Message from '@/components/fast-clean/Message'
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