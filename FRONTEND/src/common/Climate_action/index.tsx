import React from 'react'
import climate_action from '../../assets/images/climate_action.png'
import earth from '../../assets/images/earth.png'
import Image from 'next/image'
import classes from './Climate_action.module.css'
import { ClimateAction } from '../../../lib/interface'
import { urlFor } from '../../../lib/sanity.client'
function Climate_action({ climate_actionImg,earth_img, smallDescription }: ClimateAction) {
    return (
        <>
            <div className="mx-auto max-w-[1720px] w-full px-5 my-10 mt-[74px] mb-[110px]">
            <div
              className={` mx-auto md:ps-14 px-10 md:pe-7  md:py-[70px] py-[60px] rounded-30px shadow-compo border border-black font-mono bg-white text-color-1 grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-5`}
            >
              <div className={` col-span-4 flex items-center  mx-auto`}>
                <div className={`${classes.image1_w} w-[120px] sm:w-[250px]`}>
                  <Image
                    src={urlFor(climate_actionImg).url()}
                    width={250}
                    height={105}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className=" w-[80px] sm:w-[150px]">
                  <Image
                    src={urlFor(earth_img).url()}
                    width={197}
                    height={198}
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="col-span-8 md:ps-10 max-w-[919px]   items-center">
                <p className={`${classes.growth_engine_desc} text-3xl `}>
                  {smallDescription}
                </p>
              </div>
            </div>
          </div>
        </>
    )
}

export default Climate_action