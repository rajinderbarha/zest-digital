import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import classes from './Logo_moving.module.css'
import maxipos_logo from '../../assets/images/maxipos_logo.png'
import polythene_logo from '../../assets/images/polythene_logo.png'
import hanson_logo from '../../assets/images/hanson_logo.png'
import tpa_logo from '../../assets/images/tpa_logo.png'
import adlens_logo from '../../assets/images/adlens_logo.png';

import Line_border from '../../assets/images/Gradients_box_companies.png'

const Logo_moving = () => {
    return (
        <>
            <div className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full  my-10  `}>
                <div className='relative py-16 border-t border-b border-color-3'>

                    <div className={`${classes.shadow_custom} `}></div>

                    {/* <Image src={Line_border} alt="" /> */}
                    <Marquee className={`gap-16 `} >
                        <div className="flex  max-w-auto gap-16 me-5">
                            <Image src={maxipos_logo} alt='' />
                            <Image src={polythene_logo} alt='' />
                            <Image src={hanson_logo} alt='' />
                            <Image src={tpa_logo} alt='' />
                            <Image src={adlens_logo} alt='' />
                            <Image src={maxipos_logo} alt='' />
                            <Image src={polythene_logo} alt='' />
                            <Image src={hanson_logo} alt='' />
                            <Image src={tpa_logo} alt='' />
                            <Image src={adlens_logo} alt='' />
                        </div>
                    </Marquee>
                </div>

            </div >
        </>
    )
}

export default Logo_moving