import React, { useEffect } from "react";
import Image from "next/image";
import classes from "./heroSection.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { HomepageHeroSec } from "../../../lib/interface";
import arrow_image from "../../assets/images/arrow.svg"
import AOS from 'aos'
import 'aos/dist/aos.css';

const HeroSection = ({ HeroSecData }: HomepageHeroSec) => {
  const {
    heading,
    viewSolBtnName,
    SeeOurResBtnName,
    viewSolBtnLink,
    SeeOurResBtnLink,
    image,
    videosrc,
  } = HeroSecData || {}

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div className="main_padding" data-aos="fade-up">
    <div className=" text-white main_container">
      <div className={`${classes.banner} tablet_padding grid max-tb:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-10  lg:rounded-30px md:rounded-[20px] rounded-[15px] main_padding`}>
        <div className=" font-mono text-55px border-white flex flex-col">
          <h1 data-aos="fade-out" data-aos-delay="200"
            className={`${classes.banner_text}  font-semibold text-white `}
          >
            {heading}
          </h1>
          <div className={`${classes.banner_btn} flex gap-5 md:flex-row lg:flex-row mt-9 flex-col sm:flex-row`}>
            <a href={viewSolBtnLink} className="flex">
              <button className=" bg-white text-color-1 rounded-full hover:bg-color-1 hover:text-white border border-white  hover:border-color-1">
                {viewSolBtnName}
              </button>
            </a>
            <a href={SeeOurResBtnLink} className="flex">
              <button className=" bg-transparent text-white rounded-full hover:text-color-1 hover:bg-white border border-white ">
                {SeeOurResBtnName}
              </button>
            </a>
            <div className={`${classes.marketing_agency_logo_1} `}>
              <Image
                src={urlFor(image).url()}
                width={236}
                height={246}
                alt=""
                className="xl:mt-8 rotate xl:ms-8 lg:mt-2 lg:ms-2 lg:max-w-[150px] xl:max-w-[200px]"
              />
            </div>
          </div>

        </div>
        <div
          className={`${classes.banner_video}  flex justify-end items-start  relative`}
        >
          <div className={`${classes.marketing_agency_logo_2}`}>
          </div>
          <div className={classes.custom_border} data-aos="zoom-in" data-aos-duration="1500">
            <video width="680" height="480"  controls className={`${classes.video_class} xl:rounded-30px md:rounded-[20px]  rounded-[10px]`}>
              <source
                src={videosrc}
                type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <Image src={arrow_image} alt="" className=" max-tb:block md:hidden w-[40px] mx-auto rotate-90" />
      </div>
    </div>
  </div>

};

export default HeroSection;





