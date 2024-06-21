import Image from "next/image";
import React from "react";
import classes from "./Services_SubServices.module.css";
import { urlFor } from "../../../../lib/sanity.client";
import { SubServices } from "../../../../lib/interface";

const Services_SubServices: React.FC<SubServices> = (props) => {
  const { heading_sub } = props;

  return (
    <>
      <div className={`${classes.GrowthMarketingServices_services} main_padding xl:mt-[170px] lg:mt-[150px] md:mt-[125px]  min-tb:max-tb:mt-[76px] sm:mt-[80px] mt-[68px]`}>
        <div className="main_padding">
                {/* <div className="max-w-[1510px] w-full mx-auto xl:pt-[114px] lg:pt-[90px] md:pt-[70px] min-tb:max-tb:pt-[48px] sm:pt-[50px] pt-[39px] xl:pb-[165px] lg:pb-[130px]  pb-[102px]  md:px-[20px] min-tb:max-tb:px-[38px] sm:px-[15px] px-5  border border-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px shadow-compo"> */}
                <div className={`${classes.service_box} max-w-[1510px] w-full mx-auto border border-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px shadow-blue-right`}>
                    {/* <h2 className='xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[30px] sm:text-30px text-[22px] font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1'>{heading_sub}</h2> */}
                    <h2 className={`${classes.service_heading} font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1`}>{heading_sub}</h2>
                    
                    {/* <div className={`${classes.services}  max-w-[1212px] mx-auto xl:mt-[123px] lg:mt-[100px] md:mt-[80px] min-tb:max-tb:mt-[70px] sm:mt-[60px] mt-[40px] grid grid-cols-3 gap-10 gap-y-[50px] md:gap-y-[114px] min-tb:max-tb:gap-y-[80px] justify-items-center`}> */}
                    <div className={`${classes.services}  max-w-[1212px] mx-auto grid grid-cols-3 gap-10 gap-y-[50px] md:gap-y-[114px] min-tb:max-tb:gap-y-[80px] justify-items-center`}>

            {props.services.map((item, index) => (
              <div  key={index} className="max-w-[270px] ">
              <div className={`${classes.top_image} h-full w-full mx-auto `}>
                  <Image src={urlFor(item.image).url()} alt='' width={250} height={250} className={` h-full w-full`} />
              </div>
              <div className="text-center">
                  {/* <h2 className='font-mono font-semibold lg:text-35px md:text-30px min-tb:max-tb:text-[26px]  sm:text-25px text-[22px] text-center text-color-1 mt-[10px] min-tb:max-tb:mt-[15px] xl:mb-[28px] lg:mb-[25px] md:mb-[20px] min-tb:max-tb:mb-[10px] sm:mb-[18px] mb-[10px]'>{item.title_sub}</h2> */}
                  <h2 className={`${classes.sub_heading} font-mono font-semibold  text-center text-color-1 `}>{item.title_sub}</h2>
                  {/* <p className={`${classes[`desc_sub${index}`]}  font-lato text-[12px] min-tb:max-tb:text-[12px]  sm:text-[16px] md:text-[18px] font-normal text-color-1`}>{item.desc_sub}</p> */}
                  <p className={`${classes[`desc_sub${index}`]} ${classes.sub_desc} font-lato  font-normal text-color-1`}>{item.desc_sub}</p>
              </div>
          </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services_SubServices;
