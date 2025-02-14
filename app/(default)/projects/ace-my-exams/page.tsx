import Features from '@/components/ace-my-exams/Feature'
import Hero from '@/components/ace-my-exams/Hero'
import Message from '@/components/ace-my-exams/Message'
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