import React, { FC } from 'react'
import Download from '@/icons/download/Download'

type TDownloadButton = {
  block?: boolean
}

const DownloadButton: FC<TDownloadButton> = ({ block }) => {
  return (
    <a
      href="/files/CV.pdf"
      download="Artem-Zhurbei-CV.pdf"
      className={`w-fit h-fit  md:block ${block ? 'block' : 'hidden'}`}
    >
      <button type='button' className='
       flex btn text-white bg-black  box-content text-[20px] font-semibold min-h-0 h-fit rounded-[4px] hover:bg-neutral
     md:gap-2
      py-[17px] px-[29px] 
       ' >
        Resume <Download />
      </button>
    </a>
  )
}

export default DownloadButton