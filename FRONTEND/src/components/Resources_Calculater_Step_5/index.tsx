import ProgressBar from '@/common/ProgressBar';
import React, { useState } from 'react'
import { GoArrowLeft } from "react-icons/go";
function Resources_Calculater_Step_5({setStep, setFormData, sendDataToGoogleSheets}:any) {

    const [userEmail, setUserEmail] = useState("");
    const handleEmailChange = (e: any) => {
        setUserEmail(e.target.value);
        
    }
    const handleNextClick = () =>{
        if(userEmail===""){
            return      
        } else{
            setFormData((prevFormData: any) => ({
                ...prevFormData,
                userEmail: userEmail
            }))
            sendDataToGoogleSheets();
        }
    }
    
    


    return (
        <>
            <div className="Resources_Calculater_Step_5">
                <div className="pe-[6px] pb-[6px]">
                <div className="Resources_Calculater_Step_5 popup_conatiner md:pt-[29px] sm:pt-[20px] pt-[12px] lg:pb-[66px] md:pb-[55px] sm:pb-[40px] pb-[25px] xl:px-[50px] lg:px-[40px] md:px-[30px] sm:px-[20px] px-[10px] relative bg-white">
                        <div className="progrees_bar xl:mb-[123px] lg:mb-[100px] md:mb-[80px] sm:mb-[70px] mb-[60px] ">
                        <ProgressBar value={90} />
                        </div>
                        <h2 className="font-mono font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[20px]  text-center xl:mb-[33px] lg:mb-[28px] md:mb-[20px] sm:mb-[15px] mb-[10px]">Enter your e-mail address</h2>
                        <div className="email mx-auto  w-full xl:max-w-[680px] lg:max-w-[623px] md:max-w-[563px] sm:max-w-[488px] max-w-[362px] sm:px-10">
                            <input value={userEmail} onChange={handleEmailChange} type="email" name="user_email" id="" className='xl:mb-[60px] lg:mb-[40px] md:mb-[30px] mb-[20px] border font-lato border-color-9 rounded-[10px] md:rounded-[20px] md:px-[26px] sm:px-[15px] px-[10px]  md:py-[20px] sm:py-[15px] py-[10px] text-base md:text-lg w-full' placeholder='johndoe@gmail.com' />
                            <div className="md:mb-[110px] sm:mb-[80px] mb-[60px]">
                                <p className="text-[15px] sm:text-base font-mono font-semibold md:mb-[10px] mb-[7px]">Communication preferences</p>
                                <div className="">
                                    <input type="checkbox" name="confirm" id="confirm" />
                                    <label htmlFor="confirm" className='ml-[8px] font-lato sm:text-lg text-base font-normal'>Yes, please send me more tools and exclusive bonuses</label>
                                </div>
                                <div className="">
                                    <input type="checkbox" name="confirm" id="confirm" />
                                    <label htmlFor="confirm" className='ml-[8px] font-lato sm:text-lg text-base font-normal'>No thanks, I’d rather not receive anything at all</label>
                                </div>
                            </div>
                        </div>
                        <div className="button text-center mb-[10px]">
                            <button className='bg-color-1 font-mono text-base md:px-[40px] sm:px-[30px] px-[25px] md:py-[10px] py-[5px] border border-color-1 text-white rounded-full hover:bg-white hover:text-color-1'  onClick={handleNextClick}>Next</button>
                        </div>
                        <div className=" max-w-max mx-auto w-max ">
                            <button className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1" type='button' onClick={()=>setStep(4)}><GoArrowLeft /> Back </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources_Calculater_Step_5