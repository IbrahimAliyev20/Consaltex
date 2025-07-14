import React from 'react'
import { FooterMain } from './FooterMain'
import { getContact } from '@/lib/contact'
import { getSocialMeida } from '@/lib/social-media'


export default async function Footer() {

    const contact = await getContact()
    const socialLinks = await getSocialMeida()


  return (
    <div>
        <FooterMain contact={contact} socialLinks={socialLinks}/>
    </div>
  )
}