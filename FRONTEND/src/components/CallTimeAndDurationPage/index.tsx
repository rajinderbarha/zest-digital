import React from 'react'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
import classes from './CallTimeAndDurationPage.module.css'

function CallTimeAndDurationPage() {
  return (
    <>

      <div className="ScheduleCall_CallTimeAndDurationPage main_padding xl:mb-[132px] lg:mb-[110px] md:mb-[80px] sm:mb-[60px] mb-[50px]">
        <div className="main_container">
          <h2 className="font-mono xl:text-55px lg:text-50px md:text-40px text-35px font-semibold mt-[32px]">
            Schedule a call
          </h2>
          <p className={` font-mono text-[15px] md:text-base font-normal md:mt-[14px] sm:mt-[10px] mt-[7px]`}>
            Book a 30-minute slot convenient to you, and we’ll send you a call link by email.
          </p>
          <div className={`${classes.bg_image} flex justify-center items-center flex-col md:flex-row rounded-[20px] md:rounded-30px px-[40px] md:px-[94px] xl:pt-[120px] lg:pt-[100px] md:pt-[80px] sm:pt-[50px] pt-[30px] xl:pb-[150px] lg:pb-[130px] md:pb-[90px] sm:pb-[55px] pb-[35px] mt-[44px] `}>
            <div className="dateTime_container ">
              <p className='text-white font-mono font-medium md:text-[20px] sm:text-[18px] text-[15px] text-center'>How long do you need?</p>
              <div className="minutes_container flex justify-center md:mt-[40px] sm:mt-[30px] mt-[20px]">
                <div className="minute_box font-lato w-fit md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0]">
                  <span className='w-fit '> 15 min</span>
                </div>
                <div className="minute_box font-lato w-fit md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0]">
                  <span className='w-fit '> 30 min</span>
                </div>
                <div className="minute_box font-lato w-fit md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0]">
                  <span className='w-fit '> 1 hours</span>
                </div>
              </div>
              <div className="md:mt-[74px] sm:mt-[50px] mt-[30px] md:mb-[50px] sm:mb-[35px] mb-[25px]">
                <p className='text-white font-mono font-medium md:text-[20px] sm:text-[18px] text-[15px] text-center'>What time works best?</p>
                <p className='text-white font-mono  md:text-[20px] sm:text-[18px] text-[15px] text-center'>
                  <span className={`${classes.time_text}`}> Showing time for</span>
                  <span className='font-medium'> 12 September 2023</span>
                </p>
              </div>
              <select id="industry" name="industry" className={`${classes.select_region} font-mono font-semibold md:text-[20px] sm:text-[18px] text-[16px] bg-transparent text-color-7`} required>
                <option>Europe/London</option>
                <option value="">Europe/London</option>
              </select>
              <div className={`${classes.specific_time} md:mt-[15px] sm:mt-[12px] mt-[8px] md:max-h-[350px] sm:max-h-[265px] max-h-[205px] md:pr-[15px] sm:pr-[7px] pr-[5px] h-full overflow-y-scroll`}>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>9:00</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>9:15</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>9:30</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>9:45</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>10:00</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>10:15</span>
                </div>
                <div className="minute_box font-lato text-center md:text-[18px] sm:text-[16px] text-[14px] md:px-[56px] sm:px-[30px] px-[20px] md:py-[13px] sm:py-[8px] py-[5px] border border-white bg-black text-white hover:bg-white hover:text-color-1 active:border-[#000] active:bg-[#1e0e0] md:mb-[15px] sm:mb-[12px] mb-[8px]">
                  <span className='w-fit '>10:30</span>
                </div>
              </div>
              <div className=" max-w-max mx-auto w-max md:mt-[30px] sm:mt-[22px] mt-[15px]">
                                    <button className="border-b border-white text-white font-light w-max text-[14px] sm:text-[16px] lg:text-lg flex items-center gap-1" type='button' ><GoArrowLeft /> Back </button>
                                </div> 
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CallTimeAndDurationPage