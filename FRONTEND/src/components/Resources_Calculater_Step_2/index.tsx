import Image from 'next/image'
import React from 'react'
import ecommerce_icon from '../../assets/images/ecommerce_icon_svg.svg'
import letter_icon from '../../assets/images/letter_icon_svg.svg'
import { GoArrowLeft } from "react-icons/go";
import ProgressBar from '@/common/ProgressBar';

function Resources_Calculater_Step_2({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_2">
                <div className="pe-[6px] pb-[6px]">
                    <div className="Resources_Calculater_Step_2 popup_conatiner  md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                    <div className="progrees_bar xl:mb-[80px] lg:mb-[60px] md:mb-[40px] sm:mb-[30px] mb-[20px] ">
                        <ProgressBar value={40} />
                        </div>
                        <div className="heading text-center lg:mb-[40px] md:mb-[20px] mb-[45px]">
                            <h2 className="font-mono xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[22px] font-semibold md:mb-[10px] sm:mb-[5px] mb-[1px]">Choose your business type</h2>
                            <p className="font-mono text-[15px] md:text-base font-normal text-center ">Select an option below:</p>
                        </div>
                        <div className="grid md:grid-cols-2 sm:gap-10 gap-[20px] xl:mb-[70px] lg:mb-[50px] md:mb-[30px]  mb-[55px]">
                            <div className="col-span-1 max-w-[493px] mx-auto text-center">
                                <div className="text-center mx-auto">
                                    <Image src={ecommerce_icon} alt='' className='mx-auto lg:max-w-[195px] lg:max-h-[195px] md:max-w-[140px] md:max-h-[140px] sm:max-w-[100px] sm:max-h-[100px] max-w-[90px] max-h-[90px] ' />
                                </div>
                                <p className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal mt-[10px]">We’re an ecommerce business and take payments directly through our website.</p>
                            </div>
                            <div className="col-span-1 max-w-[493px]  mx-auto text-center">
                                <div className=" text-center mx-auto">
                                    <Image src={letter_icon} alt='' className='mx-auto lg:max-w-[195px] lg:max-h-[195px] md:max-w-[140px] md:max-h-[140px] sm:max-w-[100px] sm:max-h-[100px] max-w-[90px] max-h-[90px]' />
                                </div>
                                <p className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal mt-[10px]">We generate leads through our website and follow-up with a proposal.</p>
                            </div>
                        </div>
                        <div className="button text-center md:mb-[27px] sm:mb-[20px] mb-[10px]">
                            <button className='bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] border border-color-1 text-white rounded-full hover:bg-white hover:text-color-1' type="button" onClick={()=>setStep(3)}>Next</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type="button" onClick={()=>setStep(1)}><GoArrowLeft /> Back </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources_Calculater_Step_2