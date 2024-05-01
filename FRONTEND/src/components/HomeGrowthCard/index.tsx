import React, { useEffect, useState } from "react";
import Image from "next/image";
import arrow from "../../assets/images/arrow.svg";
import hover_arrow from "../../assets/images/hover_arrow.svg";
import Growth_engine from "@/common/Growth_engine";
import classes from "./growthcard.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { HomepageGrowthCard } from "../../../lib/interface";

const HomeGrowthCard = ({ card }: HomepageGrowthCard) => {


  const texts = ["Wear ", "Cover Face ", "Wash Your "];
  const [animateIndex, setAnimateIndex] = useState(0);
  const textInTimer = 3000; 

  useEffect(() => {
      
      const handleAnimation = () => {
          const timeoutId = setTimeout(() => {
              setAnimateIndex(prev => (prev + 1) % ( card.switcher ? card.switcher.length: [].length));
          }, textInTimer);
          return timeoutId; 
      };

      const timeoutId = handleAnimation(); 

      return () => {
          clearTimeout(timeoutId); 
      };
  }, [animateIndex, textInTimer]); 




  const { heading, horizontalbars } = card;

  let outerSpan: string;
  let innerSpan: string;
  return (
    <>
      <div className="main_padding lg:my-[47px] md:my-[35px] sm:my-[25px] my-[15px] ">
        <div className="text-white main_container ">
          <div
            className={`${classes.growth_result} bg-color-1 rounded-[20px] md:rounded-30px font-mono xl:pt-[131px] lg:pt-[110px] md:pt-[75px] sm:pt-[35px] pt-[30px] lg:pb-[384px] sm:pb-[300px] pb-[250px]`}
          >
            <div className={`${classes.animationDiv}`}>
                <div className={`${classes.animationFullText} mx-auto   md:mb-[0px] md:w-fit lg:w-fit w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row md:px-0 px-[22px] xl:pb-[160px] lg:pb-[120px] md:pb-[80px]  pb-[50px]`}>
                <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px flex md:gap-4 flex-wrap  text-center">
                {heading}
             
                    <p className={`${classes.animatedText} md:w-[177px]`}>
                        {card?.switcher?.map((text: any, idx: any) => (
                            <span key={idx} className={ `${ idx === animateIndex ? classes.textIn : classes.textOut }  xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px  text-color-3`}>
                                {text}
                            </span>
                        ))}
                    </p>
                    </h2>
             </div>
         </div>

            <div className={`${classes.growth_grid}`}>
              {horizontalbars?.map(
                ({ numHeading, desc, title }: any, index: any) => {
                  if (index == 0) {
                    outerSpan = "md:col-span-6 ";
                    innerSpan = "md:col-span-6";
                  } else if (index == 1) {
                    outerSpan = "md:col-span-7 ";
                    innerSpan = "md:col-span-5";
                  } else if (index == 2) {
                    outerSpan = "md:col-span-8 ";
                    innerSpan = "md:col-span-4";
                  }
                  return (
                    <div key={index} className="grid gap-10 pe-5">
                      <div className="grid md:grid-cols-12 gap-[5px] md:gap-6 ">
                        <div
                          className={`${outerSpan} ${classes.box_size} group p-[10px] sm:p-5 bg-white flex justify-between items-center text-color-1 min-1350:p-12 md:p-[35px] lg:rounded-r-[30px] md:rounded-r-[20px] rounded-r-[10px] `}
                        >
                          <div className="font-semibold md:ps-16 sm:ps-5 ps-0 min-1350:text-35px md:text-[25px] md:max-970:text-[18px] md:max-800:text-[17px] sm:text-25px text-[20px]">
                            {numHeading}
                          </div>
                          <div className="min-1350:w-auto md:w-10 max-970:w-9  ">
                            
                            <Image src={arrow} alt=""  className="group-hover:hidden"/>
                            <Image src={hover_arrow} alt=""  className="text-[10px] group-hover:block hidden"/>
                          </div>
                        </div>
                        <div
                          className={`${innerSpan} ps-[20px] md:ps-0 md:max-w-[442px] self-center md:self-center md:justify-self-start  sm:max-w-[550px] md:text-start  justify-self-start`}
                        >
                          <h3 className="text-[30px] md:max-970:text-[23px] ">
                            {title}
                          </h3>
                          <p className="text-base  md:max-970:text-[14px] md:max-970:leading-4 leading-5">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* <div className="md:px-10 sm:px-[35px] px-[15px]"> */}
          <div className={`${classes.growth_container} main_padding`}>
            <div
              className={`max-w-[1345px] font-mono  mx-auto grid gap-10 lg:-mt-64 md:-mt-[200px] -mt-[150px] `}
            >
              <Growth_engine
                has_image={false}
                shadow_right={false}
                props={{
                  title: card.growthcard[0].card.heading,
                  description: card.growthcard[0].card.description,
                  buttonName: card.growthcard[0].card.buttonName,
                  buttonLink: `/solutions/${card.growthcard[0].slug}`,
                  image: card.growthcard[0].card.image
                    ? urlFor(card.growthcard[0].card.image).url()
                    : "",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1345px] mx-auto ">
                <Growth_engine
                  has_image={false}
                  shadow_right={true}
                  props={{
                    title: card.growthcard[1].card.heading,
                    description: card.growthcard[1].card.description,
                    buttonName: card.growthcard[1].card.buttonName,
                    buttonLink: `/solutions/${card.growthcard[1].slug}`,
                    image: card.growthcard[1].card.image
                      ? urlFor(card.growthcard[1].card.image).url()
                      : "",
                  }}
                />

                <Growth_engine
                  has_image={false}
                  shadow_right={false}
                  props={{
                    title: card?.growthcard[2].card.heading,
                    description: card?.growthcard[2].card.description,
                    buttonName: card?.growthcard[2].card.buttonName,
                    buttonLink: `/solutions/${card.growthcard[2].slug}`,
                    image: card?.growthcard[2].card.image
                      ? urlFor(card?.growthcard[2].card.image).url()
                      : "",
                  }}
                />
              </div>

              <Growth_engine
                has_image={true}
                shadow_right={false}
                props={{
                  title: card?.growthcard[3].card.heading,
                  description: card?.growthcard[3].card.description,
                  buttonName: card?.growthcard[3].card.buttonName,
                  buttonLink: `/solutions/${card.growthcard[3].slug}`,
                  image: card?.growthcard[3].card.image
                    ? urlFor(card?.growthcard[3].card.image).url()
                    : "",
                }}
              />
              {card?.length && card?.length > 4 &&
               card.slice && card?.slice(3).map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      <Growth_engine
                        has_image={true}
                        shadow_right={false}
                        props={{
                          title: item.card?.heading,
                          description: item.card?.description,
                          buttonName: item.card?.buttonName,
                          buttonLink: `/solutions/${item.slug.current}`,
                          image: item.card?.image
                            ? urlFor(item.card?.image).url()
                            : "",
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeGrowthCard;
