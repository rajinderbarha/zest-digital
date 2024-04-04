import React from 'react'
import classes from './ScheduleCall.module.css'
import Image from 'next/image'
import calender_profile from '../../assets/images/calender_profile.png'
function ScheduleCall() {
    return (
        <>
            <div className="ScheduleCall ">
                <div className="main_container px-5 ">
                    <h2 className="font-mono text-35px md:text-45px lg:text-55px font-semibold mt-[32px]">Schedule a call</h2>
                    <p className="font-mono text-base font-normal mt-[14px]">Book a 30-minute slot convenient to you, and we’ll send you a call link by email.</p>
                    <div className={`${classes.bg_image} flex items-center flex-col md:flex-row rounded-30px px-[40px] md:px-[94px] py-[100px] md:py-[145px] mt-[44px] `}>
                        <div className={`profile max-w-[307px] text-center`}>
                            <div className="">
                                <Image src={calender_profile} alt='' className=' mx-auto' />
                            </div>
                            <p className="font-mono text-25px mt-2 md:mt-0 md:text-30px text-color-7 font-semibold">Book a call with Louis!</p>
                        </div>
                        <div className={`calender w-full  max-h-[460px] max-w-[560px] bg-white mt-[100px] md:mt-0 md:ml-[179px]`}>
                            <div className="w-full h-[560px]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScheduleCall