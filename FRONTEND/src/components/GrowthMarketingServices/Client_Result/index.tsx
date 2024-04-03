import React from 'react'
import classes from './Client_Result.module.css'
import { GoArrowRight } from "react-icons/go";
function Client_Result() {
    return (
        <>
            <div className="Client_Result mt-[170px]">
                <div className='main_container'>

                    <div className={`${classes.Client_Result} rounded-30px `}>
                        <div className={`${classes.Client_Result_title}`}>
                            <h2 className='font-mono text-35px md:text-45px font-semibold text-white text-center'>Client results</h2>
                            <p className="font-mono text-25px md:text-30px mt-6 font-medium text-color-7 text-center">10+ years of remarkable results</p>
                        </div>
                        <div className='Gross_profit_boxs grid 2xl:px-24 px-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-stretch	gap-10 2xl:gap-20'>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:p-20 p-6'>
                                <h2 className='text-55px font-semibold text-color-7'>+772% </h2>
                                <p className='text-30px text-color-7 mb-12'>gross profit</p>
                                <h3 className='text-30px text-white mb-4'>Hanson (UK)</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-4'>Best SEO Campaign finalist at the UK Digital Growth Awards</p>
                                <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
                            </div>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:p-20 p-6'>
                                <h2 className='text-55px font-semibold text-color-7'>+772% </h2>
                                <p className='text-30px text-color-7 mb-12'>gross profit</p>
                                <h3 className='text-30px text-white mb-4'>Hanson (UK)</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-4'>Best SEO Campaign finalist at the UK Digital Growth Awards</p>
                                {/* <button className="font-mono text-base px-21px h-10 bg-white text-color-1 rounded-full  hover:bg-color-1 hover:text-white hover:border-white border border-color-1 ">Schedule a call</button> */}
                                <button className='font-mono font-normal  mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
                            </div>
                            <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:p-20 p-6'>
                                <h2 className='text-55px font-semibold text-color-7'>+772% </h2>
                                <p className='text-30px text-color-7 mb-12'>gross profit</p>
                                <h3 className='text-30px text-white mb-4'>Hanson (UK)</h3>
                                <p className='font-lato text-lg font-normal  text-white mb-4'>Best SEO Campaign finalist at the UK Digital Growth Awards</p>
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