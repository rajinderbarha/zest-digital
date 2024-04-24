import React from 'react'

import Image from 'next/image'
import classes from './Climate_action.module.css'
import { ClimateAction } from '../../../lib/interface'
import { urlFor } from '../../../lib/sanity.client'
function Climate_action({ climate_actionImg, earth_img, smallDescription }: ClimateAction) {
  return (
    <>
    
    <div className="main_padding  md:mt-[74px] mt-[30px] md:mb-[110px] mb-[50px]">

      <div className="main_container ">
        <div
          className={` mx-auto md:ps-14 sm:px-10 px-[30px] md:pe-7  lg:py-[70px] md:py-[60px] sm:py-[50px] py-[30px] rounded-[20px] md:rounded-30px shadow-blue-right border border-black font-mono bg-white text-color-1 grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-5`}
        >
          <div className={` md:col-span-4 flex items-center  mx-auto`}>
            <div className={`${classes.image1_w}`}>
              <Image
                src={urlFor(climate_actionImg).url()}
                width={250}
                height={105}
                alt=""
                // className=" w-[150px] sm:w-[210px] md:max-w-full "
                className="md:max-w-full sm:max-w-[210px] max-w-[150px]"
                />
            </div>
            <div className=" ">
              <Image
                src={urlFor(earth_img).url()}
                width={197}
                height={198}
                alt=""
                // className="w-[90px] sm:w-[110px] md:max-w-max"
                className="md:max-w-full sm:max-w-[110px] max-w-[90px]"
              />
            </div>
          </div>
          <div className="md:col-span-8 md:ps-10 max-w-[919px] flex items-center">
            <p className={`${classes.growth_engine_desc}  ms-auto  lg:text-30px md:text-25px text-[20px] `}>
              {smallDescription}
            </p>
          </div>
        </div>
      </div>
                </div>
    </>
  )
}

export default Climate_action