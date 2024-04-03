import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function About_banner({ data }: { data: AboutType[] }) {
  return (
    <>
      <div className={`${classes.About_banner}`}>
        <div className="main_container">
          {data?.map((item, index) => (
            <div
              className="grid md:grid-cols-12 "
              key={`${index}_About_banner`}
            >
              <div className="md:col-span-6">
                <h2 className="md:text-45px text-30px font-mono bg-color-7 w-max px-2">
                  {item.hero.title}
                </h2>
                <h1 className="font-mono font-semibold md:text-55px text-35px mb-5 ">
                  {item.hero.heading}
                </h1>
                {/* <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white hover:border-white border border-color-1 ">Schedule a call</button> */}
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
