import React from "react";
import classes from "./Services.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import { HomePageServices } from "../../../lib/interface";

const Services = ({ data }: HomePageServices) => {
  return (
    <>
      <div className="main_padding xl:mb-[74px] lg:mb-[68px] md:mb-[62px] sm:mb-[52px] mb-[45px]">
        <div className="main_container ">
          <div
            className={`${classes.bg_image}  xl:pt-[88px] lg:pt-[65px] md:pt-[45px] sm:pt-[30px] pt-[25px] xl:px-[100px] lg:px-[80px] md:px-[60px] sm:px-[40px] px-[30px] xl:pb-[80px] lg:pb-[60px] md:pb-[40px] sm:pb-[25px] pb-[20px] bg-black rounded-[20px] md:rounded-30px font-mono flex md:flex-row flex-col `}
          >
            <div className="  xl:pb-[158px] lg:pb-[120px] md:pb-[90px] pb-[20px]">
            <h2 className=" md:w-max xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[28px] text-white font-semibold xl:mb-[14px] lg:mb-[12px] md:mb-[10px] sm:mb-[6px] mb-[4px]">
                {data.title}
              </h2>
              <div className="  flex xl:gap-[17px] lg:gap-[12px] md:gap-[9px] sm:gap-[7px] gap-[5px] flex-col text-color-6">
                {data.services.map((item: any, index: number) => (
                  <ul key={`${index}_servicesList`}>
                    <li>
                      {" "}
                      <Link
                        href={`/services/${item.slug}`}
                        className="border-b border-color-6 hover:border-[transparent] w-max text-md lg:text-lg flex items-center gap-1"
                      >
                        {item.title}
                        <GoArrowRight />
                      </Link>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="md:flex ms-auto hidden xl:-mt-[158px] lg:-mt-[125px] -mt-[94px]">
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
