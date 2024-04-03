import Image from 'next/image'
import React from 'react'
import popup_person from '../../assets/images/popup_person.svg'
import popup_question_mark from '../../assets/images/popup_question_mark.svg'
import popup_percantage from '../../assets/images/popup_percantage.svg'
import popup_euro from '../../assets/images/popup_euro.svg'
import { GoArrowLeft } from "react-icons/go";
function Resources_Calculater_Step_4() {
    return (
        <>
            <div className="Resources_Calculater_Step_3">
                <div className="sm:px-10 px-5">
                    <div className="Resources_Calculater_Step_3 popup_conatiner pt-[29px] pb-[66px]  relative">
                        <div className="progrees_bar mb-[80px] md:mb-[140px]">

                        </div>
                        <h2 className="text-center font-mono text-30px md:text-40px lg:text-45px font-semibold mb-[30px]">Input your data (use the ‘?’ for help)</h2>
                        <div className="form_details  max-w-[640px] md:px-10 border mx-auto grid gap-5 md:pb-[97px] pb-[30px]">
                            <div className="flex relative text-center  mx-auto   justify-items-end  max-w-max">
                                <div className="md:flex md:flex-row border max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="monthly_sessions" className='font-mono font-semibold text-[18px] text-color-1'>Average monthly sessions:</label>
                                    <div className="flex items-center gap-2">

                                        <input type="number" name="monthly_sessions" id="monthly_sessions" placeholder='1000' className='py-[14px] px-[22px] rounded-[10px] md:w-[300px] border border-color-1' />

                                        <div className="max-w-[30px] w-full">
                                            <Image src={popup_person} alt='' className='max-w-[30px]] w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 relative top-0 sm:-top-5">
                                    <Image src={popup_question_mark} alt='' className='' />
                                </div>

                            </div>
                            <div className="flex  relative text-center mx-auto max-w-max">
                                <div className="md:flex md:flex-row border max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="monthly_sessions" className='font-mono font-semibold text-[18px] text-color-1'>Average conversion rate:</label>
                                    <div className="flex items-center gap-2">

                                        <input type="number" name="monthly_sessions" id="monthly_sessions" placeholder='3' className='py-[14px] px-[22px] rounded-[10px] md:w-[300px] border border-color-1' />

                                        <div className="max-w-[30px] w-full">
                                            <Image src={popup_person} alt='' className='max-w-[30px]] w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 relative top-0 sm:-top-5">
                                    <Image src={popup_question_mark} alt='' className='' />
                                </div>

                            </div>
                            <div className="flex  relative text-center mx-auto max-w-max">
                                <div className="md:flex md:flex-row border max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="monthly_sessions" className='font-mono font-semibold text-[18px] text-color-1'>Average order value:</label>
                                    <div className="flex items-center gap-2">

                                        <input type="number" name="monthly_sessions" id="monthly_sessions" placeholder='5000' className='py-[14px] px-[22px] rounded-[10px] md:w-[300px] border border-color-1' />

                                        <div className="max-w-[30px] w-full">
                                            <Image src={popup_person} alt='' className='max-w-[30px]] w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 relative top-0 sm:-top-5">
                                    <Image src={popup_question_mark} alt='' className='' />
                                </div>

                            </div>
                            <div className="flex  relative text-center mx-auto max-w-max">
                                <div className="md:flex md:flex-row border max-w-max  items-center gap-x-[10px]">
                                    <label htmlFor="monthly_sessions" className='font-mono font-semibold text-[18px] text-color-1'>Average order value:</label>
                                    <div className="flex items-center gap-2">

                                        <input type="number" name="monthly_sessions" id="monthly_sessions" placeholder='40' className='py-[14px] px-[22px] rounded-[10px] md:w-[300px] border border-color-1' />

                                        <div className="max-w-[30px] w-full">
                                            <Image src={popup_person} alt='' className='max-w-[30px]] w-full' />
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-2 relative top-0 sm:-top-5">
                                    <Image src={popup_question_mark} alt='' className='' />
                                </div>

                            </div>

                        </div>
                        <div className="button text-center mb-[27px]">
                            <button className='bg-color-1 font-mono text-base px-[40px] py-[10px] text-white rounded-full'>Next</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <a href="" className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1"><GoArrowLeft /> Back </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources_Calculater_Step_4