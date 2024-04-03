import React from 'react'
import classes from './GrowthMarketingServices_Address.module.css'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import london from '../../../assets/images/london.webp'
import { FaPhoneAlt } from "react-icons/fa";
function GrowthMarketingServices_Address() {
    return (
        <>
            <div className="GrowthMarketingServices_Address mb-[100px] md:mb-[200px]">

                <div className="main_container">
                    <div className={`${classes.bg_image} rounded-30px py-[80px] md:py-[160px] px-[20px] md:px-[70px] grid md:grid-cols-2 md:gap-y-0 gap-y-12 md:gap-x-10`}>
                        <div className="col-span-1">
                            <h2 className="font-mono text-35px md:45px xl:text-55px font-semibold text-color-9 text-center">Oxford’s Leading Growth Marketing Agency</h2>
                            <h2 className="font-mono md:text-30px text-25px font-semibold text-white text-center mt-[40px] md:mt-[60px] mb-[20px] md:mb-[25px] max-w-[566px] mx-auto">Schedule a 30-minute time slot convenient to you</h2>
                            <div className="bokk_now_btn">
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>Book Now<span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>

                            </div>
                            <div className="address mt-[80px] md:mt-[110px] mb-[40px] text-center">
                                <h2 className='font-mono text-25px md:text-30px font-normal text-white mb-[10px] md:mb-[20px]'>Zest Digital Ltd</h2>
                                <address className='not-italic text-base md:text-lg font-lato text-white'>
                                    1-3 Kings Meadow <br /> Osney Mead <br /> Oxford <br /> OX2 0DP
                                </address>
                            </div>
                            <div className="hours text-center">
                                <h2 className="font-mono text-25px md:text-30px font-normal mb-[10px] md:mb-[20px] text-white">Hours</h2>
                                <p className="text-base md:text-lg font-lato text-white">Monday – Friday <br /> 8:30 am – 4:30 pm</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="max-w-[738px] w-full">
                                <Image src={london} alt="" className='max-w-[738px] w-full rounded-30px shadow-compo shadow-[#e43fa8]' />

                                <div className=" flex items-center justify-end text-color-9 mt-[10px] md:mt-[25px]">
                                    <FaPhoneAlt className='text-white' />
                                    +44 (0) 1865 684 999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_Address