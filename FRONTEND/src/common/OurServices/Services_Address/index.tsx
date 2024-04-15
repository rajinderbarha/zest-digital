import React from 'react'
import classes from './Services_Address.module.css'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';
import london from '../../../assets/images/london.webp'
import { FaPhoneAlt } from "react-icons/fa";
import { AgencyAddress } from '../../../../lib/interface';
// interface GrowthMarketingServices_Banner_Props {
//     title: string;
// }
const Services_Address: React.FC<AgencyAddress> = (props) => {
    const {heading_add,slotDescription_add,buttonName_add,} = props


    return (
        <>
            <div className="GrowthMarketingServices_Address mb-[100px] md:mb-[200px]">

                <div className="main_container">
                    <div className={`${classes.bg_image} rounded-30px py-[80px] md:py-[160px] px-[20px] md:px-[70px] grid md:grid-cols-2 md:gap-y-0 gap-y-12 md:gap-x-10`}>
                        <div className="col-span-1">
                            <h2 className="font-mono text-35px md:45px xl:text-55px font-semibold text-color-9 text-center ">{heading_add}</h2>
                            <h2 className="font-mono md:text-30px text-25px font-semibold text-white text-center mt-[40px] md:mt-[60px] mb-[20px] md:mb-[25px] max-w-[566px] mx-auto">{slotDescription_add}</h2>
                            <div className="bokk_now_btn">
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>{buttonName_add}<span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>

                            </div>


                                {props.address.map(({title_add,streetAddress_add,hourstitle_add,dayandtiming_add},index)=>(
                            <div key={index}>

                                    <div className="address mt-[80px] md:mt-[110px] mb-[40px] text-center">
                                    <h2 className='font-mono text-25px md:text-30px font-normal text-white mb-[10px] md:mb-[20px]'>{title_add}</h2>
                                    <address className='not-italic text-base md:text-lg font-lato text-white'>
                                      {streetAddress_add}
                                    </address>
                                </div>
                                <div className="hours text-center">
                                    <h2 className="font-mono text-25px md:text-30px font-normal mb-[10px] md:mb-[20px] text-white">{hourstitle_add}</h2>
                                    <p className="text-base md:text-lg font-lato text-white">{dayandtiming_add}</p>
                                </div>
                            </div>
                        ))}


                        </div>

                        <div className="col-span-1">
                            <div className="max-w-[738px] w-full">
                                <Image src={london} alt="" className='max-w-[738px] w-full rounded-30px shadow-compo shadow-[#e43fa8]' />

                                <div className=" flex items-center justify-end text-color-9 mt-[10px] md:mt-[25px]">
                                    <FaPhoneAlt className='text-white' />
                                    +44 (0) 1865 684 999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services_Address