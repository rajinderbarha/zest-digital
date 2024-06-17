import React from "react";
import classes from "./ScheduleCall.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import { Schedule_a_call } from "../../../lib/interface";

function ScheduleCall({ data }: { data: Schedule_a_call }) {
  return (
    <>
      <div className="ScheduleCall main_padding xl:mb-[132px] lg:mb-[110px] md:mb-[80px] sm:mb-[60px] mb-[50px]">
        <div className="main_container">
          <h2 className="font-mono xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-semibold mt-[32px]">
            {data.heading}
          </h2>
          <p className="font-mono text-[12px] min-tb:max-tb:text-[12px] md:text-base font-normal md:mt-[14px] sm:mt-[10px] mt-[7px]">
            {data.description}
          </p>
          <div
            className={`${classes.bg_image} flex items-center max-tb:flex-col md:flex-row rounded-[15px] md:rounded-[20px] lg:rounded-30px px-[40px] md:px-[94px] xl:py-[160px] lg:py-[130px] md:py-[100px] min-tb:max-tb:pt-[75px] min-tb:max-tb:mt-[32px] sm:py-[55px] py-[53px] pb-[114px] mt-[44px] `}
          >
            <div className={`profile max-w-[307px] text-center`}>
              <div className="">
                <Image
                  src={urlFor(data.image).url()}
                  width={160}
                  height={160}
                  alt=""
                  className=" mx-auto xl:max-w-[160px] lg:max-w-[140px] md:max-w-[130px] max-w-[100px] w-full"
                />
              </div>
              <p className="font-mono lg:text-30px md:text-25px min-tb:max-tb:text-[20px] text-[18px] mt-2 md:mt-0 min-tb:max-tb:mt-[17px] text-color-7 font-semibold sm:max-w-max max-w-[204px]">
                {data.subheading}
              </p>
            </div>
            <div
              className={`calender w-full  max-h-[560px] max-w-[560px] bg-white max-tb:mt-[100px] md:mt-0 xl:ml-[179px] lg:ml-[145px] md:ml-[100px] max-tb:ml-0`}
            >
              <div className="w-full h-[560px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScheduleCall;
