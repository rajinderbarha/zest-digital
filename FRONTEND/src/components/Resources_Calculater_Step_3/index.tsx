import ProgressBar from '@/common/ProgressBar';
import React from 'react'
import { GoArrowLeft } from "react-icons/go";

function Resources_Calculater_Step_3({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_3">
                <div className="pe-[6px] pb-[6px]">
                <div className="Resources_Calculater_Step_3 popup_conatiner md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                        <div className="progrees_bar xl:mb-[190px] lg:mb-[160px] md:mb-[130px] sm:mb-[80px] mb-[40px] ">
                        <ProgressBar value={60} />
                        </div>
                        <div className="xl:max-w-[670px] lg:max-w-[570px] md:max-w-[510px] sm:max-w-[440px] max-w-[365px] mx-auto mb-[35px] md:mb-[53px] px-[5px]">

                            <h2 className="font-mono mx-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[670px] xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[20px] font-semibold text-center xl:mb-[40px] lg:mb-[30px] md:mb-[20px] mb-[15px]">What industry does your business operate in?</h2>
                            <div className="industry">
                                <label htmlFor="industry" className="text-color-1  font-normal font-mono w-full sm:text-base text-[13px]">Select your industry from the list</label>
                                <select id="industry" name="industry" className=" w-full font-lato border border-color-9 rounded-[10px] md:rounded-[15px] lg:rounded-[20px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[20px] sm:py-[15px] py-[10px] lg:text-[20px] md:text-[18px] text-[16px]  text-color-1 md:mt-[11px] mt-[7px]" required>
                                    <option>Please select industry</option>
                                    <option value="">Aerospace/Defence/Marine</option>
                                    <option value="">Construction</option>
                                    <option value="">Creative Industries</option>
                                    <option value="">Education</option>
                                    <option value="">Energy</option>
                                    <option value="">Environment</option>
                                    <option value="">Financial Services</option>
                                    <option value="">Food and Drink</option>
                                    <option value="">Healthcare</option>
                                    <option value="">Hospitality</option>
                                    <option value="">IT/Software</option>
                                    <option value="">Manufacturing</option>
                                    <option value="">Other</option>
                                    <option value="">Pharmaceuticals/Sciences</option>
                                    <option value="">Retail</option>
                                    <option value="">Sports and Recreation</option>
                                    <option value="">Transport and Logistics</option>

                                </select>
                            </div>
                        </div>
                        <p className="font-mono text-20px font-bold text-red-900 mx-auto invisible mb-[40px] md:mb-[57px] text-center">Please select an industry to proceed!</p>

                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] border border-color-1 text-white rounded-full hover:bg-white hover:text-color-1' type="button" onClick={()=>setStep(4)}>Next</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type='button' onClick={()=>setStep(2)}><GoArrowLeft /> Back </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources_Calculater_Step_3