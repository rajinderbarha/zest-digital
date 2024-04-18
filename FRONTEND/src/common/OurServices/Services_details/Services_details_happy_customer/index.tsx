





import Image from "next/image";
import React from "react";
import growth_framework_img from "../../../../assets/images/growth_framework_img.png";
import classes from "../Services_details.module.css";
import { ServiceDetail } from "../../../../../lib/interface";
import { urlFor } from "../../../../../lib/sanity.client";
import { PortableText } from "next-sanity";


const Services_details_happy_customer = (props:any) => {
  return (
    <><div className="main_padding">
      <div className={`${classes.objective} main_container`}>
        {props.Services_details.map((item:any, index:number) =>
          index % 2 == 0 ? (
            <div
            key={`${item.heading}_${index}`}
              className={`flex items-center flex-col md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] `}
            >
              <div className=" md:max-w-[1057px] md:pe-[100px]">
                <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px text-color-1 font-semibold font-mono ">
                  {item.heading}
                </h2>
                <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                  <PortableText value={item.content}/>
                 
                </div>
              </div>
              <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]">
                <Image
                  src={urlFor(item.image).url()}
                  width={350}
                  height={350}
                  alt=""
                  className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]"
                />
              </div>
            </div>
          ) : (
            <div className={`${classes.objective} main_container`} key={index}>
              <div
                className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} gap-10 mt-[100px] md:mt-[175px] px-10`}
              >
                <div className=" xl:max-w-[350px] md:max-w-[280px] max-w-[200px]  md:ps-[100px]">
                  <Image
                    src={growth_framework_img}
                    alt=""
                    className="xl:max-w-[350px]  md:max-w-[280px] max-w-[200px]"
                  />
                </div>
                <div className=" ms-auto md:max-w-[1057px] md:ps-[80px] text-right">
                  <h2 className="text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono ">
                    {item.heading}
                  </h2>
                  <div className="font-mono md:text-25px  lg:text-30px mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                    <PortableText value={item.content}/>
                 
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      </div>
    </>
  );
};

export default Services_details_happy_customer;
