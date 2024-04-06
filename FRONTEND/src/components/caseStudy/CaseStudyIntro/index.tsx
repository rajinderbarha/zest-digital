import React from "react";
import Image from "next/image";
import classes from "./CaseStudyIntro.module.css";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity.client";

function Casestudyintro({ data }: any) {
  return (
    <>
      <div className={`${classes.Casestudyintro}`}>
        <div className="main_container">
          <div className="grid md:grid-cols-12 ">
            <div className="md:col-span-8">
              <h1 className="font-mono font-semibold md:text-55px text-35px mb-5">
                {data.heading}
              </h1>
              <Link href={data.buttonLink}>
                {" "}
                <button className="font-mono text-base px-21px h-10 text-white bg-color-1 rounded-full  hover:text-color-1 hover:bg-white border border-color-1 ">
                  {data.buttonName}
                </button>
              </Link>
            </div>
            <div className="md:col-span-4 ">
              <Image
                className="md:ms-auto mx-auto"
                src={urlFor(data.image).url()}
                alt="hero img"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Casestudyintro;
