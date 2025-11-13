import React from 'react'
import { FooterMain } from './FooterMain'
import { getContact } from '@/lib/contact'
import { getSocialMeida } from '@/lib/social-media'
import { getSettings } from '@/lib/settings'


export default async function Footer() {

    const contact = await getContact()
    const socialLinks = await getSocialMeida()
    const settings = await getSettings()


  return (
    <div>
        <FooterMain contact={contact} socialLinks={socialLinks} settings={settings}/>
    </div>
  )
}