import React from 'react'
import classes from './SingleIntro.module.css'
import Increase_icon from '../../../assets/images/Increase_icon.png'
import Pound_icon from '../../../assets/images/Pound_icon.png'
import Success_trophy_icon from '../../../assets/images/Success_trophy_icon.png'
import Objective from '../singlebox/objective'
import Strategy from '../singlebox/strategy';
import Action from '../singlebox/action';
import Result from '../singlebox/result';
import Image from 'next/image';
import Climate_action from '@/common/Climate_action'
function SingleIntro() {
    return (
        <>
            <div className={`${classes.SingleIntro}  main_container  md:mt-40 mt-20 h-100 rounded-30px`}>
                <div className={`${classes.single_container}`}>

                    <div className="hidden md:flex   2xl:px-[259px] xl:px-[210px] lg:px-[180px]  px-[120px] justify-between ">

                        <div className="text-center   max-w-[389px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                <Image src={Increase_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>+83%</h2>
                            <p className='2xl:text-30px xl:text-25px lg:text-[20px]  text-[18px] font-mono font-medium text-white xl:leading-9 lg:leading-8  leading-5 mx-auto 2xl:max-w-[319px] xl:max-w-[270px] lg:max-w-[215px]  max-w-[200px]  '>Increase in enquiry clicks</p>
                        </div>

                        <div className="text-center    max-w-[263px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                <Image src={Pound_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>+772%</h2>
                            <p className='2xl:text-30px xl:text-25px  lg:text-[20px]  text-[18px] font-mono font-medium text-white xl:leading-9 lg:leading-8  leading-5 mx-auto 2xl:max-w-[389px] xl:max-w-[200px] lg:max-w-[180px]   max-w-[150px]  '>Increase in profit</p>
                        </div>

                        <div className="text-center    max-w-[300px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]   mx-auto">
                                <Image src={Success_trophy_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>1x</h2>
                            <p className='2xl:text-30px xl:text-25px  lg:text-[20px]  text-[18px] font-mono font-medium text-white xl:leading-9 lg:leading-8  leading-5 mx-auto 2xl:max-w-[244px] xl:max-w-[150px] lg:max-w-[120px]   max-w-[100px]  '>Award nomination</p>
                        </div>



                    </div>
                    <div className="mt-[150px] md:mt-[258px] mx-auto max-w-[1360px] mb-[277px]">
                        <h2 className='font-mono text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6'>“Zest are proactive, skilled, and have our commercial interests at heart. This has been reflected in their work.”</h2>
                        <div className="lg:px-52 md:px-28 px-16">

                            <p className='text-base font-mono text-color-9 mx-auto max-w-[1012px] border-t border-color-9 text-center pt-3 '>Steve Morten, Marketing Manager at Hanson (UK)</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid gap-10 md:gap-20 -mt-40">
                <Objective />
                <Strategy />
                <Action />
                <Result />
            </div>
        </>
    )
}

export default SingleIntro
