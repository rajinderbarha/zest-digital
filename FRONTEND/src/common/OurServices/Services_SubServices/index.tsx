import Image from 'next/image'
import React from 'react'
import how_to_grow from '../../../assets/images/how_to_grow.png'
import growth_seo_icon from '../../../assets/images/growth_seo_icon.png'
import Paid_media_icon from '../../../assets/images/Paid_media_icon.png'
import Social_services_icon from '../../../assets/images/Social_services_icon.png'
import Web_design_icon from '../../../assets/images/Web_design_icon.png'
import Hosting_security_icon from '../../../assets/images/Hosting_security_icon.png'
import classes from './Services_SubServices.module.css'

interface GrowthMarketingServices_Banner_Props {
    image_1_title: string;
    image_2_title: string;
    image_3_title: string;
    image_4_title: string;
    image_5_title: string;
    image_6_title: string;
    image_1_desc: string;
    image_2_desc: string;
    image_3_desc: string;
    image_4_desc: string;
    image_5_desc: string;
    image_6_desc: string;
    box_title:string;
}
const Services_SubServices: React.FC<GrowthMarketingServices_Banner_Props> = (props) => {

    // function GrowthMarketingServices_services() {
    return (

        <>
            <div className="GrowthMarketingServices_services px-10 mt-[170px]">
                <div className="max-w-[1510px] mx-auto py-[80px] md:py-[114px] border border-color-1 rounded-30px">
                    <h2 className='lg:text-45px md:text-40px text-35px font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1'>{props.box_title}</h2>
                    <div className={`${classes.services} max-w-[1212px] mx-auto mt-[80px] md:mt-[123px] grid grid-cols-3 gap-10 gap-y-[50px] md:gap-y-[114px] justify-items-center`}>
                        <div className="max-w-[250px] ">
                            <div className="max-w-[250px] w-full">
                                <Image src={how_to_grow} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_1_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_1_desc}</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={growth_seo_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_2_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_2_desc}</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Paid_media_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_3_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_3_desc}</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Social_services_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_4_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_4_desc}</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Web_design_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_5_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_5_desc}</p>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="max-w-[250px] w-full">
                                <Image src={Hosting_security_icon} alt='' className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{props.image_6_title}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{props.image_6_desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services_SubServices