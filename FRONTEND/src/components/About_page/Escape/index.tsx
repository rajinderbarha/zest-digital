import React from "react";
import classes from "../About_banner.module.css";
import Marquee from "react-fast-marquee";
import { AboutType } from "../../../../lib/interface";
import Link from "next/link";
function Escape({ data }: { data: AboutType[] }) {

  return (
    <div className="Escape_main main_padding xl:mt-[152px] lg:mt-[120px] md:mt-[95px] sm:mt-[70px] mt-[55px] xl:mb-[122px] lg:mb-[100px] md:mb-[80px] sm:mb-[60px] mb-[50px]">
      {data?.map((Escapedata, index) => (
        <div className="main_container" key={`${index}_Escape`}>

          <Link href={Escapedata.escape.careerPagelink}>
          <div className={`${classes.Escape} rounded-[20px] md:rounded-[30px] xl:py-[130px] lg:my-[100px] md:py-[80px] sm:py-[60px] py-[40px] px-4`}>
            <h2 className="xl:text-55px lg:text-50px md:text-40px sm:text-35px text-30px md:mb-12 mb-6 font-mono text-center  font-semibold text-white">
              {Escapedata.escape.heading}
            </h2>
            <p
              className={`${classes.Escape_p} mx-auto lg:text-35px md:text-30px sm:text-[25px] text-[20px] font-mono text-white text-center xl:mb-[114px] lg:mb-[95px] md:mb-[80px] sm:mb-[70px] mb-[60px] font-semibold`}
            >
              {Escapedata.escape.description}
            </p>
            <div className={`${classes.Marquee_border}  border-color-3 md:py-16 sm:py-[40px] py-[30px] -mx-[16px] relative `}>
              <div className={`${classes.custom_shadow}`}></div>
              <Marquee className={` md:gap-16 sm:gap-[50px] gap-[40px]`}>
                <div className="flex text-white   max-w-auto md:gap-16 sm:gap-[50px] gap-[40px] me-5">
                  {Escapedata.escape.marquee.map((marqueData, path) => (
                    <div
                      key={`${path}_marqueeData`}
                      className="maving_box md:max-w-[400px] max-w-[250px] text-center"
                    >
                      <h2 className="xl:text-40px lg:text-35px md:text-30px sm:text-25px text-[20px] text-color-7 font-semibold font-mono lg:mb-[30px] md:mb-[25px] mb-[20px]">
                        {marqueData.title}
                      </h2>
                      <p className="md:text-lg sm:text-base text-[15px] font-normal font-mono">
                        {marqueData.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
</Link>

        </div>
      ))}
    </div>
  );
}

export default Escape;
