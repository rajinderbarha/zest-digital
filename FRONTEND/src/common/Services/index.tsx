import React from 'react'
import classes from './Services.module.css'
import Image from 'next/image'
import vertical_bar from '../../assets/images/vertical_bar.png'
import Code_icon from '../../assets/images/Code_icon.png'
import target_icon from '../../assets/images/target_icon.png'
import { GoArrowRight } from "react-icons/go";
import { OurServicesSection } from '../../../lib/interface'
import Link from 'next/link'
import { urlFor } from '../../../lib/sanity.client'
const Services = ({ data }: { data: OurServicesSection[]}) => {


    return (
        <>
            {/* <div className={`${classes.bg_image} mx-auto max-w-[1720px] w-full px-5 my-10 font-mono rounded-30px`}> */}
            <div className="mx-auto max-w-[1720px] w-full px-5 my-10 md:mt-36 mt-20">
                {data?.map((item,index)=> (
                    
                    <div key={`${index}_servicesSection`} className={`${classes.bg_image} bg-black rounded-30px lg:pt-[50px] font-mono flex md:flex-row flex-col `}>
                   
                    <div className="p-10 lg:px-20 2xl:px-100px md:px-11 px-8 max-768:px-10 max-1350:px-16 lg:pb-[100px] xl:pb-[218px] md:w-[654px] w-max  pb-16">
                        <h2 className=' text-2xl md:text-3xl lg:text-[45px] text-white font-semibold mb-6'>{item.heading}</h2>
                        <div className="  flex gap-5 flex-col text-color-6">
                            {item.cards.map((cardItem,index)=>(

                           
                            <ul key={`${index}_servicesList`}>
                                <li > <Link href={`/ourservices/${cardItem.slug}`} className="border-b border-color-6 mb-7  w-max text-md lg:text-lg flex items-center gap-1">{cardItem.title}<GoArrowRight /></Link></li>
                            </ul>
                             ))}
                        </div>
                    </div>
                    <div className="flex  xl:-mt-36 lg:-mt-20 -mt-10">
                        <div className="  h-max self-end">

                            <Image src={urlFor(item.images.vertical_bar).url()} width={342} height={342} alt="" className=' ' />
                        </div>
                        <div className="   h-max self-center">

                            <Image src={urlFor(item.images.Code_icon).url()} width={342} height={342} alt="" className=' ' />
                        </div>
                        <div className="    h-max">
                            <Image src={urlFor(item.images.target_icon).url()} width={342} height={342} alt="" className='  ' />

                        </div>
                    </div>
                </div>
                 ))}
            </div>

        </>
    )
}

export default Services