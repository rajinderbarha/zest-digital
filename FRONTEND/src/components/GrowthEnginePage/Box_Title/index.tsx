import React from "react";
// import { GrowthTrackerType } from "../../../../lib/interface";
import classes from './Box_Title.module.css';
interface BoxTitleProps {
  upper: string;
  below: string;
}

const Box_Title = ({ upper,below }: BoxTitleProps) => {
  return (
    <div className="mx-auto max-w-[1027px]" data-aos="fade-up">
      {/* <h2 className="font-mono font-semibold italic text-[18px] min-tb:max-tb:text-[26px] min-tb:max-tb:leading-[34px] sm:text-30px md:text-35px sm:leading-[40px] lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center sm:px-[40px] min-tb:max-tb:pb-[15px] pb-[24px]"> */}
      <h2 className={`${classes.upper_heading} font-mono font-semibold italic text-[18px] min-tb:max-tb:text-[26px] min-tb:max-tb:leading-[34px] sm:text-[30px] md:text-[35px] sm:leading-[40px] lg:leading-normal lg:text-[40px] xl:text-[45px] text-white mx-auto text-center sm:px-[40px] min-tb:max-tb:pb-[15px] pb-[24px]`} >
        {upper}
      </h2>
      <div className="sm:px-16 px-[20px]">
        <p className="sm:text-[16px] min-tb:max-tb:text-[12px] min-tb:max-tb:pt-[7px] text-[10px] font-mono text-color-9 mx-auto border-t border-color-9 text-center pt-[12px]" >
        {/* <p className={`${classes.below_heading} sm:text-[16px] min-tb:max-tb:text-[12px] min-tb:max-tb:pt-[7px] text-[10px] font-mono text-color-9 mx-auto border-t border-color-9 text-center pt-[12px]`}> */}
          {below}
        </p>
      </div>
    </div>
  );
};

export default Box_Title;
