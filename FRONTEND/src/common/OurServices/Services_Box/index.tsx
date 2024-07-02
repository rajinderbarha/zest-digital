import Image from "next/image";
import React from "react";
import classes from "./Services_Box.module.css";
import { urlFor } from "../../../../lib/sanity.client";

const Services_Box = (props: any) => {
  const {
    Services_Box: {
      contentBox: { heading, coloredText, description, belowdesc },
      imageBox,
    },
  } = props;

  return <div className="main_padding">
    {/* <div className={`${classes.SingleIntro} bg-color-1 main_container xl:mt-[200px] lg:mt-[180px] md:mt-[150px] sm:mt-[140px]  min-tb:max-tb:mt-[160px] h-100 lg:rounded-30px md:rounded-[20px] rounded-[15px]`}> */}
    <div className={`${classes.SingleIntro} bg-color-1 main_container  h-100 lg:rounded-30px md:rounded-[20px] rounded-[15px]`} data-aos="fade-up">

      <div className={`${classes.single_container}`}>

        <div className="  md:flex justify-evenly">

          {imageBox?.map((item: any, index: any) => (
            <div className="text-center mx-auto md:mb-0 mb-[47px] md:max-w-[513px]  md:w-full " key={index} data-aos="fade-up">
              <div className={`${classes.top_image}  h-full w-full  mx-auto`}>
                <Image src={urlFor(item.image).url()} width={250} height={250} alt="" className='h-full w-full' />
              </div>
              {/* <h2 className="xl:text-45px text-[20px] mt-2 sm:mt-0 lg:text-[38px] md:text-30px  min-tb:max-tb:text-[20px] text-color-7 font-mono font-semibold">{item.imagetitle}</h2> */}
              <h2 className={`${classes.image_title}  text-color-7 font-mono font-semibold`}>{item.imagetitle}</h2>
            </div>
          ))}
        </div>
        {/* <div className="xl:mt-[321px] lg:mt-[280px] md:mt-[200px]  min-tb:max-tb:mt-[138px] sm:mt-[45px] mt-[25px] mx-auto xl:max-w-[1116px] lg:max-w-[1002px] md:max-w-[906px] xl:mb-[80px] lg:mb-[65px] md:mb-[60px]  min-tb:max-tb:mb-[30px] sm:mb-[50px] mb-[45px]"> */}
        <div className={`${classes.text_div} mx-auto xl:max-w-[1116px] lg:max-w-[1002px] md:max-w-[906px] `} data-aos="fade-up">
          {/* <h2 className='font-mono sm:px-[50px]  min-tb:max-tb:px-[40px] px-4 font-semibold xl:text-45px lg:text-40px md:text-35px  min-tb:max-tb:text-[26px]  min-tb:max-tb:leading-[34px] text-[18px] text-white mx-auto text-center '>{heading} <span className='text-color-9'> {coloredText}</span></h2> */}
          <h2 className={`${classes.box_heading} font-mono font-semibold  min-tb:max-tb:leading-[34px] text-white mx-auto text-center `}>{heading} <span className='text-color-9'> {coloredText}</span></h2>
        </div>
        {/* <div className="max-w-[1428px] font-normal mx-auto mb-[55px] sm:mb-[65px] md:mb-[170px]  min-tb:max-tb:mb-[85px] md:px-12  min-tb:max-tb:px-[40px] px-4 lg:text-30px md:text-25px  min-tb:max-tb:text-[16px]  min-tb:max-tb:leading-[20px] text-[12px] font-mono text-white text-center"> */}
        <div className={`${classes.below_text_div} max-w-[1428px] font-normal mx-auto min-tb:max-tb:leading-[20px] font-mono text-white text-center`} data-aos="fade-up">
          {/* <p className='xl:mb-[65px] lg:mb-[50px] md:mb-[40px]  min-tb:max-tb:mb-[20px] sm:mb-[25px] mb-[15px]'>{description}</p> */}
          <p className={`${classes.below_text}  `}>{description}</p>
          <p>{belowdesc}</p>
        </div>
      </div>

    </div>
  </div>
};

export default Services_Box;
