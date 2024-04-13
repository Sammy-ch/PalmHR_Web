import React from 'react'

import HeroSection from 'web/src/components/HeroSection/HeroSection'

import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <main className="w-full">
      <Metadata title="Home" description="Welcome to Palm HR" />
      <HeroSection />
    </main>
  )
}

export default HomePage
