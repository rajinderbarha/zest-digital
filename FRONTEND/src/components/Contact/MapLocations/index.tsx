import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import london_map from '../../../assets/images/london.webp'
import classes from './MapLocations.module.css'
function MapLocations() {
    return (
        <>
            <div className={`${classes.MapLocations} max-w-max mb-[114px]`}>
                <div className={`${classes.location_div} rounded-[20px] md:rounded-30px `}>
                    <Image src={london_map} alt="" className='w-full h-full rounded-[20px] md:rounded-30px shadow-dark-pink-right border border-black' />
                </div>
                <div className="contact flex justify-between gap-2 mt-[20px]">
                    <div className="address ">
                        <address className='text-[13px] md:text-base font-mono text-color-1 not-italic'>
                            1-3 Kings Meadow <br /> Osney Mead <br /> Oxford <br /> OX2 0DP
                        </address>
                    </div>
                    <div className="tele  h-max">

                        <div className=" flex items-center text-color-9 font-mono ">
                            <FaPhoneAlt className='text-black w-max' />
                           <span className='text-[13px] md:text-base'> +44 (0) 1865 684 999</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapLocations