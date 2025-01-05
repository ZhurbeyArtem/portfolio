import React from 'react'
import ContactsList from '../contactsList/ContactsList'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <div className='
    py-10
    md:flex md:flex-row-reverse md:justify-end md:py-[60px]'>
      <div className='
      overflow-hidden flex justify-center mb-12 w-full h-auto relative
      md:mb-0 md:hidden 
      lg:ml-6 lg:flex
      '>
        <Image
          src="/images/boy.webp"
          width={351 * 2} // Увеличиваем размеры для ретина-экранов
          height={524 * 2}
          className="
    w-auto h-auto 
    md:max-w-[512px] md:max-h-[453px] md:object-contain md:w-full md:h-fit
  "
          alt="Picture of the author"
          priority
          quality={100}
        />
      </div>
      <div className='
      text-center
      lg:max-w-[650px] lg:text-left
      '>
        <div className='
        text-[28px] tracking-widest leading-8 flex flex-col gap-3 mb-8
        md:gap-5 md:text-[48px] md:leading-[48px]
        '>
          <p>Hello I`m <span className='font-extrabold'>Artem Zhurbei.</span></p>
          <p>Fullstack <span className='text-stroke-3 text-white font-extrabold'>Developer</span></p>
          <p>Based In <span className='font-extrabold'>Ukraine</span></p>
        </div>
        <p className='
        mb-8 text-[16px] text-zinc500
        md:mb-[94px]
        '>I am a full stack web developer competent in areas such as
          responsive web design with Typescript/Javascript. My
          philosophy is to innovate, make it beautiful and robust. As
          such my values are in object-oriented and functional
          programming techniques in Typescript/Javascript to achieve
          rich results in application logic and design.</p>
        <ContactsList />
      </div>
    </div>
  )
}

export default AboutMe