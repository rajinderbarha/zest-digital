import React from "react";
import classes from "./GrowthEnginePage_Box.module.css";
import { GoArrowRight } from "react-icons/go";
import Box_Title from "../Box_Title";
import Image from "next/image";
import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";

const GrowthEnginePage_Box = ({ data }: any) => {
  return (
    <>
      <div className={`${classes.Our_values} mt-[66px] mb-36`}>
        <div className="main_container ">
          <div className={`${classes.values_bg}`}>
            <div className="main_container_x  px-5 relative">
              <div>
                <div className="mb-[172px]">
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
                          <h3 className="font-semibold md:text-40px mb-5 font-mono text-30px text-color-7  md:w-max">
                            {item.heading}
                          </h3>
                          <p
                            className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}
                          >
                            {item.description}
                          </p>
                          <p className="text-white font-small ">{item.belowLine}</p>

                          {item.buttonLink !== null &&
                            item.buttonName !== null && (
                              <Link
                                href={item.buttonLink}
                                className="font-mono font-normal text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center mt-7"
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
                          <h3 className="font-semibold md:text-40px mb-5 ms-auto font-mono text-30px text-color-7  md:w-max">
                            {item.heading}
                          </h3>
                          <p
                            className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono md:text-30px text:25px`}
                          >
                            {item.description}
                          </p>
                          <p className="text-white font-small ">{item.belowLine}</p>

                          {item.buttonLink !== null &&
                            item.buttonName !== null && (
                              <Link
                                href={item.buttonLink}
                                className="font-mono font-normal ms-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center mt-7"
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
                <div className="mt-[100px] md:mt-[185px] md:mb-[235px] mb-[140px] relative ">
                  <Box_Title
                    upper={data.belowHeading}
                    below={data.belowSmallLine}
                  />

                  <div className="absolute right-0  md:max-w-[385px] w-full md:max-h-[385px] h-full max-w-[250px] lg:-bottom-[350px] md:-bottom-[250px]">
                    <Image
                      src={urlFor(data.image).url()}
                      width={330}
                      height={330}
                      alt="img"
                      className="w-full"
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
