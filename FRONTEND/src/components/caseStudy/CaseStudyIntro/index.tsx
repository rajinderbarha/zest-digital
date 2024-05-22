import React from "react";
import Image from "next/image";
import classes from "./CaseStudyIntro.module.css";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";
import { CaseStudyIntroType } from "../../../../lib/interface";

function Casestudyintro({ data }: {data:CaseStudyIntroType}) {
  return (
    <>
    {/* xl:mt-[120px] lg:mt-[100px] md:mt-[50px] sm:mt-[50px] mt-[30px] */}
      <div className={`${classes.Casestudyintro} main_padding `}>
        <div className=" md:px-[20px] sm:px-[15px] px-[8px] max-w-[1520px] mx-auto w-full relative">
          <div className="">
            <div className="xl:max-w-[971px] max-w-[800px]">
              <h1 className="font-mono font-semibold text-color-1  xl:text-55px lg:text-50px md:text-[42px] sm:text-[30px] text-[22px] mb-5">
                {data.heading}
              </h1>
              <Link href={data.buttonLink}>
                {" "}
                <button className="font-mono text-[12px] sm:text-base px-21px md:h-[40px] sm:h-[35px] h-[35px] text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 ">
                  {data.buttonName}
                </button>
              </Link>
            </div>
            <div className={` ${classes.image_div} md:absolute top-0 right-[20px] md:flex md:items-start `}>
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
