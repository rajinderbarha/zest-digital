import React from "react";
import classes from "../Services_details.module.css";
import { HappyCustomer } from "../../../../../lib/interface";
import { urlFor } from "../../../../../lib/sanity.client";
import { PortableText } from "next-sanity";

const Services_details_happy_customer = ({ Services_details }: { Services_details: HappyCustomer[] }) => {
  return (
    <>
      <div className="main_padding ">
        <div className={`${classes.objective} main_container`}>

        {Services_details.map((item: HappyCustomer, index: number) =>

            index % 2 == 0 ? (
              <div
                key={`${item.heading}_${index}`}
                className={`flex items-center  flex-col md:flex-row  bg-white ${classes.objective_inner} ${classes.objective_select} lg:gap-10  `}
              >
                <div className=" md:max-w-[1057px] xl:pe-[100px] lg:pe-[70px] md:pe-[50px]">
                  <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[22px] text-color-1 font-semibold font-mono ">
                    {/* {item.heading} */}
                    <PortableText value={item.serviceheading}/>
                  </h2>
                  <div className={`${classes.objective_description} font-mono lg:text-30px md:text-25px text-[12px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px] sm:mt-[25px] mt-[18px] `}>
                    <PortableText value={item.content}/>
                   
                  </div>
                </div>
                <div className="md:flex mx-auto  hidden">
                  <img
                    src={urlFor(item.image).url()}
                    alt=""
                    className="xl:max-w-[350px] xl:w-[350px] xl:h-[350px] lg:max-w-[250px] lg:w-[250px] lg:h-[250px] md:max-w-[180px] md:w-[180px] md:h-[180px] max-w-[200px] w-[200px] h-[200px] "
                  />
                </div>
              </div>
            ) : (
              <div className={`${classes.objective} ${classes.objective_select} main_container`} key={index}>
              <div
                className={`flex items-center flex-col-reverse md:flex-row  bg-white ${classes.objective_inner} lg:gap-10 `}
              >
                <div className=" image_class md:flex mx-auto  hidden ">
                  <img
                    src={urlFor(item.image).url()}
                    alt=""
                    className="xl:max-w-[400px] xl:w-[400px] xl:h-[400px] lg:max-w-[300px] lg:w-[300px] lg:h-[300px] md:max-w-[230px] md:w-[230px] md:h-[230px] max-w-[200px] w-[200px] h-[200px] "
                  />
                </div>
                <div className=" md:ms-auto md:max-w-[1057px] xl:ps-[80px] lg:ps-[50px] md:ps-[20px] md:text-right">
                  <h2 className=" md:max-w-[675px] ms-auto xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[22px] text-color-1 font-semibold font-mono ">
                    {/* {item.heading} */}
                    <PortableText value={item.serviceheading}/>
                  </h2>
                  <div className={`${classes.objective_description} font-mono lg:text-30px md:text-25px text-[12px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px] sm:mt-[25px] mt-[18px] `}>
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
