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
      <div className={`${classes.gradient_border} relative md:py-16 py-[50px] `}>
        <div className={`${classes.shadow_custom} `}></div>

        <Marquee className={` `}>
          <div className="flex  max-w-auto gap-[50px] me-5 ">
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
                    width={116}
                    height={47}
                    key={index}
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
