import React from "react";
import Image from "next/image";
import classes from "./CaseStudyIntro.module.css";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";

function Casestudyintro({ data }: any) {
  return (
    <>
      <div className={`${classes.Casestudyintro} main_padding xl:mt-[120px] lg:mt-[100px] md:mt-[50px] sm:mt-[50px] mt-[30px]`}>
        <div className=" px-[20px] max-w-[1520px] mx-auto w-full relative">
          <div className="">
            <div className="xl:max-w-[971px] max-w-[800px]">
              <h1 className="font-mono font-semibold  xl:text-55px lg:text-50px md:text-[42px] text-[30px] mb-5">
                {data.heading}
              </h1>
              <Link href={data.buttonLink}>
                {" "}
                <button className="font-mono text-[15px] sm:text-base px-21px md:h-[40px] sm:h-[35px] h-[30px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 ">
                  {data.buttonName}
                </button>
              </Link>
            </div>
            <div className={` ${classes.image_div} absolute top-0 right-[20px] md:flex md:items-start hidden`}>
              <Image
                className={`${classes.banner_image} md:ms-auto max-w-[245px] max-h-[245px] w-full h-full`}
                src={urlFor(data.image).url()}
                alt="hero img"
                width={245}
                height={245}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Casestudyintro;
