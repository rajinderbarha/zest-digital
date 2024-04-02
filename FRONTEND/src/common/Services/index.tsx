import React from 'react'
import classes from './Services.module.css'
import Image from 'next/image'
import vertical_bar from '../../assets/images/vertical_bar.png'
import Code_icon from '../../assets/images/Code_icon.png'
import target_icon from '../../assets/images/target_icon.png'
import { GoArrowRight } from "react-icons/go";
const Services = () => {
    return (
        <>
            {/* <div className={`${classes.bg_image} mx-auto max-w-[1720px] w-full px-5 my-10 font-mono rounded-30px`}> */}
            <div className="mx-auto max-w-[1720px] w-full px-5 my-10 md:mt-36 mt-20">
                <div className={`${classes.bg_image} bg-black rounded-30px lg:pt-[50px] font-mono flex md:flex-row flex-col `}>
                    <div className="p-10 lg:px-20 2xl:px-100px md:px-11 px-8 max-768:px-10 max-1350:px-16 lg:pb-[100px] xl:pb-[218px] md:w-[654px] w-max  pb-16">
                        <h2 className=' text-2xl md:text-3xl lg:text-[45px] text-white font-semibold mb-6'>Our Services</h2>
                        <div className="  flex gap-5 flex-col text-color-6">
                            <ul>
                                <li > <a href="" className="border-b border-color-6 mb-7  w-max text-md lg:text-lg flex items-center gap-1">SEO Services <GoArrowRight /></a></li>
                                <li>  <a href="" className="border-b border-color-6 mb-7   text-md w-max lg:text-lg flex items-center gap-1">PPC Services <GoArrowRight /></a></li>
                                <li> <a href="" className="border-b border-color-6 mb-7   text-md w-max lg:text-lg flex items-center gap-1">PPC Services <GoArrowRight /></a></li>
                                <li>  <a href="" className="border-b border-color-6  mb-7  text-md w-max lg:text-lg flex items-center gap-1">Web Services <GoArrowRight /></a></li>
                                <li><a href="" className="border-b border-color-6 mb-7  text-md w-max lg:text-lg flex items-center gap-1">Growth Marketing <GoArrowRight /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex  xl:-mt-36 lg:-mt-20 -mt-10">
                        <div className="  h-max self-end">

                            <Image src={vertical_bar} alt="" className=' ' />
                        </div>
                        <div className="   h-max self-center">

                            <Image src={Code_icon} alt="" className=' ' />
                        </div>
                        <div className="    h-max">
                            <Image src={target_icon} alt="" className='  ' />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services