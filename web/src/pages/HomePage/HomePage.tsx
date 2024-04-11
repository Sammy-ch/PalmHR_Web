import React from 'react'

import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center gap-5 bg-[#F5F5F5] px-5 py-2">
      <Metadata title="Home" description="Welcome to Palm HR" />
      <section>HOMEPAGE</section>
    </main>
  )
}

export default HomePage
