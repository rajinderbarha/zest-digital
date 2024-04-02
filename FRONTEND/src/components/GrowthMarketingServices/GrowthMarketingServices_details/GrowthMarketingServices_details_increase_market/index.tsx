import React from 'react'
import classes from '../GrowthMarketingServices_details.module.css'
import Image from 'next/image'
import People_icon from '../../../../assets/images/People_icon.png'
function GrowthMarketingServices_details_increase_market() {
    return (
        <>
            <div className={`${classes.objective} main_container`}>

                <div className={`flex items-center flex-col md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" md:max-w-[1057px] md:pe-[100px]">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>Increase <span className='text-color-9'>350+ </span> Market Share</h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>In todays world, in almost every industry, there are customers searching online looking to make enquiries, and purchases. The businesses that rank best for the keywords being searched to generate those sales, are in the best position to gain the market share available online.</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> Don’t let it be your competitors making the gains.</p>
                        </div>
                    </div>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]">
                        <Image src={People_icon} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_details_increase_market