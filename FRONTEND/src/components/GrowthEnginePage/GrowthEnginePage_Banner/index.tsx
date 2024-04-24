import React from "react";
import classes from "./GrowthEnginePage_Banner.module.css";
// import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";

const GrowthEnginePage_Banner = ({ data }: any) => {

  return (
    <>
      <div className={`${classes.Singalcasebanner} main_padding xl:mt-[143px] lg:mt-[110px] md:mt-[80px] sm:mt-[50px] mt-[30px]`}>
        <div className="main_container">
          <div className="grid  max-w-[992px]">
            <div className="">
              <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[22px] font-semibold font-mono bg-color-7 w-max px-2 lg:mb-[36px] md:mb-[20px] sm:mb-[10px] mb-[7px]">
                {data.heading}
              </h2>
              <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-30px text-[25px] mb-5 ">
                {data.description}
              </h1>
              <Link
                href={data.buttonLink}
                className="font-mono text-base px-21px py-[5px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 "
              >
                {data.buttonName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthEnginePage_Banner;
