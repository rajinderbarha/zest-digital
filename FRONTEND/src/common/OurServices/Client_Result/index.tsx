import React from 'react'
import classes from './Client_Result.module.css'
import { GoArrowRight } from "react-icons/go";
import { SingleOurService, clientResults } from '../../../../lib/interface';


const Client_Result: React.FC<clientResults> = (props) => {
    // function Client_Result() {
    const {belowbuttonName_CR,title_CR,heading_CR,card} = props;

    return (
        <>
            <div className="Client_Result mt-[170px]">
                <div className='main_container'>

                    <div className={`${classes.Client_Result} rounded-30px `}>
                        <div className={`${classes.Client_Result_title}`}>
                            <h2 className='font-mono text-35px md:text-45px font-semibold text-white text-center'>{title_CR}</h2>       
                            <p className="font-mono text-25px md:text-30px mt-6 font-medium text-color-7 text-center">{heading_CR}</p>
                        </div>
                        <div className='Gross_profit_boxs grid 2xl:px-24 px-2 sm:px-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-stretch gap-10 2xl:gap-20'>
    {card && card.map(({ mapped_title, description_1_CR, description_2_CR, percentage_CR, buttonName_CR }, index) => (
        <div key={index} className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:py-[82px] md:px-[34px] py-[24px] px-[15px]'>
            <h2 className='text-55px font-semibold text-color-7'>{percentage_CR}</h2>
            <p className='text-30px text-color-7 mb-[35px]'>{mapped_title}</p>
            <h3 className='text-30px text-white mb-3  '>{description_1_CR}</h3>
            <p className='font-lato text-lg font-normal  text-white mb-7 max-w-[260px] mx-auto'>{description_2_CR}</p>
            <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>{buttonName_CR}<span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
        </div>
    ))}
</div>

                           
                        <div className={`${classes.view_more_btn} text-center `}>
                            <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[10px] px-7 flex gap-2 items-center'>{belowbuttonName_CR}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Client_Result
