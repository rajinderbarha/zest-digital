import ProgressBar from '@/common/ProgressBar';
import React from 'react'
import { GoArrowLeft } from "react-icons/go";

function Resources_Calculater_Step_3({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_3">
                <div className="">
                <div className="Resources_Calculater_Step_3 popup_conatiner md:pt-[29px] pt-[20px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                        <div className="progrees_bar xl:mb-[190px] lg:mb-[160px] md:mb-[130px] sm:mb-[80px] mb-[40px] ">
                        <ProgressBar value={60} />
                        </div>
                        <div className="max-w-[670px] mx-auto mb-[35px] md:mb-[53px] px-[5px]">

                            <h2 className="font-mono mx-auto max-w-[400px] sm:max-w-[500px] lg:max-w-[670px] xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[25px] font-semibold text-center xl:mb-[40px] lg:mb-[30px] md:mb-[20px] mb-[15px]">What industry does your business operate in?</h2>
                            <div className="industry">
                                <label htmlFor="industry" className="text-color-1 text-base font-normal font-mono w-full">Select your industry from the list</label>
                                <select id="industry" name="industry" className=" w-full font-lato border border-color-9 rounded-[10px] md:rounded-[20px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[20px] sm:py-[15px] py-[10px] text-base md:text-lg text-color-1 md:mt-[11px] mt-[7px]" required>
                                    <option>Please select industry</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
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