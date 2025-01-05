import React, { FC } from 'react'
import HeaderList from '../headerList/HeaderList'
import Close from '@/icons/close/Close'
import { TToggleBurger } from '@/types/toggleBurger.type'
import DownloadButton from '../donwnloadButton/DownloadButton'

const BurgerMenu: FC<TToggleBurger> = ({ setOpen }) => {
  return (
    <div className='fixed w-full h-screen bg-white top-0 left-0 flex justify-center items-center flex-col gap-4 z-10'>
      <button className="btn btn-square absolute right-4 top-4" type='button' onClick={() => setOpen && setOpen(false)}>
        <Close />
      </button>
      <HeaderList setOpen={setOpen} cls={'mb-20'} />
      <DownloadButton block={true} />
    </div>
  )
}

export default BurgerMenu