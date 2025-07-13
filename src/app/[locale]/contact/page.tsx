import ContactPage from '@/components/Contact/ContactPage'
import React from 'react'

function Contact() {
  return (
    <div>
      
      <div className='container mx-auto px-4 py-6 md:py-14 '>
      <div>
          <h2 className=" text-[22px] md:text-4xl font-bold text-gray-900 mb-2 w-fit pb-4">
            Contact Us
          </h2>
        </div>
        <ContactPage />
      </div>
    </div>
  )
}

export default Contact