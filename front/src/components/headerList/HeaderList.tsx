'use client';
import { TClasses } from '@/types/classes.type';
import { TToggleBurger } from '@/types/toggleBurger.type'

import Link from 'next/link'

import React, { FC, useEffect, useState } from 'react'

type TLinks = {
  href: string,
  text: string
}

const HeaderList: FC<TToggleBurger & TClasses> = ({ setOpen, cls }) => {

  const [hash, setHash] = useState<string>("");
  const links: TLinks[] = [{ href: "#skills", text: "Skills" }, { href: "#projects", text: "Projects" }, { href: "#contactMe", text: "Contact Me" }]
  
  useEffect(() => {
    if (typeof window !== 'undefined')
      setHash(window.location.hash)
  }, [])

  const handleClick = (newHash: string) => {
    if (setOpen) setOpen(false)
    setHash(newHash)
  }

  return (
    <nav className={cls}>
      <ul className='
      flex text-[36px] font-semibold flex-col items-center justify-center h-full gap-4
      md:flex-row md:text-[20px]
      lg:gap-6 
      2xl:gap-8'>
        {
          links.map(link => <Link className={hash === link.href ? 'underline' : ''} href={link.href} key={link.href} onClick={() => handleClick(link.href)}>{link.text}</Link>)
        }
      </ul>
    </nav>
  )
}

export default HeaderList