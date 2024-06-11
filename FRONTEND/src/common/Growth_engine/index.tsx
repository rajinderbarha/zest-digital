import React from "react";
import classes from "./growthEngine.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import { GrowthEngineProps } from "../../../lib/interface";

const Growth_engine = ({
  props,
  shadow_right,
  has_image,
}: GrowthEngineProps) => {
  const { title, description, buttonName, buttonLink, image } = props;
  
  return (
    <>
      {has_image ? (
        <div    data-aos="fade-up"
          className={`${classes.growth_engine}  ${
            shadow_right ? `shadow-dark-pink-left ` : `shadow-dark-pink-left`
          } grid sm:grid-cols-5 max-w-[1345px] mx-auto xl:ps-14 xl:pe-7 xl:py-[70px] lg:ps-12 lg:pe-5 lg:py-[50px] md:rounded-30px rounded-[20px] border border-black  bg-white text-color-1 relative`}
        >
          <div className="col-span-3">
            <h2
              className={`${classes.growth_engine_title} text-40px font-semibold `}
            >
              {title}
            </h2>
            <p className={`${classes.growth_engine_desc} md:text-3xl mt-5 md:mb-[37px] mb-[20px]`}>
              {description}
            </p>
            <Link href={buttonLink} className="inline-block">
              <button className="bg-color-1 group hover:bg-white max-sm:leading-normal hover:text-color-1 border border-color-1 rounded-full text-white text-base  md:py-[5px] md:ps-4 py-[3px] ps-[13px] pe-[4px] md:pe-0 w-fit flex gap-2 items-center">
                {buttonName}{" "}
                <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-lg group-hover:bg-color-1 group-hover:text-white">
                  <GoArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div
            className={`${classes.grow_image} absolute -bottom-40 -right-[23px] sm:block hidden`}
          >
            {image && (
              <Image
                src={urlFor(image).url()}
                alt="growth img"
                width={524}
                height={524}
              />
            )}
          </div>
        </div>
      ) : (
        <div  data-aos="fade-up"
          className={`${classes.growth_engine} ${
            shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right`
          } max-w-[1345px] mx-auto xl:ps-14 xl:pe-7 xl:py-[70px] lg:ps-12 lg:pe-5 lg:py-[50px] md:rounded-30px rounded-[20px]  border border-black  bg-white text-color-1`}
        >
          <h2
            className={`${classes.growth_engine_title} text-40px font-semibold `}
          >
            {title}
          </h2>
          <p className={`${classes.growth_engine_desc} md:text-3xl mt-5 md:mb-[37px] mb-[20px] xl:mt-[29px] lg:mt-[26px] md:mt-[25px]`}>
            {description}
          </p>
          <Link href={buttonLink} className="inline-block">
            <button
              className={` bg-color-1 group hover:bg-white  max-sm:leading-normal hover:text-color-1 border border-color-1 rounded-full text-white text-[16px] md:py-[5px] md:ps-4  py-[4px] ps-[13px] pe-[4px] md:pe-0 w-fit flex gap-2 items-center`}
              type="button"
            >
              {buttonName}{" "}
              <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-[17px] lg:text-[18px] group-hover:bg-color-1 group-hover:text-white">
                <GoArrowRight />
              </span>
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Growth_engine;
