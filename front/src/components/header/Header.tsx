'use client';
import Logo from '@/icons/logo/Logo'
import Bars from '@/icons/bars/Bars'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import { useState } from 'react';
import HeaderList from '../headerList/HeaderList';
import Download from '../icons/download/Download';

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
      md:block
       '>
        <HeaderList />
      </div>
      <button type='button' className='
      block
      md:hidden
      ' onClick={() => setOpen(true)}>
        <Bars cls={"w-9 h-9"} />
      </button>
      <a
        href="/files/CV.pdf"
        download="Artem-Zhurbei-CV.pdf"
        className='w-fit h-fit'
      >
        <button type='button' className='
      hidden btn text-white bg-black  box-content text-[20px] font-semibold min-h-0 h-full rounded-[4px] hover:bg-neutral
      md:flex md:gap-2
      lg:py-[17px] lg:px-[29px] 
       ' >
          Resume <Download />
        </button>
      </a>


      {isOpen && <BurgerMenu setOpen={setOpen} />}
    </div>
  )
}

export default Header