import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import classes from "./Logo_moving.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { LogoMoving } from "../../../lib/interface";

const Logo_moving = ({ LogoMovdata }: LogoMoving) => {

  return (

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
                    height={81}
                    key={index}
                    className="xl:w-[200px] lg:w-[180px] md:w-[150px] sm:w-[120px] w-[100px] h-auto "
                  />

                </div>
              );
            })}
          
          </div>
        </Marquee>

     

  );
};

export default Logo_moving;
