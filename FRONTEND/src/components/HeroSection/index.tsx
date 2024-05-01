import React from "react";
import Image from "next/image";
import classes from "./heroSection.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { HomepageHeroSec } from "../../../lib/interface";

const HeroSection = ({ HeroSecData }: HomepageHeroSec) => {
  const {
    heading,
    viewSolBtnName,
    SeeOurResBtnName,
    viewSolBtnLink,
    SeeOurResBtnLink,
    image,
    videosrc,
  } = HeroSecData

  console.log("vv", viewSolBtnLink, SeeOurResBtnLink);
  return (
    <>
      <div className="main_padding">
        <div className=" text-white main_container">
          {/* <div className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover md:rounded-30px rounded-[20px] xl:pb-[110px] lg:pb-[86px] xl:pt-[130px] lg:pt-[90px] md:pt-[90px] sm:pt-[50px] pt-[30px] md:pb-[150px] sm:pb-[50px] pb-[30px] xl:px-[100px] lg:px-[60px] md:px-[60px] sm:px-[40px] px-[22px] relative`}> */}
          <div className={`${classes.banner} grid md:grid-cols-2 grid-cols-1 gap-10 bg-black bg-image-1 bg-no-repeat bg-cover md:rounded-30px rounded-[20px] xl:pb-[110px] lg:pb-[86px] xl:pt-[130px] lg:pt-[90px] md:pt-[90px] sm:pt-[50px] pt-[30px] md:pb-[150px] sm:pb-[50px] pb-[30px] main_padding relative`}>
            <div className=" font-mono text-55px border-white flex flex-col">
              <h1
                className={`${classes.banner_text} font-semibold leading-tight border-white xl:text-55px lg:text-50px md:text-40px text-30px `}
              >
                {heading}
              </h1>
              <div className="flex gap-5 md:flex-col lg:flex-row mt-9 flex-col sm:flex-row">
                <a href={viewSolBtnLink} className="flex">
                  <button className="text-base  px-25px md:h-10 h-9 bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white border border-white  hover:border-color-1">
                    {viewSolBtnName}
                  </button>
                </a>
                <a href={SeeOurResBtnLink} className="flex">
                  <button className="text-base px-25px md:h-10 h-9 bg-transparent text-white rounded-full hover:text-color-1 hover:bg-white border border-white ">
                    {SeeOurResBtnName}
                  </button>
                </a>
              </div>
              <div className={`${classes.marketing_agency_logo_1} self-end`}>
                <Image
                  src={urlFor(image).url()}
                  width={256}
                  height={246}
                  alt=""
                />
              </div>
            </div>
            <div
              className={`${classes.banner_video}  flex justify-end items-start  relative`}
            >
              <div className={`${classes.marketing_agency_logo_2}`}>
                <Image
                  src={urlFor(image).url()}
                  width={256}
                  height={246}
                  alt=""
                />
              </div>
              <div className={classes.custom_border}>
              <video width="680" height="450"  controls className={`${classes.video_class} xl:rounded-30px md:rounded-[20px] rounded-[10px]`}>
                <source
                  src={videosrc}
                  type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
