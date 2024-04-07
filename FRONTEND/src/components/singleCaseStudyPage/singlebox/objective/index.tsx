import React from "react";
import classes from "../singlebox.module.css";
import Image from "next/image"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../../../../lib/sanity.client";
function objective({ card }: any) {
  return (
    <>
      {card.map((item: any, index: number) => {
        return (
          <div
            className={`${classes.objective} max-w-[1545px] mx-auto px-12`}
            key={index}
          >
            {index % 2 === 0 ? (
              <div
                className={`grid md:grid-cols-2 items-center rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-compo shadow-compo gap-10`}
              >
                <div className="col-span-1">
                  <h2 className="text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono ">
                    {item.heading}
                  </h2>
                  <div className="font-lato md:text-md  lg:text-lg mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                    <BlockContent blocks={item.description} />
                  </div>
                </div>
                <div className="col-span-1">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="case study"
                    width={600}
                    height={600}
                    className="ms-auto"
                  />
                </div>
              </div>
            ) : (
              <div
                className={`grid md:grid-cols-2 items-center rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-compo1 gap-10`}
              >
                <div className="col-span-1   ">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="case study"
                    width={600}
                    height={600}
                    className="ms-auto"
                  />
                </div>
                <div className="col-span-1 text-right">
                  <h2 className="text-30px md:text-35px lg:text-45px text-color-1 font-semibold font-mono ">
                    {item.heading}
                  </h2>
                  <div className="font-lato md:text-md  lg:text-lg mt-[20px] md:mt-[25px] lg:mt-[48px] ">
                    <BlockContent blocks={item.description} />
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default objective;
