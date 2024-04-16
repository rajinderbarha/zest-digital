import Image from 'next/image'
import React from 'react'
import ecommerce_icon from '../../assets/images/ecommerce_icon.png'
import letter_icon from '../../assets/images/letter_icon.png'
import { GoArrowLeft } from "react-icons/go";

function Resources_Calculater_Step_2({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_2">
                <div className="sm:px-10 px-5">
                    <div className="Resources_Calculater_Step_2 popup_conatiner pt-[10px] pb-[10px] bg-white">
                        <div className="progrees_bar mb-[10px]">

                        </div>
                        <div className="heading text-center mb-[10px]">
                            <h2 className="font-mono text-30px md:text-40px lg:text-45px font-semibold mb-[10px]">Choose your business type</h2>
                            <p className="font-mono text-base font-normal text-center ">Select an option below:</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-10 mb-[10px] px-[50px] md:px-[100px] lg:px-[159px]">
                            <div className="col-span-1 max-w-[493px] text-center">
                                <div className="md:max-w-max max-w-[150px] text-center mx-auto">
                                    <Image src={ecommerce_icon} alt='' className='mx-auto' />
                                </div>
                                <p className="font-mono text-25px md:text-30px font-normal mt-[10px]">We’re an ecommerce business and take payments directly through our website.</p>
                            </div>
                            <div className="col-span-1 max-w-[493px] text-center">
                                <div className="md:max-w-max max-w-[150px] text-center mx-auto">
                                    <Image src={letter_icon} alt='' className='mx-auto' />
                                </div>
                                <p className="font-mono text-25px md:text-30px font-normal mt-[10px]">We generate leads through our website and follow-up with a proposal.</p>
                            </div>
                        </div>
                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base px-[40px] py-[10px] text-white rounded-full' type="button" onClick={()=>setStep(3)}>Next</button>
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