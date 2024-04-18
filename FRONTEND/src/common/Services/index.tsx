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
const Services = ({ data }: any) => {
            console.log("services--------",data)

    return (
        <>
            <div className="main_padding">
            <div className="main_container ">
            
                    
                    <div  className={`${classes.bg_image}  xl:pt-[88px] lg:pt-[65px] md:pt-[45px] sm:pt-[30px] pt-[25px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[30px] xl:pb-[81px] lg:pb-[60px] md:pb-[40px] sm:pb-[25px] pb-[20px] bg-black rounded-[20px] md:rounded-30px font-mono flex md:flex-row flex-col `}>
                   
                    <div className="md:w-[654px] w-max  xl:pb-[218px] lg:pb-[160px] md:pb-[130px] pb-[50px]">
                        <h2 className=' xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[28px] text-white font-semibold xl:mb-[25px] lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[8px]'>{data.title}</h2>
                        <div className="  flex xl:gap-[30px] lg:gap-[20px] md:gap-[15px] sm:gap-[10px] gap-[5px] flex-col text-color-6">
                            {data.services.map((item:any,index:number)=>(

                           
                            <ul key={`${index}_servicesList`} >
                                <li > <Link href={`/services/${item.slug}`} className="border-b border-color-6  w-max text-md lg:text-lg flex items-center gap-1">{item.title}<GoArrowRight /></Link></li>
                            </ul>
                             ))}
                        </div>
                    </div>
                    <div className="md:flex hidden xl:-mt-[165px] lg:-mt-[119px] -mt-[85px]">
                        <div className="  h-max self-end">

                            <Image src={urlFor(data.image1).url()} width={342} height={342} alt="" className=' ' />
                        </div>
                        <div className="   h-max self-center">

                            <Image src={urlFor(data.image2).url()} width={342} height={342} alt="" className=' ' />
                        </div>
                        <div className="    h-max">
                            <Image src={urlFor(data.image3).url()} width={342} height={342} alt="" className='  ' />

                        </div>
                    </div>
                </div>
                
            </div>
            </div>
        </>
    )
}

export default Services