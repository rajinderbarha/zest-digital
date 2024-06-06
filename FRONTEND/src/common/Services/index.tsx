import React from "react";
import classes from "./Services.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import { HomePageServices } from "../../../lib/interface";

const Services = ({ data }: HomePageServices) => {
  console.log("---------", data.services[0].reference.slug)
  return (
    <>
      <div className="main_padding xl:mb-[74px] lg:mb-[68px] md:mb-[62px] sm:mb-[52px] mb-[45px]">
        <div className="main_container ">
          <div
            className={`${classes.bg_image}  xl:pt-[88px] lg:pt-[65px] md:pt-[45px] sm:pt-[55px] pt-[50px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[35px] px-[20px] xl:pb-[80px] lg:pb-[60px] md:pb-[40px] sm:pb-[25px] pb-[20px] bg-black rounded-[20px] md:rounded-30px font-mono flex md:flex-row flex-col `}
          >
            <div className="  xl:pb-[158px] lg:pb-[120px] md:pb-[90px] pb-[20px]">
              <h2 className="  md:w-max xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[18px] text-white font-semibold xl:mb-[25px] lg:mb-[20px] md:mb-[10px] sm:mb-[35px] mb-[26px]">
                {data.title}
              </h2>
              <div className="  flex xl:gap-[17px] lg:gap-[12px] md:gap-[9px] sm:gap-[7px] gap-[5px] flex-col text-white">
                <ul >
                  {data.services.map((item: any, index: number) => (

                    <li key={`${index}_servicesList `} className="md:mb-6 sm:mb-[18px] mb-[14px]">
                      {" "}
                      <Link
                        href={`/services/${item.reference.slug}`}
                        className="border-b border-white hover:border-[transparent] w-max md:text-[16px] sm:text-[14px] text-[12px] lg:text-lg flex  items-center gap-1"
                      >
                        {item.servicetitle}
                        <GoArrowRight />
                      </Link>
                    </li>

                  ))}
                </ul>
              </div>
            </div>
            <div className="md:flex xl:gap-[40px] lg:gap-[25px] md:gap-[8px] ms-auto hidden xl:-mt-[150px] lg:-mt-[120px] -mt-[90px]">
              <div className="  self-end">
                <Image
                  src={urlFor(data.image1).url()}
                  width={320}
                  height={320}
                  alt=""
                  className=" "
                />
              </div>
              <div className="   self-center">
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
    </>
  );
};

export default Services;
