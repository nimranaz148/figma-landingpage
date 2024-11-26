import React from 'react'
import Image from 'next/image';
import CourcesCards from './CourcesCards';
import { Button } from './ui/button';


function Courses() {
  return (
    <>
      <section className='w-full h-[636px] mt-[48px] xsm:pt-[112px] text-center'>
        <div className='w-full m-auto'>
          <h2 className='
          font-bold 
          text-[32px]  xsm:text-[48px] 
           leading-[130%] 
          text-[#000000]
          '>Explore Courses By Category</h2>

          <p className='mt-[24px] text-[18px] leading-[27px] text-[400] '>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>

        </div>

        <div className='w-full h-[444px] xsm:h-auto mt-[80px] flex gap-[24px] flex-wrap overflow-y-auto'>
         <CourcesCards/>
        </div>
         
         <div className='flex justify-center pt-4 mb-[112px]'>
        <Button className='bg-white border-[1px] border-[black] text-black hover:bg-transparent'>View All Courses</Button>

        </div>

      </section>

     
    </>
  )
}

export default Courses
