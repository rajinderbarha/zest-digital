import React from "react";
import classes from "./Section_Main.module.css";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";

function Section_Main({ data, card }: any) {
  
// console.log("000000000000000000000000000", card[2].card?.image)
// console.log("--------------------------",card.map(item =>( item)))
  return (
    <>
        <div className="main_padding">
        <div className={`${classes.SingleIntro}  main_container  md:rounded-30px rounded-[20px]`}>
          <div className={`${classes.single_container}`}>
            <div className="max-w-[1099px] mx-auto lg:pt-[126px] md:pt-[90px] pt-[60px] md:pb-[368px] pb-[290px]">
              <div className="flex gap-4 items-center  mx-auto md:w-max w-full font-semibold text-center max-w-[550px]  md:max-w-none flex-col md:flex-row">
                <h2 className="min-1350:text-45px md:text-4xl md:max-970:text-[32px]  text-[25px] text-white font-mono">
                  {data.upperTitle.title}
                </h2>
                <div className=" ">
                  {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>mapper</h2> */}
                  <h2 className="min-1350:text-45px md:text-4xl md:max-970:text-[29px] text-[25px] text-color-7 font-mono">
                    {data.upperTitle.switcher[0]}
                  </h2>
                  {/* <h2 className='min-1350:text-40px md:text-3xl text-color-4'>tracker</h2> */}
                </div>
              </div>
              <div className=" mx-auto max-w-[1027px] xl:mt-[215px] lg:mt-[180px] md:mt-[130px] mt-[80px]">
                <h2 className="font-mono italic font-semibold text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6">
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
          className={`max-w-[1345px] font-mono  mx-auto grid gap-10 lg:-mt-64 md:-mt-[200px] -mt-[165px] px-5 overflow-x-clip `}
        >
        <Growth_engine
          has_image={false}
          shadow_right={false}
          props={{
            title: card[0].card.heading,
            description:card[0].card.description,
            buttonName: card[0].card.buttonName,
            buttonLink: `/solutions/${card[0].slug.current}`,
            image: card[0].card?.image ? urlFor( card[0].card.image).url():"",          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
          <Growth_engine
            has_image={false}
            shadow_right={true}
            props={{
              title: card[1].card.heading,
              description:  card[1].card.description,
              buttonName:  card[1].card.buttonName,
              buttonLink: `/solutions/${card[1].slug.current}`,
              image: card[1].card?.image ? urlFor( card[1].card.image).url():"",            }}
          />

          <Growth_engine
            has_image={false}
            shadow_right={false}
            props={{
              title: card[2].card.heading,
              description:  card[2].card.description,
              buttonName:  card[2].card.buttonName,
              buttonLink: `/solutions/${card[2].slug.current}`,
              image: card[2].card?.image ? urlFor( card[2].card.image).url():"",
            }}
          />
        </div>

        <Growth_engine
          has_image={true}
          shadow_right={false}
          props={{
            title:  card[3].card.heading,
            description: card[3].card.description,
            buttonName:  card[3].card.buttonName,
            buttonLink: `/solutions/${card[3].slug.current}`,
            image: urlFor( card[3].card.image).url(),
          }}
        />
        {card.length > 4 && card.slice(3).map((item: any, index: number) => {
          return (
            <div key={index}>
              <Growth_engine
                has_image={true}
                shadow_right={false}
                props={{
                  title: item.card.heading,
                  description: item.card.description,
                  buttonName: item.card.buttonName,
                  buttonLink: `/solutions/${item.slug.current}`,
                  image: item.card?.image ? urlFor( item.card.image).url():"",                }}
              />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Section_Main;