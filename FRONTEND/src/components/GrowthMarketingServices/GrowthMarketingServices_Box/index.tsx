import Image from 'next/image'
import React from 'react'
import classes from './GrowthMarketingServices_Box.module.css'
import Paid_media_icon from '../../../assets/images/Paid_media_icon.png'
import growth_seo_icon from '../../../assets/images/growth_seo_icon.png'
import Social_services_icon from '../../../assets/images/Social_services_icon.png'

function GrowthMarketingServices_Box() {
    return (
        <>
            <div className={`${classes.SingleIntro}  main_container  md:mt-40 mt-20 h-100 rounded-30px`}>
                <div className={`${classes.single_container}`}>

                    <div className="hidden md:flex   2xl:px-[259px] xl:px-[210px] lg:px-[180px]  px-[120px] justify-between ">

                        <div className="text-center   max-w-[389px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                <Image src={Paid_media_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>PPC</h2></div>

                        <div className="text-center    max-w-[263px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]    mx-auto">
                                <Image src={growth_seo_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>SEO & Web</h2>
                        </div>

                        <div className="text-center    max-w-[300px]">
                            <div className="2xl:max-w-[250px] xl:max-w-[240px] lg:max-w-[200px]  max-w-[150px]   mx-auto">
                                <Image src={Social_services_icon} alt="" />
                            </div>
                            <h2 className='2xl:text-45px xl:text-40px lg:text-35px  text-30px text-color-7 font-mono font-semibold'>Social</h2>
                        </div>



                    </div>
                    <div className="mt-[150px] md:mt-[258px] mx-auto max-w-[1208px] mb-[35px]">
                        <h2 className='font-mono font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-20  pb-6'>Oxford’s Leading Growth Marketing Agency that <span className='text-color-9'> generates predictable revenue growth</span></h2>
                    </div>
                    <div className="max-w-[1428px] font-normal mx-auto mb-[80px] md:mb-[170px] md:px-12 px-4 md:text-30px text-25px font-mono text-white text-center">
                        <p className='mb-16'>Having spent 10+ years developing growth marketing strategies for our clients, we know what it takes to get it right. We speak to hundreds of business owners who don’t know what they’re spending on marketing each month, but more worryingly, they have no idea what their marketing generates for them (or not), making them powerless to make change for the better.
                        </p>
                        <p>Wouldn’t you prefer ROI be the focal point of all your marketing?
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GrowthMarketingServices_Box