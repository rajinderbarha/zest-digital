import React from "react";
import classes from "../singlebox.module.css";
import Image from "next/image"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../../../../lib/sanity.client";
import { Card } from "../../../../../lib/interface";
function objective({ sectionCard }: {sectionCard:Card[]}) {
  // console.log("sectionCard", sectionCard)
  return (
    <>
      {sectionCard.map((item: any, index: number) => {
        return (
          <div
            className={`${classes.objective} max-w-[1545px] mx-auto `}
            key={index}
          >
            {index % 2 === 0 ? (
              <div
                className={`grid md:grid-cols-2 rounded-[20px] md:rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-blue-right md:gap-10 gap-[10px]`}
              >
                <div className="col-span-1">
                  <h2 className={`${classes.box_tittle}`}>
                    {item.heading}
                  </h2>
                  <div className={`${classes.box_detail}`}>
                    <BlockContent blocks={item.description} />
                  </div>
                </div>
                <div className="col-span-1 self-center">
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
                className={`grid md:grid-cols-2 ${classes.objective_inner} shadow-dark-pink-left `}
              >
                <div className="col-span-1 order-2 md:order-1 self-center">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="case study"
                    width={600}
                    height={600}
                    className="ms-auto"
                  />
                </div>
                <div className="col-span-1 md:text-right order-1 md:order-2">
                  <h2 className={`${classes.box_tittle}`}>
                    {item.heading}
                  </h2>
                  <div className={`${classes.box_detail} `}>
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
