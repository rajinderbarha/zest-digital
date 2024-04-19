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
            <div className="GrowthMarketingServices_Address main_padding xl:mb-[200px] lg:mb-[160px] md:mb-[120px] sm:mb-[100px] mb-[80px]">

                <div className="main_container">
                    <div className={`${classes.bg_image} rounded-[20px] md:rounded-30px xl:py-[160px] lg:py-[130px] md:py-[100px] sm:py-[70px] py-[50px] xl:px-[77px] lg:px-[60px] md:px-[45px] sm:px-[35px] px-[25px]  grid md:grid-cols-2 md:gap-y-0 gap-y-12 md:gap-x-10`}>
                        <div className="col-span-1 sm:max-w-[558px] max-w-[250px]  mx-auto">
                            <h2 className="font-mono xl:text-55px lg:text-50px md:text-40px sm:text-30px text-25px font-semibold text-color-9 text-center ">{heading_add}</h2>
                            <h2 className="font-mono lg:text-35px md:text-[33px] sm:text-[22px] text-[18px] font-semibold text-white text-center xl:mt-[60px] lg:mt-[45px] md:mt-[35px] sm:mt-[25px] mt-[20px] lg:mb-[26px] md:mb-[20px] sm:mb-[15px] mb-[10px]  max-w-[566px] mx-auto">{slotDescription_add}</h2>
                            <div className="bokk_now_btn">
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[15px] md:text-base py-[1px] sm:py-[2px] md:py-[3px] md:ps-5 sm:ps-[15px] ps-[10px] flex md:gap-2 sm:gap-[6px] gap-[4px] items-center'>{buttonName_add}<span className='p-1 text-white rounded-full bg-black md:me-1 sm:me-[3px] me-[1px] text-[15px] sm:text-[17px] md:text-lg'><GoArrowRight /></span></button>

                            </div>


                                {props.address.map(({title_add,streetAddress_add,hourstitle_add,dayandtiming_add},index)=>(
                            <div key={index}>

                                    <div className="address xl:mt-[110px] lg:mt-[90px] md:mt-[60px] mt-[50px] lg:mb-[40px] md:mb-[30px] sm:mb-[25px] mb-[20px]  text-center">
                                    <h2 className='font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal text-white  lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[7px]'>{title_add}</h2>
                                    <address className='not-italic text-[15px] md:text-base lg:text-lg font-lato text-white max-w-[125px] mx-auto'>
                                      {streetAddress_add}
                                    </address>
                                </div>
                                <div className="hours text-center">
                                    <h2 className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[7px] text-white">{hourstitle_add}</h2> 
                                    <p className="text-[15px] md:text-base lg:text-lg font-lato text-white max-w-[161px] mx-auto">{dayandtiming_add}</p>
                                </div>
                            </div>
                        ))}
                        
                        </div>

                        <div className="col-span-1">
                            <div className="max-w-[738px] w-full">
                                <Image src={london} alt="" className='max-w-[738px] w-full rounded-30px shadow-dark-pink-right' />

                                <div className=" flex items-center justify-end text-color-9 mt-[10px] md:mt-[25px] gap-[2px]">
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