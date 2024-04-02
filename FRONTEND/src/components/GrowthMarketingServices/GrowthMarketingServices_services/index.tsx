import Image from 'next/image'
import React from 'react'
import how_to_grow from '../../../assets/images/how_to_grow.png'
import growth_seo_icon from '../../../assets/images/growth_seo_icon.png'
import Paid_media_icon from '../../../assets/images/Paid_media_icon.png'
import Social_services_icon from '../../../assets/images/Social_services_icon.png'
import Web_design_icon from '../../../assets/images/Web_design_icon.png'
import Hosting_security_icon from '../../../assets/images/Hosting_security_icon.png'
import classes from './GrowthMarketingServices_services.module.css'

function GrowthMarketingServices_services() {
    return (

        <>
            <div className="GrowthMarketingServices_services px-10 mt-[170px]">
                <div className="max-w-[1510px] mx-auto py-[80px] md:py-[114px] border border-color-1 rounded-30px">
                    <h2 className='lg:text-45px md:text-40px text-35px font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1'>Our Growth Marketing Services</h2>
                    <div className={`${classes.services} max-w-[1212px] mx-auto mt-[80px] md:mt-[123px] grid grid-cols-3 gap-10 gap-y-[114px] justify-items-center`}>
                        <div className="max-w-[250px] ">
                            <div className="max-w-[250px] w-full">
                                <Image src={how_to_grow} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>Strategy</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Our expert team will work with you to craft the optimal strategy for your business to achieve it’s growth targets</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={growth_seo_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>SEO</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Over 10 years experience dominating search with revenue generating SEO campaigns</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Paid_media_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>PPC</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Commercially aware PPC campaigns to drive targeted traffic to content that converts</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Social_services_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>Paid social</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Advanced targeting, creatives, and tracking make paid social the ideal channel to boost digital ROI</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Web_design_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>Web</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Transforming dull, poor performing websites into slick sales engines to support your growths</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Hosting_security_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>Hosting</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>Market leading hosting services to enable your website to run optimally, never missing an opportunity</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GrowthMarketingServices_services