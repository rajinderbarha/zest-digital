import React from 'react'
import classes from './GrowthMarketingServices_book_call.module.css'

interface GrowthMarketingServices_Banner_Props {
    title: string;
}
const GrowthMarketingServices_book_call: React.FC<GrowthMarketingServices_Banner_Props> = (props) => {
// function GrowthMarketingServices_book_call() {
    return (
        <>
            <div className="GrowthMarketingServices_book_call mt-[170px]">

                <div className={`${classes.container_bg} main_container rounded-30px`}>
                    <div className="max-w-[1584px] mx-auto md:py-[80px] py-[50px] lg:py-[121px] px-[40px] md:px-[50px] lg:px-[70px] ">
                        <h2 className='text-white text-center font-mono lg:text-45px md:text-40px text-30px font-semibold'>{props.title}</h2>
                        <div className=" mx-auto text-center mt-[30px]">
                            <button className='bg-white text-base font-mono  text-color-1 rounded-full px-[26px] py-[8px]  text-center' > book a call</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GrowthMarketingServices_book_call