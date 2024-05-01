import React from "react";
import classes from "../instrumental.module.css";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";

function Instrumental({ data }: any) {

  const { hero } = data
  return (
    <div className={`${classes.Instrumental} main_padding xl:mt-[112px] lg:mt-[90px] md:mt-[60px] sm:mt-[40px] mt-[30px] xl:mb-[271px] lg:mb-[220px] md:mb-[170px] sm:mb-[120px] mb-[70px]`}>
      <div className="max-w-[1520px] mx-auto w-full">
        <div className="grid md:grid-cols-12  items-center">
          <div className={`${classes.grid_image_div} md:col-span-4   `}>
            {/* <div className={`${classes.image_div} hidden md:block relative`}>

              <Image
                className="md:ms-auto mx-auto box-border text-center"
                src={urlFor(data.hero.image).url()}
                alt="casestudy img"
                layout="fill"
                objectFit="contain"
              />
            </div> */}
            
            {/* -----------desktop view------------- */}
            <div className="hidden md:block">

              <Image
                className="md:ms-auto mx-auto xl:max-w-[350px] h-max lg:max-w-[280px] md:max-w-[200px] box-border text-center"
                src={urlFor(data.hero.image).url()}
                alt="casestudy img"
                width={350}
                height={350}
              />
            </div>
             {/* -----------desktop view------------- */}
             {/* -----------mobile view------------- */}
            <div className="block md:hidden max-w-[350px] sm:h-[360px] h-[250px] box-border  mx-auto relative">

              <Image
                className="md:ms-auto mx-auto xl:max-w-[350px] h-max lg:max-w-[280px] md:max-w-[200px] box-border text-center"
                src={urlFor(data.hero.image).url()}
                alt="casestudy img"
                layout="fill"
                objectFit="contain"
              />
            </div>
            {/* -----------mobile view------------- */}

            <h3 className="font-mono font-semibold lg:text-30px md:text-25px text-[20px] md:max-w-[373px] max-w-[221px] text-center mx-auto mt-4">
              {hero.imageDesc ? hero.imageDesc : ""}
            </h3>
          </div>
          <div className="md:col-span-8 ms-auto lg:ps-[50px] md:ps-[30px] max-w-[891px] md:mt-0 sm:mt-[30px] mt-[25px]">
            <h2 className="font-mono italic font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[20px] md:mb-[20px] sm:mb-[15px] mb-[10px] w-max-[909px]">
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
