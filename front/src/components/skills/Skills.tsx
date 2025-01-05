import React from 'react'
import SkillsCard from '../skillsCard/SkillsCard'
import { list } from './data'


const Skills = () => {

  return (
    <div className='
    py-10 
    md:py-[60px]'>
      <h2 className='
      text-[28px] text-center mb-10
       md:text-[48px] md:mb-20  '>My <span className='font-extrabold'>Skills</span>
      </h2>
      <ul className='
      flex gap-5 flex-wrap justify-center
      lg:gap-x-[70px] lg:gap-y-10 
      '>
        {list.map(item => <SkillsCard key={item.text} Svg={item.Svg} text={item.text} />)}
      </ul>
    </div>
  )
}

export default Skills