import Image from 'next/image'
import React from 'react'
import how_to_grow from '../../../assets/images/how_to_grow.png'
import growth_seo_icon from '../../../assets/images/growth_seo_icon.png'
import Paid_media_icon from '../../../assets/images/Paid_media_icon.png'
import Social_services_icon from '../../../assets/images/Social_services_icon.png'
import Web_design_icon from '../../../assets/images/Web_design_icon.png'
import Hosting_security_icon from '../../../assets/images/Hosting_security_icon.png'
import classes from './Services_SubServices.module.css'
import { urlFor } from '../../../../lib/sanity.client'
import { SubServices, SingleOurService } from '../../../../lib/interface'


const Services_SubServices: React.FC<SubServices> = (props) => {

    const {heading_sub,} = props;

    // function GrowthMarketingServices_services() {
    return (

        <>
            <div className="GrowthMarketingServices_services px-10 mt-[170px]">
                <div className="max-w-[1510px] mx-auto py-[80px] md:py-[114px] border border-color-1 rounded-30px shadow-compo">
                    <h2 className='lg:text-45px md:text-40px text-35px font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1'>{heading_sub}</h2>
                    
                    <div className={`${classes.services}  max-w-[1212px] mx-auto mt-[80px] md:mt-[123px] grid grid-cols-3 gap-10 gap-y-[50px] md:gap-y-[114px] justify-items-center`}>

                    {props.services.map((item,index)=>(
                           <div  key={index} className="max-w-[250px] ">
                            <div className="max-w-[250px] w-full">
                                <Image src={urlFor(item.image).url()} alt='' width={280} height={280} className='w-full' />
                            </div>
                            <div className="text-center">
                                <h2 className='font-mono text-35px text-center text-color-1 mt-[10px] mb-[18px]'>{item.title_sub}</h2>
                                <p className='font-lato text-lg font-normal text-color-1'>{item.desc_sub}</p>
                            </div>
                        </div>
                       
                  
                        ))} 
                          </div>
                </div>

            </div>
        </>
    )
}

export default Services_SubServices