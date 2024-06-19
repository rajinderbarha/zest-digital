import React from 'react'
import Casestudyintro_Image from '../../../assets/images/Case_studies_circle.png'
import Image from 'next/image'
import classes from './resourcesbanner.module.css'
import { Resources } from '../../../../lib/interface'

function Resourcesbanner({data}:{data:Resources}) {
    return (
        <>
            <div className={`${classes.Resourcesbanner} main_padding xl:mt-[95px] lg:mt-[75px] md:mt-[55px] mt-[35px]`}>
                <div className='main_container'>
                    <div className=" ">
                        <div className="">
                            
                            {/* <h1 className='font-mono font-semibold xl:text-55px min-tb:max-tb:text-30px min-tb:max-tb:max-w-[516px]   lg:text-50px md:text-[42px] sm:text-30px text-[22px] mb-[20px] '>{data.heading}</h1> */}
                            <h1 className={`${classes.banner_text} font-mono font-semibold xl:text-55px min-tb:max-tb:text-30px min-tb:max-tb:max-w-[516px]   lg:text-50px md:text-[42px] sm:text-30px text-[22px] mb-[20px] `}>{data.heading}</h1>
                            </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resourcesbanner