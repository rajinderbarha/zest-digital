import React from 'react'
import classes from './Career.module.css'
import Image from 'next/image'
import person_icon from '../../assets/images/People_icon.png'
function Career() {
  return (
    <>
      <div className={` Career mb-[100px] md:mb-[160px]`}>
        <div className='main_container'>
          <div className={`${classes.Careerbanner}`}>
            <div className="">
              <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>Grow your career with Zest</h1></div>
          </div>

        </div>
        <div className="thanks_for_interest lg:mt-0 mt-[150px]">
          <div className={`${classes.SingleIntro}  main_container   rounded-30px`}>
            <div className={`${classes.single_container} max-w-[1335px] mx-auto pt-[150px] lg:pt-[170px] pb-[90px] lg:pb-[140px] relative`}>
              <div className={`${classes.grow_img}  absolute max-w-[200px] lg:max-w-[250px]`}>
                <Image src={person_icon} alt="" className='w-full' />
              </div>
              <div className="text-white font-mono text-center max-w-[1172px] mx-auto p-6 md:p-10 ">
                <h2 className='text-35px md:text-45px font-semibold  mb-[60px]'>Thanks for your interest!</h2>
                <p className='text-25px md:text-30px  text-md '>Unfortunately we’re not hiring at present. Keep an eye on this page for new openings!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career