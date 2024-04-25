import React from "react";
import classes from "./Client_Result.module.css";
import { GoArrowRight } from "react-icons/go";
import { clientResults } from "../../../../lib/interface";

const Client_Result: React.FC<clientResults> = (props) => {
  const { belowbuttonName_CR, title_CR, heading_CR, card } = props;

  return (
    <>
      <div className="Client_Result main_padding xl:mt-[180px] lg:mt-[160px] md:mt-[135px] sm:mt-[90px] mt-[78px] xl:mb-[212px] lg:mb-[190px] md:mb-[160px] sm:mb-[110px] mb-[80px]" >
                <div className='main_container'>

                    <div className={`${classes.Client_Result} `}>
                        <div className={`${classes.Client_Result_title} `}>
                            <h2 className='font-mono xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[25px] font-semibold text-white text-center'>{title_CR}</h2>
                            <p className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] md:mt-6 sm:mt-[10px] mt-[5px] font-medium text-color-7 text-center">{heading_CR}</p>
                        </div>
                        <div className='Gross_profit_boxs grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-stretch gap-10 2xl:gap-20'>
                           {card &&
                card?.map(
                  (
                    {
                      mapped_title,
                      description_1_CR,
                      description_2_CR,
                      percentage_CR,
                      buttonName_CR,
                    },
                    index
                  ) => (
                    <div key={index} className='flex flex-col Gross_profit_box_start text-center border bg-black rounded-[20px] md:rounded-30px   font-mono border-color-8 xl:py-[82px] lg:py-[60px]  sm:py-[25px] py-[18px] xl:px-[65px] lg:px-[45px] md:px-[35px] sm:px-[25px] px-[18px]'>
                    <h2 className='xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[30px] font-semibold text-color-7'>{percentage_CR}</h2>
                    <p className='lg:text-30px md:text-25px sm:text-[20px] text-[18px] text-color-7 font-semibold xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]'>{mapped_title}</p>
                    <h3 className='lg:text-30px md:text-25px sm:text-[20px] text-[18px] text-white lg:mb-[11px] md:mb-[7px] sm:mb-[5px] mb-[3px] '>{description_1_CR}</h3>
                    <p className='font-lato text-base sm:text-lg font-normal  text-white xl:mb-[30px] lg:mb-[25px] sm:mb-[20px]  mb-[15px] text-center'>{description_2_CR}</p>
                    <div className={classes.button_div}>

                    <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[15px] sm:text-base md:py-[3px] sm:py-[2px] py-[1px] md:ps-4 sm:ps-[15px] ps-[13px] flex sm:gap-2 gap-[6px] items-center'>{buttonName_CR}<span className='p-1 text-white rounded-full bg-black me-[2px] sm:me-[3px] md:me-1 text-[15px] sm:text-lg'><GoArrowRight /></span></button>
                    </div>
                </div>
                  )
                )}
            </div>
            <div className={`${classes.view_more_btn} text-center xl:mt-[137px] lg:mt-[115px] md:mt-[85px] sm:mt-[60px] mt-[40px]`}>
                            <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[15px] sm:text-base py-[5px] sm:py-[8px] md:py-[10px] px-7 flex gap-2 items-center'>{belowbuttonName_CR}</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Client_Result;
