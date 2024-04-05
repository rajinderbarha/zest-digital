import React from "react";
import classes from "./GrowthEnginePage_Box.module.css";
import { GoArrowRight } from "react-icons/go";
import Box_Title from "../Box_Title";
import Image from "next/image";
import { GrowthTrackerType } from "../../../../lib/interface";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";


const GrowthEnginePage_Box = ({ data }: { data: GrowthTrackerType[] }) => {

  // let imageClass: string = "";
  // if (props.page_name === "GrowthEnginePage" || props.page_name === "GrowthTracker") {
  //     imageClass = "absolute right-0  md:max-w-[385px] w-full md:max-h-[385px] h-full max-w-[250px] lg:-bottom-[350px] md:-bottom-[250px]"
  // }
  // if (props.page_name === "GrowthMapper") {
  //     imageClass = "absolute right-0 md:max-w-max max-w-[350px]"
  // }
  // if (props.page_name === "GrowthCurve") {
  //     imageClass = "absolute right-0 md:max-w-[385px] w-full md:max-h-[385px] h-full  lg:-bottom-[440px] md:-bottom-[340px] -bottom-[270px] max-w-[250px] max-h-[250px]"
  // }

  return (
    <>
      <div className={`${classes.Our_values} mt-[66px] mb-36`}>
        <div className="main_container ">
          <div className={`${classes.values_bg}`}>
            {data?.map(({ growthTracker }, index) => (
              <div
                className="main_container_x  px-5 relative"
                key={`${index}_GrowthEnginePage_Box`}
              >
                <div key={`${index}_GrowthEnginePage_Box_nested`}>
                  <div className="mb-[172px]">
                    <Box_Title data={data} section="upper" />
                  </div>
                  <div className="Our_values_boxs ">
                    {growthTracker.growthSection.growthContent.map(
                      (item, index) => (
                        <div   key={`${index}_GrowthEnginePage_Box_nested_1`}>
                          {(index + 1) % 2 !== 0 ? (
                            <div className="Our_values_main  md:max-w-[830px] md:pe-16">
                              <h3 className="font-semibold md:text-40px mb-5 font-mono text-30px text-color-7  md:w-max">
                                {item.title}
                              </h3>
                              <p
                                className={`${classes.Our_values_main_p}  text-white font-medium  font-mono md:text-30px text:25px`}
                              >
                                {item.description}
                              </p>
                              {/* {props.has_note && <p className='text-color-10 font-mono mt-4'>{props.note1}</p>}
                     {props.has_buttons && */}
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
                              {/* } */}
                            </div>
                          ) : (
                            <div
                              className={`${classes.Our_values_main_2} ms-auto text-end md:max-w-[830px] md:ps-16 my-11`}
                            >
                              <h3 className="font-semibold md:text-40px mb-5 ms-auto font-mono text-30px text-color-7  md:w-max">
                                {item.title}
                              </h3>
                              <p
                                className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono md:text-30px text:25px`}
                              >
                                {item.description}
                              </p>
                              {/* {props.has_buttons && */}
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

                              {/* } */}
                            </div>
                          )}
                        </div>
                      )
                    )}
                  </div>
                  <div className="mt-[100px] md:mt-[185px] md:mb-[235px] mb-[140px] relative ">
                    <Box_Title data={data} section="below" />

                    <div className="absolute right-0  md:max-w-[385px] w-full md:max-h-[385px] h-full max-w-[250px] lg:-bottom-[350px] md:-bottom-[250px]">
                      <Image
                        src={urlFor(growthTracker.growthSection.image).url()}
                        width={330}
                        height={330}
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthEnginePage_Box;
