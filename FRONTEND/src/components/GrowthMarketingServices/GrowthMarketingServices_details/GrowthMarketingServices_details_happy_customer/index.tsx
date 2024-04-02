import Image from 'next/image'
import React from 'react'
import Heart_icon from '../../../../assets/images/Heart_icon.png'
import classes from '../GrowthMarketingServices_details.module.css'
function GrowthMarketingServices_details_happy_customer() {
    return (
        <>
            <div className={`${classes.objective} main_container`}>

                <div className={`flex items-center flex-col md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}>
                    <div className=" md:max-w-[1057px] md:pe-[100px]">
                        <h2 className='text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono '>Join <span className='text-color-9'>350+ </span>Happy Customers</h2>
                        <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                            <p>For over 10 years our expert team have delivered remarkable results for our clients. Whether your business has a marketing team, or is earlier in the marketing journey, we have products to suit those who would just like to increase activity, and for those looking to hit specific growth targets.</p>
                            <p className='mt-1 md:mt-3 lg:mt-12'> We’re incredibly proud to boast our client retention rate currently sits at 95%.</p>
                        </div>
                    </div>
                    <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]">
                        <Image src={Heart_icon} alt="" className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_details_happy_customer