import React from "react";
import classes from "./SingleInsightPage.module.css";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { urlFor } from "../../../lib/sanity.client"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

function SingleInsightPage({ data }: any) {
  console.log("singleInsights", data);
  return (
    <>
      <div className="SingleInsightPage mt-[50px] md:mt-[100px] main_padding">
        <div className="main_container  ">
          <div
            className={`${classes.bg_image} title-box xl:px-[100px] lg:px-[70px] md:px-[50px] px-[30px] xl:pb-[185px] lg:pb-[155px] md:pb-[130px] pb-[100px] xl:pt-[65px] lg:pt-[55px] md:pt-[45px] pt-[30px] rounded-30px`}
          >
            <p className="font-mono lg:text-35px md:text-30px text-25px font-semibold text-color-7 ">
              {data.hero.keywords[0]}
            </p>
            <h2 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px text-35px text-white max-w-[798px] xl:mt-[45px] lg:mt-[30px] md:mt-[25px] mt-[20px] mb-[20px]">
              {data.hero.heading}
            </h2>
            <div className="md:max-w-max max-w-[35px]">
              <Image
                src={urlFor(data.hero.grow_down).url()}
                alt="grow_down icon"
                width={70}
                height={70}
              />
            </div>
          </div>
          <div
            className={`${classes.Block_Content} mt-[74px] max-w-[1420px] mx-auto grid gap-[40px] md:gap-[100px] px-[5px]`}
          >
            <BlockContent
              blocks={data.content}
              projectId={"dexthfb7"}
              dataset={"production"}
            />
          </div>
          <div
            className={`${classes.Footer_Img} bg-black rounded-30px xl:mb-[245px] lg:mb-[200px] md:mb-[150px] mb-[100px] py-[46px] px-[20px] md:px-[55px] xl:mt-[120px] lg:mt-[95px] md:mt-[70px] mt-[50px] relative flex items-center`}
          >
            <div
              className={`${classes.Zest_symbol_white} w-full absolute top-[27px] left-0 right-0`}
            >
              <Image
                src={urlFor(data.linkSection.icon).url()}
                alt="icon"
                className="mx-auto"
                width={50}
                height={50}
              />
            </div>
            <div
              className={`${classes.Footer_Link} max-w-max ms-auto relative  z-10`}
            >
              <Link
                href={data.linkSection.linkUrl}
                className="border-b border-color-6  font-light w-max text-md lg:text-lg flex items-center gap-1  text-white"
              >
                {" "}
                {data.linkSection.linkName}
                <GoArrowRight />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleInsightPage;
