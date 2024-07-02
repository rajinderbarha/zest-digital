import React from "react";
import classes from "../singlebox.module.css";
import Image from "next/image"; //@ts-ignore
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../../../../lib/sanity.client";
import { Card } from "../../../../../lib/interface";
function objective({ sectionCard }: {sectionCard:Card[]}) {
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
                className={`grid md:grid-cols-2 max-tb:grid-cols-1 rounded-[20px] md:rounded-30px bg-white ${classes.objective_inner} border border-color-1 shadow-blue-right md:gap-10 max-tb:gap-[20px] gap-[10px]`}
                data-aos="fade-up">
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
                className={`grid md:grid-cols-2 max-tb:grid-cols-1 ${classes.objective_inner} shadow-dark-pink-left `}
                data-aos="fade-up">
                <div className="col-span-1 max-tb:order-2 self-center">
                  <Image
                    src={urlFor(item.image).url()}
                    alt="case study"
                    width={600}
                    height={600}
                    className="ms-auto"
                  />
                </div>
                <div className="col-span-1 text-right max-tb:order-1 ">
                  <h2 className={`${classes.box_tittle}`}>
                    {item.heading}
                  </h2>
                  <div className={`${classes.box_detail} ${classes.right_text} `}>
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
