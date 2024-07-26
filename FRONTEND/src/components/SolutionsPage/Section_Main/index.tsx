import React, { useEffect, useState } from "react";
import classes from "./Section_Main.module.css";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";
import { SolSection_Main, SolSection_Main_Card } from "../../../../lib/interface";

function Section_Main({ data, card }: { data: SolSection_Main, card: SolSection_Main_Card[] }) {
  const [animateIndex, setAnimateIndex] = useState(0);
  const textInTimer = 3000;

  useEffect(() => {
    const handleAnimation = () => {
      const timeoutId = setTimeout(() => {
        setAnimateIndex(prev => (prev + 1) % (data.upperTitle.switcher ? data.upperTitle.switcher.length : [].length));
      }, textInTimer);
      return timeoutId;
    };
    const timeoutId = handleAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [animateIndex, textInTimer]);



  return <div className="main_padding">
    <div className={`${classes.SingleIntro} bg-color-1 main_container  lg:rounded-30px md:rounded-[20px] rounded-[15px]`} data-aos="fade-up"  >
      <div className={`${classes.single_container}`}>
        <div className={`${classes.solution_box}  mx-auto `}>
          <div className={`${classes.animationDiv} font-mono`} >
            <div className={`${classes.animationFullText} mx-auto text-white  font-semibold text-center  flex-col md:flex-row `}>
              <h2 className="flex md:gap-4 flex-wrap justify-center text-center">
                {data.upperTitle.title}

                <span className={`${classes.animatedText}  `}>
                  {data?.upperTitle.switcher?.map((text: any, idx: any) => (
                    <span key={idx} className={`${idx === animateIndex ? classes.textIn : classes.textOut}  text-color-7`}>
                      {text}
                    </span>
                  ))}
                </span>
              </h2>
            </div>
          </div>
          <div className={`${classes.solution_box_text} mx-auto min-tb:max-tb:mt-0 min-tb:max-tb:px-[67px] max-w-[1027px] xl:mt-[215px] lg:mt-[100px] md:mt-[90px] mt-[65px]`} data-aos="fade-up" data-aos-delay="280">
            <h2 className={`${classes.solution_heading} font-mono italic font-semibold   text-white mx-auto text-center`}>
              {data.heading}
            </h2>
            <div className="md:px-16 min-tb:max-tb:px-[0px] px-4">
              <p className={`${classes.solution_description}  font-mono text-color-9 mx-auto  border-t border-color-9 text-center  `}>
                {data.belowLine}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main_padding">
      <div className={`${classes.growth_card_div}`}>
        <div
          className={`${classes.box_div} ${classes.card_div} max-w-[1345px] font-mono  mx-auto grid `}
        >
          <Growth_engine
            has_image={false}
            shadow_right={false}
            props={{
              title: card[0].card.heading,
              description: card[0].card.description,
              buttonName: card[0].card.buttonName,
              buttonLink: `/solutions/${card[0].slug.current}`,
              image: card[0].card?.image ? urlFor(card[0].card.image).url() : "",
            }}
          />

          <div className={` ${classes.grid_card_div} ${classes.card_div}  grid grid-cols-1 min-tb:max-tb:grid-cols-1 md:grid-cols-2  md:gap-[42px] sm:gap-[30px] gap-[26px] max-w-[1345px] mx-auto `}>
            <Growth_engine
              has_image={false}
              shadow_right={true}
              props={{
                title: card[1].card.heading,
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
                title: card[2].card.heading,
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
              title: card[3].card.heading,
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
                    title: item.card.heading,
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
  </div>
}

export default Section_Main;