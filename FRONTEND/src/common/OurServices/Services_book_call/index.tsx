import React from "react";
import classes from "./Services_book_call.module.css";
import { Services_book_cal } from "../../../../lib/interface";
import Link from "next/link";

const Services_book_call: React.FC<Services_book_cal> = (props) => {
  const { heading, buttonName, buttonLink } = props;
  
  return <div className="GrowthMarketingServices_book_call xl:mt-[170px] lg:mt-[150px] md:mt-[125px] min-tb:max-tb:mt-[143px] sm:mt-[80px] mt-[68px] main_padding" data-aos="fade-up">

    <div className={`${classes.container_bg} main_container rounded-[15px] md:rounded-[20px] lg:rounded-30px bg-color-1`}>
      {/* <div className="max-w-[1584px] mx-auto xl:py-[121px] lg:py-[100px] md:py-[75px] min-tb:max-tb:pt-[60px] min-tb:max-tb:pb-[76px] sm:py-[40px] py-[30px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[70px] "> */}
      <div className={`${classes.bookcall_box} max-w-[1584px] mx-auto  `}>
        {/* <h2 className={` text-white text-center font-mono lg:text-45px md:text-40px min-tb:max-tb:text-[30px] min-tb:max-tb:leading-[39px] sm:text-30px text-[22px] font-semibold`}>{heading}</h2> */}
        <h2 className={`${classes.bookcall_heading} text-white text-center font-mono  font-semibold`}>{heading}</h2>
        {/* <div className=" mx-auto text-center xl:mt-[40px] lg:mt-[30px] md:mt-[25px] min-tb:max-tb:mt-[35px] sm:mt-[20px] mt-[15px]"> */}
        <div className={`${classes.btn_div} mx-auto text-center`}>
          <Link href={buttonLink}>
            <button className='bg-white text-[12px] sm:text-base font-mono  text-color-1 rounded-full px-[26px] sm:py-[8px] py-[7px] text-center border border-white hover:bg-color-1 hover:text-white' > {buttonName}</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
};

export default Services_book_call;
