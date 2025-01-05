import { TSkillsCard } from '@/types/skills.type'
import React, { FC } from 'react'



const SkillsCard: FC<TSkillsCard> = ({ Svg, text }) => {
  return (
    <div className='
    w-[160px] h-[160px] p-6 flex items-center justify-between flex-col bg-white text-black rounded-[4px] border-black border-2 
    lg:w-[186px] lg:h-[186px]
    hover:bg-black hover:text-white hover:fill-white 
    '>
      <Svg cls='w-[56px] h-[56px]' />
      <p className='text-[20px] font-bold'>{text}</p>
    </div>
  )
}

export default SkillsCard 