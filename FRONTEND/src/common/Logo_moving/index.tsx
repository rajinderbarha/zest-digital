import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import classes from "./Logo_moving.module.css";
import { urlFor } from "../../../lib/sanity.client";

const Logo_moving = ({ data }: any) => {
  return (
    
      <div
        className={`${classes.margin_top} text-white mx-auto max-w-[1720px] w-full  my-10  `}
      >
        <div className="relative py-16 border-t border-b border-color-3">
          <div className={`${classes.shadow_custom} `}></div>

          <Marquee className={`gap-16 `}>
            <div className="flex  max-w-auto gap-16 me-5">
              {data?.map((item: any, index: number) => {
                console.log("solution", item.icon);
                return (
                
                  <Image
                    src={urlFor(item.icon).url()}
                    alt="brand img"
                    width={100}
                    height={50}
                    key={index}
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
