import React from 'react'
import { GoArrowLeft } from "react-icons/go";
function Resources_Calculater_Step_5() {
    return (
        <>
            <div className="Resources_Calculater_Step_3">
                <div className="sm:px-10 px-5">
                    <div className="Resources_Calculater_Step_3 popup_conatiner pt-[29px] pb-[66px]  relative">
                        <div className="progrees_bar mb-[50px] md:mb-[123px]">

                        </div>
                        <h2 className="font-mono text-40px md:text-45px font-semibold text-center mb-[33px]">Enter your e-mail address</h2>
                        <div className="email mx-auto  w-full max-w-[680px] px-10">
                            <input type="email" name="email" id="" className='mb-[58px] border font-lato border-color-9 rounded-[20px] px-[22px] py-[20px] w-full text-lg ' placeholder='johndoe@gmail.com' />
                            <div className="mb-[110px]">
                                <p className="text-base font-mono font-semibold mb-[20px]">Communication preferences</p>
                                <div className="">
                                    <input type="checkbox" name="confirm" id="confirm" />
                                    <label htmlFor="confirm" className='ml-[8px] font-lato text-lg font-normal'>Yes, please send me more tools and exclusive bonuses</label>
                                </div>
                                <div className="">
                                    <input type="checkbox" name="confirm" id="confirm" />
                                    <label htmlFor="confirm" className='ml-[8px] font-lato text-lg font-normal'>No thanks, I’d rather not receive anything at all</label>
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

export default Resources_Calculater_Step_5