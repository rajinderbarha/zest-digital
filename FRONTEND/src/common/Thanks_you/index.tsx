import React from 'react'
import classes from './Thanks_you.module.css'
import { GoArrowLeft } from "react-icons/go";
import Image from 'next/image';
import thankyou from '../../assets/images/thankyou.png'
import Link from 'next/link';

function Thanks_you() {
    return (
        <>
            <div className={`Career xl:mb-[170px] lg:mb-[150px] md:mb-[125px] sm:mb-[80px] mb-[50px]`}>
                <div className="main_padding">
                    <div className="thanks_for_interest lg:mt-[51px] md:mt-[35px] sm:mt-[30px] mt-[25px]">
                        <div className={`${classes.SingleIntro}  main_container md:rounded-30px rounded-[20px] `}>
                            <div className={`${classes.single_container} max-w-[1335px] mx-auto lg:pt-[78px] md:pt-[60px] sm:pt-[50px] pt-[35px] lg:pb-[113px] mb:pb-[80px] sm:pb-[60px] pb-[50px] relative`}>
                                <div className="lg:mb-[35px] md:mb-[30px] sm:mb-[25px] mb-[20px]">
                                    <Image src={thankyou} alt='' className={`${classes.thanksyou_image} mx-auto xl:max-w-[225px] lg:max-w-[200px] md:max-w-[170px] sm:max-w-[140px] max-w-[95px] w-full`}/>
                                </div>
                                <div className="text-white font-mono text-center max-w-[1172px] mx-auto px-6 md:px-10 ">
                                    <h2 className="xl:text-55px lg:text-50px md:text-40px sm:text-[30px] text-[25px] font-semibold  lg:mb-[40px] md:mb-[30px] mb-[15px]">Thank you!</h2>
                                    <div className="">
                                        <p className=" text-[16px] sm:text-[18px] md:text-20px lg:text-25px  ">Your message has been successfully submitted.</p>
                                        <p className=' text-[16px] sm:text-[18px] md:text-20px lg:text-25px  '>Our team will review your inquiry and get back to you shortly.</p>
                                        <p className=' text-[16px] sm:text-[18px] md:text-20px lg:text-25px  '> We appreciate your patience and look forward to assisting you.</p>
                                    </div>
                                </div>
                                <div className=" max-w-max mx-auto w-max xl:mt-[90px] lg:mt-[80px] md:mt-[60px] sm:mt-[45px] mt-[30px]">
                                    <Link href={'/'}>
                                    <button className="border-b border-white text-white font-light w-max text-[14px] sm:text-[16px] lg:text-lg flex items-center gap-1" type='button' ><GoArrowLeft /> Back to homepage </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanks_you