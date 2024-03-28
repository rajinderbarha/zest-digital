import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import classes from './Logo_moving.module.css'
import logo_1 from '../../assets/images/logo_1.png'
import logo_2 from '../../assets/images/logo_2.png'
import logo_3 from '../../assets/images/logo_3.png'
import logo_4 from '../../assets/images/logo_4.png'
import logo_5 from '../../assets/images/logo_5.png'

const Logo_moving = () => {
    return (
        <>
            <div className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full px-5 my-10 `}>

                <Marquee className={classes.shadow_custom}>
                    <div className="flex w-full gap-10 me-5">
                        <Image src={logo_1} alt='' />
                        <Image src={logo_2} alt='' />
                        <Image src={logo_3} alt='' />
                        <Image src={logo_4} alt='' />
                        <Image src={logo_5} alt='' />
                        <Image src={logo_1} alt='' />
                        <Image src={logo_2} alt='' />
                        <Image src={logo_3} alt='' />
                        <Image src={logo_4} alt='' />
                        <Image src={logo_5} alt='' />
                    </div>
                </Marquee>
            </div>
        </>
    )
}

export default Logo_moving