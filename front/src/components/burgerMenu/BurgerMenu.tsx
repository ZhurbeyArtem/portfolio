import React, { FC } from 'react'
import HeaderList from '../headerList/HeaderList'
import Close from '@/icons/close/Close'
import { TToggleBurger } from '@/types/toggleBurger.type'

const BurgerMenu: FC<TToggleBurger> = ({ setOpen }) => {
  return (
    <div className='fixed w-full h-screen bg-white top-0 left-0'>
      <button className="btn btn-square absolute right-4 top-4" type='button' onClick={() => setOpen(false)}>
        <Close />
      </button>
      <HeaderList setOpen={setOpen} />
    </div>
  )
}

export default BurgerMenu