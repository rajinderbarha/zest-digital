import React from 'react'
import classes from './Client_Result.module.css'
import { GoArrowRight } from "react-icons/go";
interface GrowthMarketingServices_Banner_Props {
    card_1_percentage: string;
    card_1_title: string;
    card_1_desc_1: string;
    card_1_desc_2: string;

    card_2_percentage: string;
    card_2_title: string;
    card_2_desc_1: string;
    card_2_desc_2: string;

    card_3_percentage: string;
    card_3_title: string;
    card_3_desc_1: string;
    card_3_desc_2: string;

}
const Client_Result: React.FC<GrowthMarketingServices_Banner_Props> = (props) => {
    // function Client_Result() {
    return (
        <>
            <div className="Client_Result mt-[170px]">
                <div className='main_container'>

                    <div className={`${classes.Client_Result} rounded-30px `}>
                        <div className={`${classes.Client_Result_title}`}>
                            <h2 className='font-mono text-35px md:text-45px font-semibold text-white text-center'>Client results</h2>
                            <p className="font-mono text-25px md:text-30px mt-6 font-medium text-color-7 text-center">10+ years of remarkable results</p>
                        </div>
                        <div className='Gross_profit_boxs grid 2xl:px-24 px-2 sm:px-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-stretch	gap-10 2xl:gap-20'>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:py-[82px] md:px-[34px] py-[24px] px-[15px]'>
                                <h2 className='text-55px font-semibold text-color-7'>{props.card_1_percentage}</h2>
                                <p className='text-30px text-color-7 mb-[35px]'>{props.card_1_title}</p>
                                <h3 className='text-30px text-white mb-3  '>{props.card_1_desc_1}</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-7 max-w-[260px] mx-auto'>{props.card_1_desc_2}</p>
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
                            </div>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:py-[82px] md:px-[34px] py-[24px] px-[15px]'>
                                <h2 className='text-55px font-semibold text-color-7'>{props.card_2_percentage}</h2>
                                <p className='text-30px text-color-7 mb-[35px]'>{props.card_2_title}</p>
                                <h3 className='text-30px text-white mb-3'>{props.card_2_desc_1}</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-7 max-w-[260px] mx-auto'>{props.card_2_desc_2}</p>
                                {/* <button className="font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                                <button className='font-mono font-normal  mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
                            </div>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:py-[82px] md:px-[34px] py-[24px] px-[15px]'>
                                <h2 className='text-55px font-semibold text-color-7'>{props.card_3_percentage}</h2>
                                <p className='text-30px text-color-7 mb-[35px]'>{props.card_3_title}</p>
                                <h3 className='text-30px text-white mb-3'>{props.card_3_desc_1}</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-7 max-w-[260px] mx-auto'>{props.card_3_desc_2}</p>
                                {/* <button className="font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
                            </div>
                        </div>
                        <div className={`${classes.view_more_btn} text-center `}>
                            <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[10px] px-7 flex gap-2 items-center'>View more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client_Result