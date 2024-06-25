import React from "react";
import classes from "../About_banner.module.css";
import Marquee from "react-fast-marquee";
import { AboutType } from "../../../../lib/interface";
import Link from "next/link";
function Escape({ data }: { data: AboutType[] }) {

  return (
    <div className="Escape_main main_padding xl:mt-[152px] lg:mt-[120px] md:mt-[95px] sm:mt-[70px] mt-[55px] xl:mb-[122px] lg:mb-[100px] md:mb-[80px] sm:mb-[60px] mb-[50px]" data-aos="fade-up">
      {data?.map((Escapedata, index) => (
        <div className="main_container" key={`${index}_Escape`} >

          <Link href={Escapedata.escape.careerPagelink}>
          <div className={`${classes.Escape} main_padding rounded-[15px] md:rounded-[20px] lg:rounded-[30px] xl:py-[130px] lg:my-[100px] md:py-[80px] min-tb:max-tb:pt-[70px] min-tb:max-tb:pb-[106px] sm:py-[60px] py-[40px]`}>
            <div className={`${classes.Escape_box}`}>
            {/* <h2 className="xl:text-55px  lg:text-50px md:text-40px min-tb:max-tb:text-[30px] sm:text-25px text-[22px] md:mb-12 mb-[24px] min-tb:max-tb:mb-[40px]  font-mono text-center  font-semibold text-white"> */}
            <h2 className={`${classes.escape_heading} md:mb-12 mb-[24px] min-tb:max-tb:mb-[40px]  font-mono text-center  font-semibold text-white`} data-aos="fade-out" data-aos-delay="100">
              {Escapedata.escape.heading}
            </h2>
            <p
              // className={`${classes.Escape_p} mx-auto lg:text-35px md:text-30px min-tb:max-tb:text-[16px] min-tb:max-tb:leading-[20px] min-tb:max-tb:mb-[65px] sm:text-[20px] text-[14px] font-mono text-white text-center xl:mb-[114px] lg:mb-[95px] md:mb-[80px] sm:mb-[70px] mb-[60px] font-semibold`}
              className={`${classes.Escape_p} mx-auto  font-mono text-white text-center  font-semibold`} data-aos="fade-out" data-aos-delay="100"
            >
              {Escapedata.escape.description}
            </p>
            <div className={`${classes.Marquee_border}   border-color-3 md:py-16 sm:py-[40px] py-[30px]  relative `} data-aos="fade-in" data-aos-delay="100">
              <div className={`${classes.custom_shadow}`}></div>
              <Marquee className={` md:gap-16 sm:gap-[50px] gap-[40px]`}>
                <div className="flex text-white   max-w-auto md:gap-16 sm:gap-[50px] gap-[40px] me-5">
                  {Escapedata.escape.marquee.map((marqueData, path) => (
                    <div
                      key={`${path}_marqueeData`}
                      className="maving_box md:max-w-[400px] min-tb:max-tb:max-w-[276px] max-w-[250px] text-center"
                    >
                      {/* <h2 className="xl:text-40px lg:text-35px md:text-30px min-tb:max-tb:text-[20px] min-tb:max-tb:leading-[27px] sm:text-25px text-[16px] text-color-7 font-semibold font-mono lg:mb-[30px] md:mb-[25px] mb-[20px]"> */}
                      <h2 className={`${classes.marque_title}  text-color-7 font-semibold font-mono lg:mb-[30px] md:mb-[25px] mb-[20px]`}>
                        {marqueData.title}
                      </h2>
                      <p className="md:text-lg sm:text-base min-tb:max-tb:text-[12px] min-tb:max-tb:leading-[18px] text-[12px] font-normal font-mono">
                        {marqueData.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
            </div>
          </div>
</Link>

        </div>
      ))}
    </div>
  );
}

export default Escape;
