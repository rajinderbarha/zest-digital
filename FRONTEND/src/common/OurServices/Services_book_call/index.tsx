import React from 'react'
import classes from './Services_book_call.module.css'
import { Services_book_cal, SingleOurService } from '../../../../lib/interface';

interface Services_book_call_Banner_Props {
    heading: string;
}

const Services_book_call: React.FC<Services_book_cal> = (props) => {
// function GrowthMarketingServices_book_call() {
    const {heading,buttonName} = props
    return (
        <>
            <div className="GrowthMarketingServices_book_call mt-[170px]">

                <div className={`${classes.container_bg} main_container rounded-30px`}>
                    <div className="max-w-[1584px] mx-auto md:py-[80px] py-[50px] lg:py-[121px] px-[40px] md:px-[50px] lg:px-[70px] ">
                        <h2 className='text-white text-center font-mono lg:text-45px md:text-40px text-30px font-semibold'>{heading}</h2>
                        <div className=" mx-auto text-center mt-[30px]">
                            <button className='bg-white text-base font-mono  text-color-1 rounded-full px-[26px] py-[8px]  text-center' > {buttonName}</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services_book_call