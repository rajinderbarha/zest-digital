import { useEffect, useState } from "react";
import Growth_engine from "@/common/Growth_engine";
import classes from "./growthcard.module.css";
import { urlFor } from "../../../lib/sanity.client";
import { HomepageGrowthCard } from "../../../lib/interface";
import Link from "next/link";

const HomeGrowthCard = ({ card }: HomepageGrowthCard) => {
  const [animateIndex, setAnimateIndex] = useState(0);
  const textInTimer = 3000;

  useEffect(() => {
    const handleAnimation = () => {
      const timeoutId = setTimeout(() => {
        setAnimateIndex(prev => (prev + 1) % (card?.switcher ? card.switcher.length : [].length));
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

  return <div className="main_padding lg:my-[47px] md:my-[35px] min-tb:max-tb:my-[42px] sm:my-[25px] my-[15px] " data-aos="fade-up">
    <div className="text-white main_container ">
      <div
        className={`${classes.growth_result} bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px font-mono `}
      >
        <div className={`${classes.animationDiv}`}>
          <div className={`${classes.animationFullText} mx-auto   font-semibold text-center  flex-col md:flex-row `}>
            <h2 className="flex md:gap-4 flex-wrap justify-center text-center">
              {heading}

              <span className={`${classes.animatedText}  `}>
                {card?.switcher?.map((text: any, idx: any) => (
                  <span key={idx} className={`${idx === animateIndex ? classes.textIn : classes.textOut}  text-color-3`}>
                    {text}
                  </span>
                ))}
              </span>
            </h2>
          </div>
        </div>

        <div className={`${classes.growth_grid}`} >
          {horizontalbars?.map(
            ({ SingleCaseStudyCard: { slug, upperTitle, card: { heading, belowHeading, homepageCardDesc } } }: any, index: any) => {
              const cleanedUpperTitle = upperTitle.replace(/[()]/g, '').trim();

              if (index == 0) {
                outerSpan = "md:col-span-6 growth_grid_1";
                innerSpan = "md:col-span-6";
              } else if (index == 1) {
                outerSpan = "md:col-span-7 growth_grid_2";
                innerSpan = "md:col-span-5";
              } else if (index == 2) {
                outerSpan = "md:col-span-8 growth_grid_3";
                innerSpan = "md:col-span-4";
              }
              return (
                <div key={index} className="grid gap-10 pe-5" data-aos="fade-right">
                  <div className="grid md:grid-cols-12 md:gap-6 gap-[13px]">
                    <div
                      className={`${outerSpan} ${classes.box_size}  bg-white flex justify-between items-center text-color-1 lg:rounded-r-[30px] md:rounded-r-[20px] rounded-r-[10px] `}
                    >
                      <div className={`${classes.card_heading} font-semibold  `}>
                        {heading} {belowHeading}
                      </div>
                      <Link href={`/casestudies/${slug}`}>
                        <div className="xl:w-[60px] md:w-[55px]  w-[40px] group min-tb:max-tb:w-[55px] arrow_div" >

                          <svg id="Component_11_1" data-name="Component 11 – 1" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" className="xl:w-[60px] md:w-[55px]  w-[40px] min-tb:max-tb:w-[55px]">
                            <circle id="Ellipse_2" data-name="Ellipse 2" cx="30" cy="30" r="30" fill="#e43fa8" />
                            <g id="Icon_feather-arrow-down-right" data-name="Icon feather-arrow-down-right" transform="translate(19 19)">
                              <path id="Path_4" data-name="Path 4" d="M10.5,32.5l22-22" transform="translate(-10.5 -10.5)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                              <path id="Path_5" data-name="Path 5" d="M32.5,32.5v-22h-22" transform="translate(-10.5 -10.5)" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                            </g>
                          </svg>

                        </div>
                      </Link>
                    </div>
                    <div
                      className={`${innerSpan} ${classes.card_text}  ps-[20px] md:ps-0  self-center md:self-center md:justify-self-start  md:text-start  justify-self-start`}
                    >
                      <h3 className={`${classes.upper_title} font-medium`}>
                        {cleanedUpperTitle}
                      </h3>
                      <p className={`${classes.card_desc} `}>
                        {homepageCardDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className={`${classes.growth_container} main_padding`}>
        <div className={`${classes.growth_container_card_div}`}>
          <div
            className={`${classes.card_div} grid md:gap-[45px] sm:gap-[45px] gap-[26px] font-mono mx-auto`}
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

              }} />

            <div className={`${classes.card_div} ${classes.grid_card_div} grid grid-cols-1 min-tb:max-tb:grid-cols-1 md:grid-cols-2  md:gap-10 sm:gap-[30px] gap-[26px] max-w-[1345px] mx-auto `}>
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
  </div>
};

export default HomeGrowthCard;
