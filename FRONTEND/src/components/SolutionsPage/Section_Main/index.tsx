import React from "react";
import classes from "./Section_Main.module.css";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";

function Section_Main({ data, card }: any) {


console.log("card", card)

  return (
    <>
      <div className={`${classes.SingleIntro}  main_container   rounded-30px`}>
        <div className={`${classes.single_container}`}>
          <div className="max-w-[1099px] mx-auto pt-[126px] pb-[368px]">
            <div className="flex gap-4 items-center  mx-auto md:w-max w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row">
              <h2 className="min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl text-white font-mono">
                {data.upperTitle.title}
              </h2>
              <div className=" ">
                {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>mapper</h2> */}
                <h2 className="min-1350:text-45px md:text-4xl md:max-970:text-[29px] sm:text-2xl text-xl text-color-7 font-mono">
                  {data.upperTitle.switcher[0]}
                </h2>
                {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>tracker</h2> */}
              </div>
            </div>
            <div className=" mx-auto max-w-[1027px] md:mt-[215px] mt-[100px]">
              <h2 className="font-mono  font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6">
                {data.heading}
              </h2>
              <div className="px-16">
                <p className="text-base font-mono text-color-9 mx-auto  border-t border-color-9 text-center pt-3 ">
                  {data.belowLine}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-w-[1345px] font-mono  mx-auto grid gap-10 -mt-64 px-10`}
      >
        {card.map((item: any, index: number) => {
          if (index === 0) {
            return (
              <Growth_engine
                has_image={false}
                shadow_right={true}
                props={{
                  title: item.card.heading,
                  description: item.card.description,
                  buttonName: item.card.buttonName,
                  buttonLink: item.slug.current,
                  image: urlFor(item.card.image).url(),
                }}
              />
            );
          } else if (index <=2 ) {
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
                <Growth_engine
                  has_image={false}
                  shadow_right={false}
                  props={{
                    title: item.card.heading,
                    description: item.card.description,
                    buttonName: item.card.buttonName,
                    buttonLink: item.slug.current,
                    image: urlFor(item.card.image).url(),
                  }}
                />
               {<Growth_engine
                  has_image={false}
                  shadow_right={true}
                  props={{
                    title: item.card.heading,
                    description: item.card.description,
                    buttonName: item.card.buttonName,
                    buttonLink: item.slug.current,
                    image: urlFor(item.card.image).url(),
                  }}
                />}
              </div>
            );
          } else if(index===3) {
            return ( 
              <Growth_engine
              has_image={true}
              shadow_right={false}
              props={{
                title: item.card.heading,
                description: item.card.description,
                buttonName: item.card.buttonName,
                buttonLink: item.slug.current,
                image: urlFor(item.card.image).url(),
              }}
            />
            );
          }
        })}
      </div>
    </>
  );
}

export default Section_Main;
