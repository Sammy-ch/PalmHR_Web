import React from 'react'

import FeatureSection from 'web/src/components/FeatureSection/FeatureSection'
import HeroSection from 'web/src/components/HeroSection/HeroSection'

import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <main className="w-full">
      <Metadata title="Home" description="Welcome to Palm HR" />
      <HeroSection />
      <FeatureSection />
    </main>
  )
}

export default HomePage
