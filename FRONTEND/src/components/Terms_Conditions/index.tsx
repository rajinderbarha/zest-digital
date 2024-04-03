import React from 'react'
import classes from './Terms_Conditions.module.css'
import Growth_engine from '@/common/Growth_engine'
import Boxes from './Boxes'
function Terms_Conditions() {
  return (
    <>
      <div className='main_container'>
        <div className={`${classes.Careerbanner}`}>
          <div className="">
            <h1 className='font-mono font-semibold md:text-55px text-35px mb-5 '>Terms & Conditions</h1></div>
        </div>
      </div>
      <div className=" main_container">

        <div className={`${classes.box_bg_image} mt-[66px] rounded-30px h-[500px] md:h-[680px] pt-[86px]`}>
        </div>

        <div className="max-w-[1335px] mx-auto -mt-[400px] md:-mt-[650px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1355px] px-5 font-mono mx-auto mt-[80px]">
            <Boxes title=" Digital" shadow_right={true} btn_title="Read T&C" desc="Terms for use of our digital services." />
            <Boxes title="Web development" shadow_right={false} btn_title="Read T&C" desc="Terms for use of our web development services." />
            <Boxes title="Project work" shadow_right={true} btn_title="Read T&C" desc="Terms for standalone project work." />
            <Boxes title="Hosting" shadow_right={false} btn_title="Read T&C" desc="Terms for use of our hosting services." />
            <Boxes title="Website usage" shadow_right={true} btn_title="Read T&C" desc="Terms for use of our website." />
            <Boxes title="Privacy policy" shadow_right={false} btn_title="Read T&C" desc="Information relating to privacy." />
          </div> </div>
      </div>



    </>
  )
}

export default Terms_Conditions