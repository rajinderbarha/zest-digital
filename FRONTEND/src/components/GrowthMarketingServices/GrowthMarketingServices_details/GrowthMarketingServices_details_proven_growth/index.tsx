import React from 'react'
import classes from '../GrowthMarketingServices_details.module.css'
import Image from 'next/image'
import growth_framework_img from '../../../../assets/images/growth_framework_img.png'
function GrowthMarketingServices_details_proven_growth() {
    return (
        <>
            <div className={`${classes.objective} main_container`}>

                <div className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]  md:ps-[100px]">
                        <Image src={growth_framework_img} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>
                    <div className=" ms-auto md:max-w-[1057px] md:ps-[80px] text-right">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '> <span className='text-color-9'>Proven</span>Growth Frameworks </h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>We believe that successful marketing is the cumulative progress achieved from running a series of tests to find the winning combination. A goal (such as revenue growth) must be converted into a defined objective, and larger objectives broken down into micro-goals; manageable key actions and results (KAR) measured against clear KPIs that take you closer towards success.</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> Objective(s), Strategy, Key Actions & Results. Otherwise known as OSKAR.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_details_proven_growth