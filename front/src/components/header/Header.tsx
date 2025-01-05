'use client';
import Logo from '@/icons/logo/Logo'
import Bars from '@/icons/bars/Bars'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import { useState } from 'react';
import HeaderList from '../headerList/HeaderList';
import DownloadButton from '../donwnloadButton/DownloadButton';

const Header = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <div className='flex justify-between py-4'>
      <div className='flex gap-4 items-center'>
        <Logo />
        <h5 className='text-[20px] font-bold'>Personal</h5>
      </div>
      <div className='
      hidden
      md:flex items-center
       '>
        <HeaderList />
      </div>
      <button type='button' className='
      block
      md:hidden
      ' onClick={() => setOpen(true)}>
        <Bars cls={"w-9 h-9"} />
      </button>
      <DownloadButton />


      {isOpen && <BurgerMenu setOpen={setOpen} />}
    </div>
  )
}

export default Header