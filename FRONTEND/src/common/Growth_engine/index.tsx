import React from "react";
import classes from "./growthEngine.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";

interface GrowthEngineProps {
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
          className={`${classes.growth_engine} ${
            shadow_right ? ` shadow-compo1 ` : `shadow-compo`
          } grid sm:grid-cols-5 max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px  border border-black  bg-white text-color-1 relative`}
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
            <div className="">
              <button className="bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center">
                {buttonName}{" "}
                <span className="p-1 bg-white rounded-full text-black me-2 text-lg">
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div
            className={`${classes.grow_image} absolute -bottom-40 right-0 sm:block hidden`}
          >
            {image && (
              <Image
                src={urlFor(image).url()}
                alt="growth img"
                width={300}
                height={300}
              />
            )}
          </div>
        </div>
      ) : (
        <div
          className={`${classes.growth_engine} ${
            shadow_right ? ` shadow-compo1 ` : `shadow-compo`
          } max-w-[1345px] mx-auto ps-14 pe-7 py-[70px] rounded-30px border border-black  bg-white text-color-1`}
        >
          <h2
            className={`${classes.growth_engine_title} text-40px font-semibold `}
          >
            {title}
          </h2>
          <p className={`${classes.growth_engine_desc} text-3xl my-5 `}>
            {description}
          </p>
          <Link href={`/${buttonLink}`}>
            <button
              className="bg-color-1 rounded-full text-white text-base py-[7px] ps-5 flex gap-2 items-center"
              type="button"
            >
              {buttonName}{" "}
              <span className="p-1 bg-white rounded-full text-black me-2 text-lg">
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
