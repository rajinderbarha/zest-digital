import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function Our_values({ data }: { data: AboutType[] }) {

  return <div className={`${classes.Our_values} main_padding `}>
    <div className="main_container overflow-x-hidden">
      <div className={`${classes.values_bg} rounded-[15px] md:rounded-[20px] lg:rounded-[30px] main_padding `} data-aos="fade-up">
        {data?.map((ourvalue, index) => (
          <div
            className={`${classes.our_values_box} main_container_x `}
            key={`${index}_Our_values_1`}
          >
            {/* <h2 className="md:text-55px sm:text-30px  min-tb:max-tb:text-30px text-[22px] font-mono text-center md:mb-20 mb-8 font-semibold text-white"> */}
            <h2 className={`${classes.ourValue_heading} font-mono text-center  font-semibold text-white`}>
              {ourvalue.ourValue.heading}
            </h2>
            {ourvalue.ourValue.ourValuesection.map((valSection, path) => (
              <div className="Our_values_boxs " key={`${path}_path_left`}>
                {(path + 1) % 2 !== 0 ? (
                  <div className="Our_values_main" data-aos="fade-right">
                    <Image
                      // className={`${classes.Our_values_img} xl:max-w-[250px] xl:h-[250px]  lg:max-w-[210px] lg:h-[210px] md:max-w-[170px] md:h-[170px]  min-tb:max-tb:max-w-[130px] min-tb:max-tb:h-[130px] sm:max-w-[130px] sm:h-[130px] max-w-[90px] h-[90px] w-full `}
                      className={`${classes.Our_values_img} `}
                      src={urlFor(valSection.image).url()}
                      width={250}
                      height={250}
                      alt=""

                    />
                    <h3 className="font-semibold xl:text-45px lg:text-40px md:text-35px  min-tb:max-tb:text-[20px] sm:text-25px text-[16px] md:mb-5  mb-[5px] font-mono  text-color-7 border-b border-color-7 sm:pr-[63px] w-fit md:w-max pr-[35px]">
                      {valSection.title}
                    </h3>
                    <p
                      className={`${classes.Our_values_main_p}  text-white font-medium  font-mono lg:text-30px md:text-25px sm:text-[18px] min-tb:max-tb:text-[16px] text-[12px]`}
                    >
                      {valSection.description}
                    </p>
                  </div>
                ) : (
                  <div className={`${classes.Our_values_main_2} text-end `} key={`${path}_path_right`} data-aos="fade-left">
                    <Image
                      className={`${classes.Our_values_img}  w-full ms-auto xl:mb-[30px] lg:mb-[25px] md:mb-[18px] sm:mb-[10px] mb-[5px] `}
                      src={urlFor(valSection.image).url()}
                      width={250}
                      height={250}
                      alt=""
                    />
                    {/* <h3 className="font-semibold  xl:text-45px lg:text-40px md:text-35px sm:text-25px min-tb:max-tb:text-[20px] text-[16px] md:mb-5  mb-[5px] ms-auto font-mono  text-color-7 border-b border-color-7 sm:ps-[63px] w-fit md:w-max ps-[35px]"> */}
                    <h3 className={`${classes.text_title} font-semibold   md:mb-5  mb-[5px] ms-auto font-mono  text-color-7 border-b border-color-7 sm:ps-[63px] w-fit md:w-max ps-[35px]`}>
                      {valSection.title}
                    </h3>
                    <p
                      // className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono lg:text-30px md:text-25px sm:text-[18px] min-tb:max-tb:text-[16px] text-[12px]`}
                      className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono `}
                    >
                      {valSection.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default Our_values;
