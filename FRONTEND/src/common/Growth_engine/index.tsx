import React from "react";
import classes from "./growthEngine.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";

export interface GrowthEngineProps {
  props: {
    title: string;
    description: string;
    buttonName: string;
    buttonLink: string;
    image: any;
  };
  has_image: boolean;
  shadow_right: boolean;
}
const Growth_engine = ({
  props,
  shadow_right,
  has_image,
}: GrowthEngineProps) => {
  const { title, description, buttonName, buttonLink, image } = props;
  return (
    <>
      {has_image ? (
        <div
          className={`${classes.growth_engine}  ${
            shadow_right ? ` shadow-blue-right ` : ` shadow-dark-pink-left`
          } grid sm:grid-cols-5 max-w-[1345px] mx-auto xl:ps-14 xl:pe-7 xl:py-[70px] lg:ps-12 lg:pe-5 lg:py-[50px] md:rounded-30px rounded-[20px] border border-black  bg-white text-color-1 relative`}
        >
          <div className="col-span-3">
            <h2
              className={`${classes.growth_engine_title} text-40px font-semibold `}
            >
              {title}
            </h2>
            <p className={`${classes.growth_engine_desc} text-3xl my-5 `}>
              {description}
            </p>
            <Link href={buttonLink}>
              <button className="bg-color-1 rounded-full text-white text-base  md:py-[5px] md:ps-4 py-[3px] ps-[13px] pe-[5px] md:pe-0 w-fit flex gap-2 items-center">
                {buttonName}{" "}
                <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-lg">
                  <GoArrowRight />
                </span>
              </button>
            </Link>
          </div>
          <div
            className={`${classes.grow_image} absolute -bottom-40 right-0 sm:block hidden`}
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
        <div
          className={`${classes.growth_engine} ${
            shadow_right ? ` shadow-dark-pink-left ` : `shadow-blue-right`
          } max-w-[1345px] mx-auto xl:ps-14 xl:pe-7 xl:py-[70px] lg:ps-12 lg:pe-5 lg:py-[50px] md:rounded-30px rounded-[20px]  border border-black  bg-white text-color-1`}
        >
          <h2
            className={`${classes.growth_engine_title} text-40px font-semibold `}
          >
            {title} 
          </h2>
          <p className={`${classes.growth_engine_desc} text-3xl my-5 xl:mt-[50px] lg:mt-[40px] md:mt-[30px]`}>
            {description}
          </p>
          <Link href={buttonLink}>
            <button
              className="bg-color-1 rounded-full text-white text-base md:py-[5px] md:ps-4 py-[3px] ps-[13px] pe-[5px] md:pe-0 w-fit flex gap-2 items-center"
              type="button"
            >
              {buttonName}{" "}
              <span className="md:p-1 p-[2px] bg-white rounded-full text-black me-0 md:me-[6px] text-lg">
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
