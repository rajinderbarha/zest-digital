import React from "react";
import classes from "./GrowthEnginePage_Box.module.css";
import { GoArrowRight } from "react-icons/go";
import Box_Title from "../Box_Title";
import Image from "next/image";
// import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";

const GrowthEnginePage_Box = ({ data }: any) => {
  return (
    <>
      <div className={` mt-[66px] mb-36 main_padding`}>
        <div className="main_container ">
          <div className={`${classes.growth_box} md:rounded-30px rounded-[20px]  xl:pt-[85px] lg:pt-[80px] md:pt-[65px] sm:pt-[50px] pt-[30px] pb-[1px]`}>
            <div className="max-w-[1520px] mx-auto  px-5 relative">
              <div>
                <div className="md:mb-[172px] mb-[100px]">
                  <Box_Title
                    upper={data.upperHeading}
                    below={data.upperSmallLine}
                  />
                </div>
                <div className="Our_values_boxs ">
                  {data.growthContent.map((item: any, index: number) => (
                    <div key={`${index}_GrowthEnginePage_Box_nested_1`}>
                      {index % 2 === 0 ? (
                        <div className="Our_values_main  md:max-w-[830px] md:pe-16">
                          <h3 className="font-semibold xl:text-40px lg:text-[36px] md:text-[32px] text-[28px] lg:mb-[30px] md:mb-[15px] mb-[8px] font-mono text-color-7  md:w-max">
                            {item.heading}
                          </h3>
                          <p
                            className={`${classes.Our_values_main_p}  text-white font-medium  font-mono lg:text-30px md:text-25px text-[20px]`}
                          >
                            {item.description}
                          </p>
                          <p className="text-[#d3d3d3] md:text-base text-sm md:mt-[16px] mt-[10px]">{item.belowLine}</p>

                          {item.buttonLink !== null &&
                            item.buttonName !== null && (
                              <Link
                                href={item.buttonLink}
                                className="font-mono font-normal text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center md:mt-[25px] mt-[18px] w-max"
                              >
                                {item.buttonName}{" "}
                                <span className="p-1 text-white rounded-full bg-black me-1 text-lg">
                                  <GoArrowRight />
                                </span>
                              </Link>
                            )}
                        </div>
                      ) : (
                        <div
                          className={`${classes.Our_values_main_2} ms-auto text-end md:max-w-[830px] md:ps-16 my-11`}
                        >
                          <h3 className="font-semibold ms-auto font-mono  xl:text-40px lg:text-[36px] md:text-[32px] text-[28px] lg:mb-[30px] md:mb-[15px] mb-[8px] text-color-7  md:w-max">
                            {item.heading}
                          </h3>
                          <p
                            className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono lg:text-30px md:text-25px text-[20px]`}
                          >
                            {item.description}
                          </p>
                          <p className="text-[#d3d3d3] md:text-base text-sm md:mt-[16px] mt-[10px]">{item.belowLine}</p>

                          {item.buttonLink !== null &&
                            item.buttonName !== null && (
                              <Link
                                href={item.buttonLink}
                                className="font-mono font-normal ms-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center md:mt-[25px] mt-[18px] w-max"
                              >
                                {item.buttonName}{" "}
                                <span className="p-1 text-white rounded-full bg-black me-1 text-lg">
                                  <GoArrowRight />
                                </span>
                              </Link>
                            )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className=" mt-[100px] md:mt-[185px] lg:mb-[320px] md:mb-[280px] mb-[215px] relative ">
                  <Box_Title
                    upper={data.belowHeading}
                    below={data.belowSmallLine}
                  />

                  <div className="absolute  flex h-max right-0  lg:max-w-[385px] md:max-w-[325px] max-w-[250px]  w-full  mt-[38px]">
                    <Image
                      src={urlFor(data.image).url()}
                      width={330}
                      height={330}
                      alt="img"
                      className="w-full "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthEnginePage_Box;
