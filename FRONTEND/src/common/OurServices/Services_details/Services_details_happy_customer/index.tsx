





import Image from "next/image";
import React from "react";
import growth_framework_img from "../../../../assets/images/growth_framework_img.png";
import classes from "../Services_details.module.css";
import { ServiceDetail } from "../../../../../lib/interface";
import { urlFor } from "../../../../../lib/sanity.client";
import { PortableText } from "next-sanity";


const Services_details_happy_customer = (props:any) => {
  return (
    <><div className="main_padding ">
      <div className={`${classes.objective} main_container`}>
        {props.Services_details.map((item:any, index:number) =>
          index % 2 == 0 ? (
            <div
            key={`${item.heading}_${index}`}
              className={`flex items-center  flex-col md:flex-row  bg-white ${classes.objective_inner} ${classes.objective_select} lg:gap-10  `}
            >
              <div className=" md:max-w-[1057px] xl:pe-[100px] lg:pe-[70px] md:pe-[50px]">
                <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[28px] text-color-1 font-semibold font-mono ">
                  {item.heading}
                </h2>
                <div className="font-mono lg:text-30px md:text-25px text-[19px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px] sm:mt-[25px] mt-[18px] ">
                  <PortableText value={item.content}/>
                 
                </div>
              </div>
              <div className="md:flex mx-auto  hidden">
                <Image
                  src={urlFor(item.image).url()}
                  width={350}
                  height={350}
                  alt=""
                  className="xl:max-w-[350px] lg:max-w-[250px] md:max-w-[180px] max-w-[200px]"
                />
              </div>
            </div>
          ) : (
            <div className={`${classes.objective} ${classes.objective_select} main_container`} key={index}>
              <div
                className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} lg:gap-10 `}
              >
                <div className=" image_class md:flex mx-auto  hidden ">
                  <Image
                    src={urlFor(item.image).url()}
                    width={400}
                    height={400}
                    alt=""
                    className=""
                  />
                </div>
                <div className=" md:ms-auto md:max-w-[1057px] xl:ps-[80px] lg:ps-[50px] md:ps-[20px] md:text-right">
                  <h2 className=" max-w-[675px] ms-auto xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[28px] text-color-1 font-semibold font-mono ">
                    {item.heading}
                  </h2>
                  <div className="font-mono lg:text-30px md:text-25px text-[19px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px] sm:mt-[25px] mt-[18px] ">
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
