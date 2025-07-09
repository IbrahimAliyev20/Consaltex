import AboutUsSec from '@/components/Home/AboutUsSec'
import { HeroSection } from '@/components/Home/HeroSec'
import { VisionSection } from '@/components/Home/VisionSec'
import React from 'react'
import ContactPage from './contact/page'


export default  function HomePage() {
  return (
    <div >
      <div>
      <HeroSection />
      </div>
      <div className='container mx-auto px-4 '>
      <AboutUsSec />
      </div>
      <div className='container mx-auto px-4 '>
      <VisionSection />
      </div>
      <div className='container mx-auto px-4 '>
      <ContactPage />
      </div>
     
    
  

    </div>
  )
}