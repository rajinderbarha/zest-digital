import React, { useEffect } from "react";
import classes from "./GrowthEnginePage_Banner.module.css";
// import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";
import AOS from 'aos'
import 'aos/dist/aos.css';

const GrowthEnginePage_Banner = ({ data }: any) => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* <div className={`${classes.GrowthEnginePage_Banne} main_padding  xl:mt-[143px] lg:mt-[110px] md:mt-[80px] min-tb:max-tb:mt-[55px] min-tb:max-tb:mb-[65px] sm:mt-[50px] mt-[40px]`}> */}
      <div className={`${classes.GrowthEnginePage_Banner} main_padding  `} data-aos="fade-up">
        <div className="main_container">
          <div className={`${classes.banner_container} grid  `}>
            <div className="">
              {/* <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-[28px] min-tb:max-tb:text-[26px]  text-[22px] font-semibold font-mono bg-light-green-1 w-max px-2 lg:mb-[36px] md:mb-[20px] min-tb:max-tb:mb-[20px]  sm:mb-[10px] mb-[7px]"> */}
              <h2 className={`${classes.banner_heading} font-semibold font-mono bg-light-green-1 w-max `}>
                {data.heading}
              </h2>
              {/* <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-30px min-tb:max-tb:text-[30px] min-tb:max-tb:leading-[45px] min-tb:max-tb:mb-[25px] text-[22px] mb-5 "> */}
              <h1 className={`${classes.banner_description} font-mono font-semibold `}>
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
