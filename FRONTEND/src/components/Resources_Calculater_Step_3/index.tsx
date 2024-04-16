import React from 'react'
import { GoArrowLeft } from "react-icons/go";

function Resources_Calculater_Step_3({setStep}:any) {
    return (
        <>
            <div className="Resources_Calculater_Step_3">
                <div className="sm:px-10 px-5">
                    <div className="Resources_Calculater_Step_3 popup_conatiner pt-[10px] pb-[10px]  relative bg-white">
                        <div className="progrees_bar mb-[10px] md:mb-[20px]">

                        </div>
                        <div className="max-w-[670px] mx-auto mb-[53px] px-10">

                            <h2 className="font-mono text-30px md:text-40px lg:text-45px font-semibold text-center mb-[45px]">What industry does your business operate in?</h2>
                            <div className="industry">
                                <label htmlFor="industry" className="text-color-1 text-base font-normal font-mono w-full ">Select your industry from the list</label>
                                <select id="industry" name="industry" className=" w-full font-lato border border-color-9 rounded-[20px] px-[26px]  py-[20px] text-lg text-color-1 mt[11px]" required>
                                    <option>Please select industry</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>
                        </div>
                        <p className="font-mono text-20px font-bold text-red-900 mx-auto invisible  mb-[57px] text-center">Please select an industry to proceed!</p>

                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base px-[40px] py-[10px] text-white rounded-full' type="button" onClick={()=>setStep(4)}>Next</button>
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