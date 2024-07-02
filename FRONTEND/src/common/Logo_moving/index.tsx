import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import classes from "./Logo_moving.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { LogoMoving } from "../../../lib/interface";

const Logo_moving = ({ LogoMovdata }: LogoMoving) => {

  return (

    <div
      className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full  my-10`}
    >
      <div className={`${classes.gradient_border} relative xl:py-16 lg:py-[50px] md:py-[40px] sm:py-[30px] py-[30px]`}>
        <div className={`${classes.shadow_custom} `}></div>

        <Marquee className={`xl:gap-[100px] lg:gap-[80px] md:gap-[60px] sm:gap-[40px] gap-[35px] `}>
          <div className="flex  max-w-auto xl:gap-[100px] lg:gap-[80px] md:gap-[60px] sm:gap-[40px] gap-[35px] ">
            {LogoMovdata?.map((item: any, index: number) => {
              return (
                <Image
                  src={urlFor(item.icon).url()}
                  alt="brand img"
                  width={200}
                  height={81}
                  key={index}
                  className="xl:w-[200px] xl:h-[81px] lg:w-[180px] lg:h-[73px] md:w-[150px] md:h-[61px] sm:w-[120px] sm:h-[49px] w-[100px] h-[41px]  "
                />
              );
            })}

            {LogoMovdata?.map((item: any, index: number) => {
              return (
                <Image
                  src={urlFor(item.icon).url()}
                  alt="brand img"
                  width={200}
                  height={81}
                  key={index}
                  className="xl:w-[200px] xl:h-[81px] lg:w-[180px] lg:h-[73px] md:w-[150px] md:h-[61px] sm:w-[120px] sm:h-[49px] w-[100px] h-[41px]  "
                />
              );
            })}
          </div>
        </Marquee>

      </div>
    </div>
  );
};

export default Logo_moving;