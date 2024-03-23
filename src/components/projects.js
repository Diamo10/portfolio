import React from 'react'
import ProjectCard from './projectcard'

const Project = () => {
  return (
    <div className='bg-black font-sora text-white my-[16px]'>
        <div className='md:mx-[80px] my-[50px]'>
        <div className="text-center text-[28px]">
          My <span className="font-extrabold">Experiences</span>
        </div>
            <ProjectCard img={'irs.png'} no={'01'} title={'Invesment Recommendation System'} desc={'This is the description of Investment recommendation System.'}/>
        </div>
    </div>
  )
}

export default Project