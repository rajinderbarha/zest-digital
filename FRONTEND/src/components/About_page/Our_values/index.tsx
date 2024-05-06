import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function Our_values({ data }: { data: AboutType[] }) {
  return (
    <div className={`${classes.Our_values} main_padding`}>
      <div className="main_container">
        <div className={`${classes.values_bg} rounded-[20px] md:rounded-[30px] main_padding`}>
          {data?.map((ourvalue, index) => (
             <div
             className="main_container_x "
             key={`${index}_Our_values_1`}
           >
             <h2 className="md:text-55px text-35px font-mono text-center md:mb-20 mb-8 font-semibold text-white">
               {ourvalue.ourValue.heading}
             </h2>
              {ourvalue.ourValue.ourValuesection.map((valSection, path) => (
                <div className="Our_values_boxs " key={`${path}_path_left`}>
                  {(path + 1) % 2 !== 0 ? (
                    <div className="Our_values_main">
                    <Image
                      className=" xl:max-w-[250px] xl:h-[250px]  lg:max-w-[210px] lg:h-[210px] md:max-w-[170px] md:h-[170px] sm:max-w-[130px] sm:h-[130px] max-w-[90px] h-[90px] w-full "
                      src={urlFor(valSection.image).url()}
                      width={250}
                      height={250}
                      alt=""
                      
                    />
                    <h3 className="font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[25px] mb-5 font-mono  text-color-7 border-b border-color-7 sm:pr-[63px] w-fit md:w-max">
                      {valSection.title}
                    </h3>
                    <p
                      className={`${classes.Our_values_main_p}  text-white font-medium  font-mono lg:text-30px md:text-25px sm:text-[20px] text-[19px]`}
                    >
                      {valSection.description}
                    </p>
                  </div>
                  ) : (
                    <div className={`${classes.Our_values_main_2} text-end `} key={`${path}_path_right`}>
                      <Image
                        className="xl:max-w-[250px] xl:h-[250px] lg:max-w-[210px] lg:h-[210px] md:max-w-[170px] md:h-[170px] sm:max-w-[130px] sm:h-[130px] max-w-[90px] h-[90px] w-full ms-auto xl:mb-[30px] lg:mb-[25px] md:mb-[18px] sm:mb-[10px] mb-[5px]"
                        src={urlFor(valSection.image).url()}
                        width={250}
                        height={250}
                        alt=""
                      />
                      <h3 className="font-semibold mb-5 xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[25px] ms-auto font-mono  text-color-7 border-b border-color-7 sm:ps-[63px] w-fit md:w-max">
                        {valSection.title}
                      </h3>
                      <p
                        className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono lg:text-30px md:text-25px sm:text-[20px] text-[19px]`}
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
  );
}

export default Our_values;
