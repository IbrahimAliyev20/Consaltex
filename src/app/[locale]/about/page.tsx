import MissionPage from '@/components/About/MisionSec'
import AboutUsSec from '@/components/Home/AboutUsSec'
import React from 'react'

function AboutPage() {
  return (
    <div>
      <div className='container mx-auto px-4 py-6 md:py-14'>

      <AboutUsSec />
      </div>
      <div className='container mx-auto px-4 py-6 md:py-14'>
        <MissionPage />
      </div>
    </div>
  )
}

export default AboutPage