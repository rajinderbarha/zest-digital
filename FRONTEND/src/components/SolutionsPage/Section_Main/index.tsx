import React, { useEffect, useState } from "react";
import classes from "./Section_Main.module.css";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";
import { SolSection_Main, SolSection_Main_Card } from "../../../../lib/interface";



function Section_Main({ data, card }: { data: SolSection_Main, card: SolSection_Main_Card[] }) {
  // const texts = ["Wear ", "Cover Face ", "Wash Your "];
  const [animateIndex, setAnimateIndex] = useState(0);
  const textInTimer = 3000;

  useEffect(() => {

    const handleAnimation = () => {
      const timeoutId = setTimeout(() => {
        setAnimateIndex(prev => (prev + 1) % (data.upperTitle.switcher ? data.upperTitle.switcher.length : 0));
      }, textInTimer);
      return timeoutId;
    };

    const timeoutId = handleAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animateIndex, textInTimer]);



  return (
    <>
      <div className="main_padding">
        <div className={`${classes.SingleIntro}  main_container  md:rounded-30px rounded-[20px]`}>
          <div className={`${classes.single_container}`}>
            <div className="max-w-[1099px] mx-auto xl:pt-[126px] lg:pt-[100px] md:pt-[75px] sm:pt-[35px] pt-[30px] md:pb-[368px] pb-[290px]">
              {/* <div className="  flex gap-[18px] mx-auto mb-[130px] md:mb-[0px] md:w-fit lg:w-fit w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row md:px-0 px-[22px] ">
                <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px xl:-ms-[200px] lg:-ms-[140px] md:-ms-[120px] text-white font-mono">
                  {data.upperTitle.title}
                </h2>
                <div className={`${classes.cards} relative w-fit `}>
                  {data?.upperTitle.switcher?.map((item: any, index: any) => (
                    <div className={`${classes.card} `}>

                      <h2
                        key={index}
                        className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px  text-color-7"
                      >
                        {item}
                      </h2>
                    </div>
                  ))}
                </div>
              </div> */}
              <div className={`${classes.animationDiv}`}>
                <div className={`${classes.animationFullText} mx-auto  md:w-fit lg:w-fit w-full font-semibold text-center max-w-[500px]  md:max-w-none  md:px-0 px-[22px]`}>
                  <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px  text-white font-mono flex md:gap-4 justify-normal  flex-wrap mx-auto text-center ">
                    {data.upperTitle.title}

                    <p className={`${classes.animatedText}  md:w-[177px] mx-auto`}>
                      {data?.upperTitle.switcher?.map((text: any, idx: any) => (
                        <span key={idx} className={`${idx === animateIndex ? classes.textIn : classes.textOut} xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px  text-color-7`}>
                          {text}
                        </span>
                      ))}
                    </p>
                  </h2>
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
        <div className="main_padding">
          <div
            className={`max-w-[1345px] font-mono  mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] lg:-mt-64 md:-mt-[200px] -mt-[165px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px] overflow-x-clip `}
          >
            <Growth_engine
              has_image={false}
              shadow_right={false}
              props={{
                // title: card[0].card.heading,                     // This warn is from GrowthEngineProps  typescript
                heading: card[0].card.heading,
                description: card[0].card.description,
                buttonName: card[0].card.buttonName,
                buttonLink: `/solutions/${card[0].slug.current}`,
                image: card[0].card?.image ? urlFor(card[0].card.image).url() : "",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1345px] mx-auto ">
              <Growth_engine
                has_image={false}
                shadow_right={true}
                props={{
                  // title: card[1].card.heading,
                  heading: card[1].card.heading,
                  description: card[1].card.description,
                  buttonName: card[1].card.buttonName,
                  buttonLink: `/solutions/${card[1].slug.current}`,
                  image: card[1].card?.image ? urlFor(card[1].card.image).url() : "",
                }}
              />

              <Growth_engine
                has_image={false}
                shadow_right={false}
                props={{
                  // title: card[2].card.heading,
                  heading: card[2].card.heading,
                  description: card[2].card.description,
                  buttonName: card[2].card.buttonName,
                  buttonLink: `/solutions/${card[2].slug.current}`,
                  image: card[2].card?.image ? urlFor(card[2].card.image).url() : "",
                }}
              />
            </div>

            <Growth_engine
              has_image={true}
              shadow_right={false}
              props={{
                // title: card[3].card.heading,
                heading: card[3].card.heading,
                description: card[3].card.description,
                buttonName: card[3].card.buttonName,
                buttonLink: `/solutions/${card[3].slug.current}`,
                image: urlFor(card[3].card.image).url(),
              }}
            />
            {card.length > 4 && card.slice(3).map((item: any, index: number) => {
              return (
                <div key={index}>
                  <Growth_engine
                    has_image={true}
                    shadow_right={false}
                    props={{
                      // title: item.card.heading,
                      heading: item.card.heading,
                      description: item.card.description,
                      buttonName: item.card.buttonName,
                      buttonLink: `/solutions/${item.slug.current}`,
                      image: item.card?.image ? urlFor(item.card.image).url() : "",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_Main;



