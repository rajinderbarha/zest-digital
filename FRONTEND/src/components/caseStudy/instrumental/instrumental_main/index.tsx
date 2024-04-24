import React from "react";
import classes from "../instrumental.module.css";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";

function Instrumental({ data }: any) {

  const {hero} = data
  return (
    <div className={`${classes.Instrumental} main_padding xl:mt-[112px] lg:mt-[90px] md:mt-[60px] sm:mt-[40px] mt-[30px] `}>
      <div className="max-w-[1520px] mx-auto w-full">
        <div className="grid md:grid-cols-12  items-center">
          <div className="md:col-span-4    ">
            <Image
              className="md:ms-auto mx-auto xl:max-w-[350px] lg:max-w-[280px] md:max-w-[200px] sm:max-w-[150px] max-w-[100px] w-full"
              src={urlFor(data.hero.image).url()}
              alt="casestudy img"
              width={350}
              height={350}
            />
            <h3 className="font-mono font-semibold lg:text-30px md:text-25px text-[20px] md:max-w-[373px] max-w-[221px] text-center mx-auto mt-4">
              {hero.imageDesc? hero.imageDesc : ""}
            </h3>
          </div>
          <div className="md:col-span-8    md:mt-0 sm:mt-[30px] mt-[25px]">
            <h2 className="font-mono font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[20px] md:mb-[20px] sm:mb-[15px] mb-[10px] w-max-[909px]">
              {hero.heading}
            </h2>
            <p className="text-color-9 pt-2 border-t text-[15px] sm:text-base border-color-9">
              {hero.belowLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instrumental;
