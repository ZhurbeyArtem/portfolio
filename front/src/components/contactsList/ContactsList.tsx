import Link from 'next/link'
import React from 'react'
import Linkedin from '@/icons/linkedin/Linkedin'
import GitHub from '@/icons/github/GitHub'
import Telegram from '@/icons/telegram/Telegram'

const ContactsList = () => {
  return (
    <nav className='
    mx-auto w-fit
    lg:mx-0
    '>
      <ul className='
      flex text-[36px] font-semibold  h-full gap-6
      md:gap-8
    '>
        <Link className={'p-4 rounded-[4px] border-2 border-black fill-black hover:bg-black hover:fill-white'} href='https://www.linkedin.com/in/zhurbey/'><Linkedin cls='w-5 h-5' /></Link> 
        <Link className={'p-4 rounded-[4px] border-2 border-black fill-black hover:bg-black hover:fill-white'} href='https://github.com/ZhurbeyArtem'><GitHub cls='w-5 h-5' /></Link> 
        <Link className={'p-4 rounded-[4px] border-2 border-black fill-black hover:bg-black hover:fill-white'} href="https://t.me/zhurbeyArtem"><Telegram cls='w-5 h-5' /></Link>  
      </ul>
    </nav>
  )
}

export default ContactsList