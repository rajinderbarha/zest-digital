import React from "react";
import classes from "./GrowthEnginePage_Banner.module.css";
// import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";

const GrowthEnginePage_Banner = ({ data }: any) => {

  return (
    <>
      <div className={`${classes.Singalcasebanner} main_padding  xl:mt-[143px] lg:mt-[110px] md:mt-[80px] min-tb:max-tb:mt-[55px] min-tb:max-tb:mb-[65px] sm:mt-[50px] mt-[40px]`}>
        <div className="main_container">
          <div className="grid  max-w-[992px]">
            <div className="">
              <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-[28px] min-tb:max-tb:text-[26px]  text-[22px] font-semibold font-mono bg-light-green-1 w-max px-2 lg:mb-[36px] md:mb-[20px] min-tb:max-tb:mb-[20px]  sm:mb-[10px] mb-[7px]">
                {data.heading}
              </h2>
              <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-30px min-tb:max-tb:text-[30px] min-tb:max-tb:mb-[25px] text-[22px] mb-5 ">
                {data.description}
              </h1>
              <Link
                href={data.buttonLink}><button 
                className="font-mono sm:text-[16px] min-tb:max-tb:text-[16px]  text-[12px]  px-21px py-[10px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 "
              >
                {data.buttonName}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthEnginePage_Banner;
