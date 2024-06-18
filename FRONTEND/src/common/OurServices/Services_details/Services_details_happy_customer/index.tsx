import React from "react";
import classes from "../Services_details.module.css";
import { HappyCustomer } from "../../../../../lib/interface";
import { urlFor } from "../../../../../lib/sanity.client";
import { PortableText } from "next-sanity";

const Services_details_happy_customer = ({ Services_details, Slug }: { Services_details: HappyCustomer[], Slug: string }) => {
  // const isGrowthPage
  // console.log("-----data--------", Services_details);
  // console.log("-----------slug-----", Slug)

  const isGrowthPage = Slug === "growth-marketing-services";
  
  return (
    <>
      <div className="main_padding ">
        <div className={`${classes.objective} main_container`}>

          {Services_details.map((item: HappyCustomer, index: number) =>

            index % 2 == 0 ? (
              <div
                key={`${item.heading}_${index}`}
                className={`${classes.content_left} flex items-center  flex-row  bg-white ${classes.objective_inner} ${classes.objective_select} lg:gap-10  `}
              >
                <div className="me-auto md:max-w-[1057px] xl:pe-[100px] lg:pe-[70px] md:pe-[50px]">
                  <h2 className="xl:text-45px lg:text-40px md:text-35px  min-tb:max-tb:text-[30px] min-tb:max-tb:leading-[39px] sm:text-30px text-[22px] text-color-1 font-semibold font-mono ">
                    {/* {item.heading} */}
                    <PortableText value={item.serviceheading} />
                  </h2>
                  <div className={`${classes.objective_description} min-tb:max-tb:max-w-[378px] font-mono lg:text-30px md:text-25px text-[12px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px]  min-tb:max-tb:mt-[20px] min-tb:max-tb:text-[16px] min-tb:max-tb:leading-[20px] sm:mt-[20px] mt-[12px] `}>
                    <PortableText value={item.content} />

                  </div>
                </div>
                <div className="flex  min-tb:max-tb:ms-auto  ms-auto sm:mt-[15px] mt-[7px]">
                  <img
                    src={urlFor(item.image).url()}
                    alt=""
                    className="xl:max-w-[350px] xl:w-[350px] xl:h-[350px] lg:max-w-[250px] lg:w-[250px] lg:h-[250px] md:max-w-[180px] md:w-[180px] md:h-[180px] min-tb:max-tb:max-w-[196px] min-tb:max-tb:w-[196px] min-tb:max-tb:h-[196px] sm:max-w-[160px] sm:w-[160px] sm:h-[160px] max-w-[150px] w-[150px] h-[150px] "
                  />
                </div>
              </div>
            ) : (
              <div className={`${classes.objective} ${classes.objective_select} main_container`} key={index}>
                <div
                  className={`${classes.content_right}  flex items-center flex-row  bg-white ${classes.objective_inner} lg:gap-10 `}
                >
                  {isGrowthPage ? (
                    <div className=" image_class flex   me-auto md:mt-0 sm:mt-[15px] mt-[14px]">
                      <img
                        src={urlFor(item.image).url()}
                        alt=""
                        className={`${classes.growth_service_image} xl:max-w-[618px] xl:w-[618px] xl:h-[950px] lg:max-w-[290px] lg:w-[290px] lg:h-[768px] md:max-w-[230px] md:w-[230px] min-tb:max-tb:w-[203px] min-tb:max-tb:h-[560px] md:h-[495px] sm:max-w-[200px] sm:w-[200px] sm:h-[485px] max-w-[173px] w-[173px] h-[476px]`}
                      />
                    </div>
                  ) : (
                    <div className=" image_class flex   me-auto md:mt-0 sm:mt-[15px] mt-[7px]">
                      <img
                        src={urlFor(item.image).url()}
                        alt=""
                        className="xl:max-w-[400px] xl:w-[400px] xl:h-[400px] lg:max-w-[300px] lg:w-[300px] lg:h-[300px] md:max-w-[230px] md:w-[230px] md:h-[230px] min-tb:max-tb:max-w-[196px] min-tb:max-tb:w-[196px] min-tb:max-tb:h-[196px] sm:max-w-[160px] sm:w-[160px] sm:h-[160px] max-w-[150px] w-[150px] h-[150px]"
                      />
                    </div>
                  )}
                  <div className={`ms-auto md:max-w-[1057px]  ${isGrowthPage ? `min-tb:max-tb:max-w-[412px]`: `xl:ps-[80px] lg:ps-[50px] md:ps-[20px] min-tb:max-tb:max-w-[433px]`} text-right`}>
                    <h2 className=" md:max-w-[675px] ms-auto xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[30px] min-tb:max-tb:leading-[39px] sm:text-30px text-[22px] text-color-1 font-semibold font-mono ">
                      {/* {item.heading} */}
                      <PortableText value={item.serviceheading} />
                    </h2>
                    <div className={`${classes.objective_description} font-mono lg:text-30px md:text-25px text-[12px] xl:mt-[70px] lg:mt-[55px] md:mt-[40px] min-tb:max-tb:mt-[20px] min-tb:max-tb:text-[16px] min-tb:max-tb:leading-[20px] sm:mt-[20px] mt-[12px] `}>
                      <PortableText value={item.content} />

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
