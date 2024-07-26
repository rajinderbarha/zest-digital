import classes from "../instrumental.module.css";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";
import { Gross_profitType } from "../../../../../lib/interface";

function Instrumental({ data, dynamicClass }: { data: Gross_profitType, dynamicClass?: string }) {

  return <div className={`${classes.Instrumental} main_padding overflow-x-hidden`}>
    <div className="max-w-[1520px] mx-auto w-full">
      <div className={`${dynamicClass !== "special-instrumental" && `grid sm:gap-10 sm:grid-cols-12`}   items-center`}>
        <div className={`${classes.grid_image_div} ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" && `sm:col-span-4 sm:order-1 order-2`} ${dynamicClass === "conversations" && `${classes.conversations_img} md:col-span-6 md:order-1 order-2`} ${dynamicClass === "project-window" && `${classes.project_window} md:col-span-6 md:order-2 order-2`} sm:mt-[30px] mt-[25px] `} data-aos={`${dynamicClass === "project-window" ? "fade-left" : "fade-right"}`}>


          {dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" &&
            <>
              {/* -----------desktop view------------- */}

              <div className="hidden sm:block"  >
                <Image
                  className={`${classes.left_img} box-border text-center`}
                  src={urlFor(data.image).url()}
                  alt="casestudy img"
                  width={350}
                  height={350}
                />

              </div>

              {/* -----------desktop view------------- */}
              {/* -----------mobile view------------- */}
              <div className="block  sm:hidden  max-w-[170px]   h-[200px] box-border  mx-auto relative">

                <Image
                  className="md:ms-auto mx-auto h-max box-border text-center"
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

              <div className="hidden md:block"  >
                <Image
                  className={`${classes.conversations_section_img}  box-border text-center`}
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

              <div className="hidden md:block"  >
                <Image
                  className={`${classes.project_window_img} w-full box-border text-center`}
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



          <h3 className={`${classes.image_desc} font-mono text-color-1 sm:font-semibold font-bold text-center mx-auto `} >
            {data.imageDesc ? data.imageDesc : ""}
          </h3>
        </div>
        <div className={` ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && dynamicClass !== "project-window" && `sm:col-span-8 ms-auto lg:ps-[50px] md:ps-[30px] max-w-[891px] order-1 sm:order-2`}  ${dynamicClass === "conversations" && `${classes.conversations_text} md:col-span-6 ms-auto lg:ps-[50px] md:ps-[30px] max-w-[891px] order-1 md:order-2`}  ${dynamicClass === "project-window" && `${classes.project_window} md:col-span-6 ms-auto lg:pe-[50px] md:pe-[30px] max-w-[891px] order-1 md:order-1`} md:mt-0  `} data-aos={`${dynamicClass !== "project-window" && dynamicClass !== "special-instrumental" ? "fade-left" : "fade-right"}`}>
          <h2 className={`${classes.text_heading} font-mono italic font-semibold text-color-1  ${dynamicClass !== "special-instrumental" && dynamicClass !== "conversations" && `w-max-[909px]`}   ${dynamicClass === "conversations" || dynamicClass === "project-window" && `w-max-[819px]`}`}>
            {data.heading}
          </h2>
          <p className={`${classes.below_line} text-color-9 border-t  border-color-9`}>
            {data.belowLine}
          </p>
        </div>

        {dynamicClass === "special-instrumental" &&

          <div className={`${classes.instrumental_img} md:mt-[24px] mt-[32px]`} data-aos="fade-left">
            <Image
              className={`${classes.special_instrumental_img}  md:ms-auto  box-border text-center`}
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

}

export default Instrumental;

