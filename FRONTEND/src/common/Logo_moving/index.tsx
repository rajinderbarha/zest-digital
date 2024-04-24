import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import classes from "./Logo_moving.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { LogoMoving } from "../../../lib/interface";

const Logo_moving = ({ LogoMovdata }: LogoMoving) => {

  return (
    
      <div
        className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full  my-10  `}
      >
        <div className={`${classes.gradient_border} relative md:py-16 py-[50px] `}>
          <div className={`${classes.shadow_custom} `}></div>

          <Marquee className={`gap-16 `}>
            <div className="flex  max-w-auto gap-[80px] me-5 ">
              {LogoMovdata?.map((item: any, index: number) => {
                // console.log("solution", item.icon);
                return (
                <div key={index} className="md:max-w-[200px] max-w-[150px] mx-auto w-full  self-center">

                  <Image
                    src={urlFor(item.icon).url()}
                    alt="brand img"
                    width={200}
                    height={200}
                    className=" "
                    key={index}
                    />
                    </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    
  );
};

export default Logo_moving;
