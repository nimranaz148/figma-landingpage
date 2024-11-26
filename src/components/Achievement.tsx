import React from 'react'

function Achievement() {
  return (
    <>
      <section className='w-full flex justify-center items-center 
       py-[48px] xsm:py-[130px]
       px-[24px] xsm:px-[0px]
       '>
        
        <div className='w-full m-auto pt-[112px] text-center'>
          
          <h2 className='font-bold text-[48px] leading-[57.6px]'>Our Achivements</h2>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>


            <div className='
            flex 
            flex-wrap 
            gap-x-[157px] xsm:gap-x-[260px] 
            gap-y-[72px] xsm:gap-y-[0px] 
            justify-center 
            items-center 
            pt-[32px]
            '>
              <h3 className='font-bold text-[20px] xsm:text-[40px] leading-[140%]'>+200</h3>
              <h3 className='font-bold text-[20px] xsm:text-[40px] leading-[140%]'>+50K</h3>
              <h3 className='font-bold text-[20px] xsm:text-[40px] leading-[140%]'>370K</h3>
              <h3 className='font-bold text-[20px] xsm:text-[40px] leading-[140%]'>100+</h3>
            </div>
        </div>
      </section>
    </>
  )
}

export default Achievement
