import classes from "./GrowthEnginePage_Box.module.css";
import { GoArrowRight } from "react-icons/go";
import Box_Title from "../Box_Title";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";

const GrowthEnginePage_Box = ({ data }: any) => {

  return <div className={` mt-[66px] sm-max:mt-[58px] md:mb-36 2xl:mb-[200px] sm:mb-[130px] mb-[100px] min-tb:max-tb:mb-[161px] main_padding`} >
    <div className="main_container overflow-x-clip">
      <div className={`${classes.growth_box} lg:rounded-30px md:rounded-[20px] rounded-[15px]   main_padding`} data-aos="fade-up">
        <div className={`${classes.growth_box_content} max-w-[1520px] mx-auto  relative`}>
          <div>
            <div className="md:mb-[172px] mb-[87px] sm:mb-[87px] min-tb:max-tb:mb-[93px]">
              <Box_Title
                upper={data.upperHeading}
                below={data.upperSmallLine}
              />
            </div>
            <div className="Our_values_boxs ">
              {data.growthContent.map((item: any, index: number) => (
                <div key={`${index}_GrowthEnginePage_Box_nested_1`}>
                  {index % 2 === 0 ? (
                    <div className={`${classes.growth_box_text_content} ${classes.growth_box_text_content_left} Our_values_main  md:max-w-[830px] md:pe-16`} data-aos="fade-right">
                      <h3 className={`${classes.growth_box_heading} font-semibold  font-mono text-color-7  md:w-max`}>
                        {item.heading}
                      </h3>
                      <p
                        className={`${classes.Our_values_main_p}  text-white font-medium  font-mono `}
                      >
                        {item.description}
                      </p>
                      <p className={`${classes.blew_line} font-mono `}>{item.belowLine}</p>

                      {item.buttonLink !== null &&
                        item.buttonName !== null && (
                          <Link
                            href={item.buttonLink}><button
                              className={`${classes.box_btn} arrowbtn_hover font-mono font-normal group hover:bg-color-1 border border-white hover:text-white text-color-1 rounded-full bg-white flex gap-[8px] items-center  w-max`}
                            >
                              {item.buttonName}{" "}
                              <span className="p-1 text-white rounded-full bg-black me-1 text-lg group-hover:bg-white group-hover:text-color-1">
                                <GoArrowRight />
                              </span></button>
                          </Link>
                        )}
                    </div>
                  ) : (
                    <div
                      className={`${classes.growth_box_text_content_right}  ${item.buttonLink === null && item.buttonName === null && (`${classes.right_content_without_button}`)} ${classes.growth_box_text_content} ms-auto text-end md:max-w-[830px] md:ps-16 my-[80px] sm:my-11`}
                      data-aos="fade-left" >
                      <h3 className={`${classes.growth_box_heading} font-semibold ms-auto font-mono  text-color-7  md:w-max`}>
                        {item.heading}
                      </h3>
                      <p
                        className={`${classes.Our_values_main_p} ms-auto  text-white font-medium  font-mono `}
                      >
                        {item.description}
                      </p>
                      <p className={`${classes.blew_line} ms-auto font-mono`}>{item.belowLine}</p>

                      {item.buttonLink !== null &&
                        item.buttonName !== null && (
                          <Link
                            href={item.buttonLink}><button
                              className={`${classes.box_btn} arrowbtn_hover font-mono font-normal group ms-auto hover:bg-color-1 border border-white hover:text-white text-color-1 rounded-full bg-white  flex gap-[8px] items-center  w-max`}
                            >
                              {item.buttonName}{" "}
                              <span className="p-1 text-white rounded-full bg-color-1 me-1 text-lg group-hover:bg-white group-hover:text-color-1">
                                <GoArrowRight />
                              </span></button>
                          </Link>
                        )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={`${classes.below_box_heading} ${data.growthContent.buttonLink === null && data.growthContent.buttonName === null && (`${classes.below_heading_without_button}`)} sm:mt-[86px] mt-[105px] md:mt-[185px]  relative `}>
              <Box_Title
                upper={data.belowHeading}
                below={data.belowSmallLine}
              />

              <div className={`${classes.growth_box_image} absolute  flex  right-0   w-full  mt-[38px]`}>
                <Image
                  src={urlFor(data.image).url()}
                  width={330}
                  height={330}
                  alt="img"
                  className={` w-full `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

};

export default GrowthEnginePage_Box;
