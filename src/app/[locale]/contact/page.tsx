import ContactPage from '@/components/Contact/ContactSingle'
import React from 'react'

export default  function Contact() {
  return (
      <div  className='container mx-auto px-4 py-6 md:py-14'>
        <h2 className='text-[22px] md:text-[32px] font-semibold text-gray-900 mb-6 w-fit '>
        Contact Us
        </h2>
        <ContactPage />
      </div>
  )
}