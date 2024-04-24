import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function About_banner({ data }: { data: AboutType[] }) {
  return (
    <>
      <div className={`${classes.About_banner} main_padding`}>
        <div className="main_container">
          {data?.map((item, index) => (
            <div
              className="grid md:grid-cols-12 "
              key={`${index}_About_banner`}
            >
              <div className="md:col-span-6">
                <h2 className="xl:text-45px lg:text-40px md:text-35px text-[18px] font-semibold text-color-1 font-mono bg-color-7 w-max px-2">
                  {item.hero.title}
                </h2>
                <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-[42px] text-[30px] text-color-1  mb-5 xl:mt-[35px] lg:mt-[27px] md:mt-[22px] mt-[15px]">
                  {item.hero.heading}
                </h1>
              </div>
              <div className="md:col-span-6 ">
                <Image
                  className="md:ms-auto "
                  src={urlFor(item.hero.image).url()}
                  width={350}
                  height={350}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About_banner;
