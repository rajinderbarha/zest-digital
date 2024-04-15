import Image from 'next/image'
import React from 'react'
import Traffic_conversion_icon from '../../assets/images/Traffic_conversion_icon.png'
import { GoArrowLeft } from "react-icons/go";

function Resources_Calculater_Step_1({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_1">
                <div className="sm:px-10 px-3">
                    <div className="Resources_Calculater_Step_1 popup_conatiner pt-[29px] pb-[66px]   relative">
                        <div className="progrees_bar mb-[10px]">

                        </div>
                        <div className="trafic_image ">
                            <Image src={Traffic_conversion_icon} alt='' className='mx-auto' />
                        </div>
                        <div className=" text-center my-[38px] max-w-[1280px] mx-auto">
                            <h2 className='font-mono text-30px md:text-40px lg:text-45px font-semibold'>Set Your Traffic & Conversion Goals</h2>
                            <p className="font-mono text-30px font-normal text-center px-10 my-[10px]">Use our Growth Calculator to forecast how many visitors and what conversion rate you need to achieve, to hit your revenue goals.</p>
                        </div>
                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base px-[40px] py-[10px] text-white rounded-full' type="button" onClick={()=>setStep(2)}>Start</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type="button" onClick={()=>setStep(0)}><GoArrowLeft /> Back to zestdigital.com</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources_Calculater_Step_1