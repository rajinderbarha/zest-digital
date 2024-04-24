import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import classes from "./Logo_moving.module.css";
import { urlFor } from "../../../lib/sanity.client";

const Logo_moving = ({ data }: any) => {

  // console.log("brandslist==============",data)
  return (

    <div
      className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full  my-10`}
    >
      <div className={`${classes.gradient_border} relative xl:py-16 lg:py-[50px] md:py-[40px] sm:py-[30px] py-[30px]`}>
        <div className={`${classes.shadow_custom} `}></div>

        <Marquee className={`xl:gap-[100px] lg:gap-[80px] md:gap-[60px] sm:gap-[40px] gap-[35px] `}>
          <div className="flex  max-w-auto xl:gap-[100px] lg:gap-[80px] md:gap-[60px] sm:gap-[40px] gap-[35px] ">
            {data?.map((item: any, index: number) => {
              // console.log("solution", item.icon);
              return (
                <>


                  <Image
                    src={urlFor(item.icon).url()}
                    alt="brand img"
                    width={200}
                    height={81}
                    key={index}
                    className="xl:w-[200px] lg:w-[180px] md:w-[150px] sm:w-[120px] w-[100px] h-auto "
                  />

                </>
              );
            })}
            {data?.map((item: any, index: number) => {
              // console.log("solution", item.icon);
              return (
                <>


                  <Image
                    src={urlFor(item.icon).url()}
                    alt="brand img"
                    width={200}
                    height={81}
                    key={index}
                    className="xl:w-[200px] lg:w-[180px] md:w-[150px] sm:w-[120px] w-[100px] h-auto"
                  />

                </>
              );
            })}
          </div>
        </Marquee>

      </div>
    </div>

  );
};

export default Logo_moving;
