import React from "react";
import classes from "./Services_book_call.module.css";
import { Services_book_cal } from "../../../../lib/interface";

const Services_book_call: React.FC<Services_book_cal> = (props) => {
  const { heading, buttonName } = props;
  return (
    <>
    <div className="GrowthMarketingServices_book_call xl:mt-[170px] lg:mt-[150px] md:mt-[125px] sm:mt-[80px] mt-[68px] main_padding">

    <div className={`${classes.container_bg} main_container rounded-[20px] md:rounded-30px bg-color-1`}>
        <div className="max-w-[1584px] mx-auto xl:py-[121px] lg:py-[100px] md:py-[75px] sm:py-[40px] py-[30px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[70px] ">
            <h2 className='text-white text-center font-mono lg:text-45px md:text-40px sm:text-30px text-25px font-semibold'>{heading}</h2>
            <div className=" mx-auto text-center xl:mt-[40px] lg:mt-[30px] md:mt-[25px] sm:mt-[20px] mt-[15px]">
                <button className='bg-white text-[15px] sm:text-base font-mono  text-color-1 rounded-full px-[26px] sm:py-[8px] py-[5px] text-center border border-white hover:bg-color-1 hover:text-white' > {buttonName}</button>

            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default Services_book_call;
