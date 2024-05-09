import Image from "next/image";
import React from "react";
import classes from "./Services_SubServices.module.css";
import { urlFor } from "../../../../lib/sanity.client";
import { SubServices } from "../../../../lib/interface";

const Services_SubServices: React.FC<SubServices> = (props) => {
  const { heading_sub } = props;

  return (
    <>
      <div className="GrowthMarketingServices_services main_padding xl:mt-[170px] lg:mt-[150px] md:mt-[125px] sm:mt-[80px] mt-[68px]">
        <div className="main_padding">
                <div className="max-w-[1510px] w-full mx-auto xl:pt-[114px] lg:pt-[90px] md:pt-[70px] sm:pt-[50px] pt-[30px] xl:pb-[165px] lg:pb-[130px] md:pb-[100px] sm:pb-[80px] pb-[50px]  md:px-[20px] sm:px-[15px] px-[8px]  border border-color-1 rounded-[20px]  md:rounded-30px shadow-compo">
                    <h2 className='xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[25px] font-mono font-semibold max-w-[783px] mx-auto text-center text-color-1'>{heading_sub}</h2>
                    
                    <div className={`${classes.services}  max-w-[1212px] mx-auto xl:mt-[123px] lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[40px] grid grid-cols-3 gap-10 gap-y-[50px] md:gap-y-[114px] justify-items-center`}>

            {props.services.map((item, index) => (
              <div  key={index} className="max-w-[270px] ">
              <div className={`${classes.top_image} xl:max-w-[250px] lg:max-w-[220px] md:max-w-[190px] sm:max-w-[155px] max-w-[125px] mx-auto w-full`}>
                  <Image src={urlFor(item.image).url()} alt='' width={250} height={250} className='' />
              </div>
              <div className="text-center">
                  <h2 className='font-mono font-semibold lg:text-35px md:text-30px sm:text-25px text-[20px] text-center text-color-1 mt-[10px] xl:mb-[28px] lg:mb-[25px] md:mb-[20px] sm:mb-[18px] mb-[15px]'>{item.title_sub}</h2>
                  <p className='font-lato text-[14px] sm:text-base md:text-lg font-normal text-color-1'>{item.desc_sub}</p>
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
