import React from "react";
import classes from "../instrumental.module.css";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";
import { Gross_profitType } from "../../../../../lib/interface";

function Instrumental({ data, dynamicClass }: { data: Gross_profitType, dynamicClass?: string }) {

  // console.log("gggggggg", dynamicClass);


  return (
    // xl:mt-[112px] lg:mt-[90px] md:mt-[60px] sm:mt-[40px] mt-[30px] xl:mb-[271px] lg:mb-[220px] md:mb-[170px] sm:mb-[120px] mb-[70px]
    <div className={`${classes.Instrumental} main_padding `}>
      <div className="max-w-[1520px] mx-auto w-full">
        <div className={`${dynamicClass !== "special-instrumental" && `grid min-tb:max-tb:gap-10 min-tb:grid-cols-12`}   items-center`}>
          <div className={`${classes.grid_image_div} ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" && `min-tb:col-span-4 min-tb:order-1 order-2`} ${dynamicClass === "conversations" && `${classes.conversations_img} md:col-span-6 md:order-1 order-2`} ${dynamicClass === "project-window" && `${classes.project_window} md:col-span-6 md:order-2 order-2`} sm:mt-[30px] mt-[25px] `}>
            {/* <div className={`${classes.image_div} hidden md:block relative`}>

              <Image
                className="md:ms-auto mx-auto box-border text-center"
                src={urlFor(data.hero.image).url()}
                alt="casestudy img"
                layout="fill"
                objectFit="contain"
              />
            </div> */}

            {dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" &&
              <>
                {/* -----------desktop view------------- */}

                <div className="hidden min-tb:block">
                  <Image
                    // className={`md:ms-auto mx-auto xl:max-w-[350px] h-max lg:max-w-[280px] md:max-w-[200px] min-tb:max-tb:max-w-[170px] box-border text-center`}
                    className={`${classes.left_img} md:ms-auto mx-auto xl:max-w-[350px] h-max lg:max-w-[280px] md:max-w-[200px] min-tb:max-tb:max-w-[170px] box-border text-center`}
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    width={350}
                    height={350}
                  />

                </div>

                {/* -----------desktop view------------- */}
                {/* -----------mobile view------------- */}
                <div className="block  min-tb:hidden md:max-w-[350px] max-w-[170px]  sm:h-[360px] h-[200px] box-border  mx-auto relative">

                  <Image
                    className="md:ms-auto mx-auto xl:max-w-[350px] h-max lg:max-w-[280px] md:max-w-[200px] box-border text-center"
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {/* -----------mobile view------------- */}
              </>
            }


            {dynamicClass === "conversations" &&

              <>
                {/* -----------desktop view------------- */}

                <div className="hidden md:block">
                  <Image
                    // className="md:ms-auto mx-auto xl:max-w-[685px] xl:h-[350px] lg:max-w-[500px] lg:h-[255px] md:max-w-[400px] md:h-[204px] box-border text-center"
                    className={`${classes.conversations_img} md:ms-auto mx-auto xl:max-w-[685px] xl:h-[350px] lg:max-w-[500px] lg:h-[255px] md:max-w-[400px] md:h-[204px] box-border text-center`}
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    width={685}
                    height={350}
                  />

                </div>

                {/* -----------desktop view------------- */}
                {/* -----------mobile view------------- */}
                <div className="block  md:hidden  box-border  mx-auto relative">

                  <Image
                    className="md:ms-auto mx-auto sm:max-w-[400px] sm:h-[204px] box-border text-center"
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    width={685}
                    height={350}
                  />
                </div>
                {/* -----------mobile view------------- */}
              </>
            }


{dynamicClass === "project-window" &&

              <>
                {/* -----------desktop view------------- */}

                <div className="hidden md:block">
                  <Image
                    // className="md:ms-auto mx-auto xl:max-w-[685px] xl:h-[540px] lg:max-w-[500px] lg:h-[394px] md:max-w-[514px] md:h-[404px] w-full box-border text-center"
                    className={`${classes.project_window_img} md:ms-auto mx-auto xl:max-w-[685px] xl:h-[540px] lg:max-w-[500px] lg:h-[394px] md:max-w-[514px] md:h-[404px] w-full box-border text-center`}
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    width={685}
                    height={540}
                  />

                </div>

                {/* -----------desktop view------------- */}
                {/* -----------mobile view------------- */}
                <div className="block  md:hidden  box-border  mx-auto relative">

                  <Image
                    className="md:ms-auto mx-auto sm:max-w-[400px] sm:h-[315px] box-border text-center"
                    src={urlFor(data.image).url()}
                    alt="casestudy img"
                    width={685}
                    height={540}
                  />
                </div>
                {/* -----------mobile view------------- */}
              </>
            }



            {/* <h3 className="font-mono text-color-1 font-semibold lg:text-30px md:text-25px sm:text-[18px] min-tb:max-tb:text-[16px] min-tb:max-tb:leading-[20px] text-[14px] md:max-w-[373px] max-w-[221px] text-center mx-auto md: mt-4"> */}
            <h3 className={`${classes.image_desc} font-mono text-color-1 font-semibold lg:text-30px md:text-25px sm:text-[18px] min-tb:max-tb:text-[16px] min-tb:max-tb:leading-[20px] text-[14px] md:max-w-[373px] max-w-[221px] text-center mx-auto md: mt-[16px]`}>
              {data.imageDesc ? data.imageDesc : ""}
            </h3>
          </div>
          <div className={` ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" && `min-tb:col-span-8 ms-auto lg:ps-[50px] md:ps-[30px] max-w-[891px] order-1 min-tb:order-2`}  ${dynamicClass === "conversations" && `${classes.conversations_text} md:col-span-6 ms-auto lg:ps-[50px] md:ps-[30px] max-w-[891px] order-1 md:order-2`}  ${dynamicClass === "project-window" && `${classes.project_window} md:col-span-6 ms-auto lg:pe-[50px] md:pe-[30px] max-w-[891px] order-1 md:order-1`} md:mt-0  `}>
            {/* <h2 className={`font-mono italic font-semibold text-color-1 xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] min-tb:max-tb:leading-[34px] sm:text-[23px] text-[18px] md:mb-[20px] sm:mb-[15px] mb-[10px] ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && `w-max-[909px]`}   ${dynamicClass === "conversations" || dynamicClass === "project-window" && `w-max-[819px]`}`}> */}
            <h2 className={`${classes.text_heading} font-mono italic font-semibold text-color-1 xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] min-tb:max-tb:leading-[34px] sm:text-[23px] text-[18px] md:mb-[20px] sm:mb-[15px] mb-[10px] ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && `w-max-[909px]`}   ${dynamicClass === "conversations" || dynamicClass === "project-window" && `w-max-[819px]`}`}>
              {data.heading}
            </h2>
            {/* <p className="text-color-9 pt-2 border-t md:text-[15px] sm:text-[12px] min-tb:max-tb:text-[12px] text-[10px] sm:text-base border-color-9"> */}
            <p className={`${classes.below_line} text-color-9 pt-[8px] border-t md:text-[15px] sm:text-[12px] min-tb:max-tb:text-[12px] text-[10px] sm:text-base border-color-9`}>
              {data.belowLine}
            </p>
          </div>

          {dynamicClass === "special-instrumental" &&

            <div className={`${classes.instrumental_img} md:mt-[24px] mt-[32px]`}>
              <Image
                className={`${classes.special_instrumental_img} md:ms-auto xl:max-w-[860px] xl:h-[460px] lg:max-w-[650px] lg:h-[347px] md:max-w-[560px]  md:h-[300px] sm:max-w-[525px] sm:h-[281px] box-border text-center`}
                src={urlFor(data.image).url()}
                alt="casestudy img"
                width={860}
                height={460}
              />

            </div>
          }

        </div>
      </div>
    </div>
  );
}

export default Instrumental;

