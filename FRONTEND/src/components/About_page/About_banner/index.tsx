import React, { useEffect } from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";


function About_banner({ data }: { data: AboutType[] }) {

  return ( 
    <>
      <div className={`${classes.About_banner} main_padding`} data-aos="fade-up">
        <div className="main_container">
          {data?.map((item, index) => (
            <div
              className="  xl:mt-[143px] lg:mt-[120px] md:mt-[50px] sm:mt-[40px] mt-[30px] relative"
              key={`${index}_About_banner`}
            >
              <div className="Founded_heading max-tb:max-w-[553px] max-w-[850px]" >
                {/* <h2 className="xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] sm:text-[27px] text-[22px] font-semibold text-color-1 font-mono bg-light-green-1 w-max px-2"> */}
                <h2 className={`${classes.about_title} font-semibold text-color-1 font-mono bg-light-green-1 w-max `}>
                  {item.hero.title}
                </h2>
                {/* <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-[42px] min-tb:max-tb:text-[30px] sm:text-[30px] text-[22px] text-color-1   xl:mt-[35px] lg:mt-[27px] md:mt-[15px] mt-[5px]"> */}
                <h1 className={`${classes.about_heading} font-mono font-semibold  text-color-1  `}>
                  {item.hero.heading}
                </h1>
                {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
              </div>
              <div className={`${classes.Founded_img}  md:flex md:absolute top-0 max-w-[245px]  max-tb:max-w-[150px]  right-[25px] h-full`} data-aos="zoom-in" data-aos-delay="200">
                <Image
                  className={`${classes.banner_image} rotate`}
                  src={urlFor(item.hero.image).url()}
                  width={250}
                  height={250}
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
