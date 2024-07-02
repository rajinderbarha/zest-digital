import React from "react";
import classes from "./Services.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import { HomePageServices } from "../../../lib/interface";

const Services = ({ data }: HomePageServices) => {

  return <div className="main_padding xl:mb-[74px] lg:mb-[68px] md:mb-[62px] sm:mb-[52px] mb-[45px]" data-aos="fade-up">
    <div className="main_container ">
      <div
        // className={`${classes.bg_image} xl:pt-[88px] lg:pt-[65px] md:pt-[45px] min-tb:max-tb:pt-[58px] sm:pt-[55px] pt-[50px] xl:px-[100px] lg:px-[80px] md:px-[60px] min-tb:max-tb:ps-[84px] min-tb:max-tb:pe-[45px] sm:px-[35px] px-[20px] xl:pb-[80px] lg:pb-[60px] md:pb-[40px] min-tb:max-tb:pb-[85px] sm:pb-[65px] pb-[56px] bg-black rounded-[20px] md:rounded-30px font-mono flex md:flex-row flex-col min-tb:max-tb:gap-[30px]`}
        className={`${classes.bg_image}  bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px font-mono flex md:flex-row flex-col min-tb:max-tb:gap-[30px]`}
      >
        <div className="  xl:pb-[158px] lg:pb-[120px] md:pb-[90px] min-tb:max-tb:pb-0 pb-[5px]">
          {/* <h2 className="  md:w-max xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[18px] text-white font-semibold xl:mb-[25px] lg:mb-[20px] md:mb-[20px] min-tb:max-tb:mb-[22px] min-tb:max-tb:text-[26px] sm:mb-[35px] mb-[26px]"> */}
          <h2 className={`${classes.service_heading} text-white font-semibold `}>
            {data.title}
          </h2>
          <div className="  flex xl:gap-[17px] lg:gap-[12px] md:gap-[9px] sm:gap-[7px] gap-[5px] flex-col text-white">
            <ul className={`${classes.Services_List}`}>
              {data.services.map((item: any, index: number) => (

                <li key={`${index}_servicesList `} className="md:mb-6 min-tb:max-tb:mb-[16px] sm:mb-[18px] mb-[14px]">
                  {" "}
                  <Link
                    href={`/services/${item.reference.slug}`}
                    // className={`border-b border-white hover:border-[transparent] w-max md:text-[16px] sm:text-[14px] min-tb:max-tb:text-[14px] text-[12px] lg:text-lg flex  items-center gap-1`}
                    className={`${classes.service_links} border-b border-white hover:border-[transparent] flex items-center gap-1`}
                  >
                    {item.servicetitle}
                    <GoArrowRight />
                  </Link>
                </li>

              ))}
            </ul>
          </div>
        </div>
        <div className={`${classes.Services_Image} flex xl:gap-[40px] lg:gap-[25px] md:gap-[8px] ms-auto  xl:-mt-[150px] lg:-mt-[120px] md:-mt-[90px]`}>
          <div className="  self-end">
            <Image
              src={urlFor(data.image1).url()}
              width={320}
              height={320}
              alt=""
              className=" "
            />
          </div>
          <div className="   md:self-center">
            <Image
              src={urlFor(data.image2).url()}
              width={282}
              height={282}
              alt=""
              className=" "
            />
          </div>
          <div className="    h-max">

            <Image
              src={urlFor(data.image3).url()}
              width={273}
              height={273}
              alt=""
              className="  "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Services;
