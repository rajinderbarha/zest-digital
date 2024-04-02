import React from 'react'
import classes from '../instrumental.module.css'
import Image from 'next/image'
import search_Visit from '../../../../assets/images/search_Visit.png'
function Interests() {
  return (
    <>
      <div className={`${classes.Instrumental}`}>
        <div className='main_container_x'>
          <div className="">

            <div className=" md:mt-0 mt-10">
              <h2 className={`${classes.Interests_h2} font-mono font-semibold md:text-45px text-25px mb-5 w-max-[1262px]`}>“Zest are proactive, skilled, and have our commercial interests at heart. This has been reflected in their work.”</h2>
              <p className='text-color-9 pt-2 border-t border-color-9'>Steve Morten, Marketing Manager at Hanson (UK)</p>

            </div>
            <div className={`${classes.Interests_img} ms-auto`}>
              <Image className=' md:ms-auto mx-auto' src={search_Visit} alt="" />
              {/* <h3 className='font-mono font-semibold text-30px  w-max-[373px] text-center mx-auto mt-4'>Reduction in cost per conversion rate</h3> */}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Interests