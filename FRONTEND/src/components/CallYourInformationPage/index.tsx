import React from 'react'
import classes from './callYourInformationPage.module.css'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
function CallYourInformation() {
  return (
    <>
      <div className="ScheduleCall_CallYourInformation main_padding xl:mb-[132px] lg:mb-[110px] md:mb-[80px] sm:mb-[60px] mb-[50px]">
        <div className="main_container">
          <h2 className="font-mono xl:text-55px lg:text-50px md:text-40px text-35px font-semibold mt-[32px]">
            Schedule a call
          </h2>
          <p className={` font-mono text-[15px] md:text-base font-normal md:mt-[14px] sm:mt-[10px] mt-[7px]`}>
            Book a 30-minute slot convenient to you, and we’ll send you a call link by email.
          </p>
          <div className={`${classes.bg_image} flex justify-center items-center flex-col md:flex-row rounded-[20px] md:rounded-30px px-[40px] md:px-[94px] xl:pt-[120px] lg:pt-[100px] md:pt-[80px] sm:pt-[50px] pt-[30px] xl:pb-[150px] lg:pb-[130px] md:pb-[90px] sm:pb-[55px] pb-[35px] mt-[44px] `}>
            <div className="form_container ">
              <p className='text-white font-mono font-medium md:text-[20px] sm:text-[18px] text-[15px] text-center'>Your information</p>
              <div className="datetime_container font-mono text-center font-semibold text-white md:text-[20px] sm:text-[18px] text-[15px] md:mt-[15px] sm:mt-[10px] mt-[6px]">
                <span className='day'>Tuesday, </span>
                <span className="date">12 September 2023, </span>
                <span className="time">9:00 </span>
                <span className='editLink text-color-7 underline'>
                  <Link href="#">Edit</Link>
                </span>
              </div>


              <div className={` max-w-[300px] md:mt-[70px] sm:mt-[50px] mt-[30px]  mx-auto`}>
                <form className={`${classes.Call_form_inputs} `}>
                  <div className="first_name flex flex-col w-full max-w-[300px] mb-[35px]">
                    <label htmlFor="fname" className="text-white sm:text-base text-[13px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]">
                      First name*
                    </label>
                    <input
                      type="text"
                      name="fname"
                      id=""
                      className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] sm:text-[16px] text-[14px] "
                      placeholder="John"
                    />
                  </div>
                  <div className="last_name flex flex-col w-full max-w-[300px] mb-[35px]">
                    <label htmlFor="lname" className="text-white sm:text-base text-[13px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]" >
                      Last name*
                    </label>
                    <input
                      type="text"
                      name="lname"
                      id=""
                      className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] sm:text-[16px] text-[14px]"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="email flex flex-col w-full max-w-[300px] mb-[45px]">
                    <label htmlFor="email" className="text-white sm:text-base text-[13px] font-semibold font-mono md:mb-[11px] sm:mb-[9px] mb-[2px]" >
                      E-mail*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id=""
                      className="border border-color-9 sm:rounded-[10px] rounded-[5px] md:rounded-[10px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[11px] sm:py-[9px] py-[6px] md:text-[18px] sm:text-[16px] text-[14px]"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className=" text-center">

                  <input
                    type="submit"
                    value="Send"
                    className="bg-white border  border-white hover:text-white hover:bg-color-1  text-[15px] sm:text-base font-mono text-color-1 rounded-full lg:px-[26px] md:px-[20px]  px-[17px] md:py-[8px] sm:py-[5px] py-[3px] mx-auto"
                    />
                    </div>
                  <div className=" max-w-max mx-auto w-max md:mt-[30px] sm:mt-[22px] mt-[15px]">
                                    <button className="border-b border-white text-white font-light w-max text-[14px] sm:text-[16px] lg:text-lg flex items-center gap-1" type='button' ><GoArrowLeft /> Back </button>
                                </div> 
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CallYourInformation
