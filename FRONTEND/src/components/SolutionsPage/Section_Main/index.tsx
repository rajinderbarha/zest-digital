import React, { useEffect, useState } from "react";
import classes from "./Section_Main.module.css";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";
import { SolSection_Main, SolSection_Main_Card } from "../../../../lib/interface";

function Section_Main({ data, card }: { data: SolSection_Main, card: SolSection_Main_Card[] }) {


  const texts = ["Wear ", "Cover Face ", "Wash Your "];
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



  return (
    <>
      <div className="main_padding">
        <div className={`${classes.SingleIntro} bg-color-1 main_container  lg:rounded-30px md:rounded-[20px] rounded-[15px]`} data-aos="fade-up"  >
          <div className={`${classes.single_container}`}>
            {/* <div className={`max-w-[1099px] mx-auto xl:pt-[126px] lg:pt-[100px] min-tb:max-tb:pb-[300px] md:pt-[75px] sm:pt-[50px] pt-[50px] md:pb-[368px] pb-[240px]`}> */}
            <div className={`${classes.solution_box}  mx-auto `}>


              

              {/* <div className={`${classes.animationDiv}`}>
                <div className={`${classes.animationFullText} mx-auto   md:mb-[0px] md:w-fit lg:w-fit w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row min-tb:max-tb:pb-[95px] md:px-0 px-[22px] xl:pb-[160px] lg:pb-[120px] md:pb-[80px]  pb-[50px]`}>
                <h2 className="xl:text-45px min-tb:max-tb:px-4 lg:text-40px md:text-35px sm:text-25px min-tb:max-tb:text-25px text-[18px] text-white font-mono flex md:gap-4 flex-wrap justify-center  text-center">
                {data.upperTitle.title}
             
                    <span className={`${classes.animatedText} xl:w-[177px] min-tb:max-tb:text-25px min-tb:max-tb:leading-[36px] lg:w-[160px] md:w-[140px] `}>
                    {data?.upperTitle.switcher?.map((text: any, idx: any) => (
                            <span key={idx} className={ `${ idx === animateIndex ? classes.textIn : classes.textOut }  xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[18px]  text-color-7`}>
                                {text}
                            </span>
                        ))}
                    </span>
                    </h2>
             </div>
         </div> */}

<div className={`${classes.animationDiv} font-mono`} >
                {/* <div className={`${classes.animationFullText} mx-auto   md:mb-[0px] md:w-fit lg:w-fit w-full font-semibold text-center max-w-[500px]  md:max-w-none flex-col md:flex-row md:px-0 px-[22px] xl:pb-[160px] lg:pb-[120px] md:pb-[80px]  pb-[50px]`}> */}
                <div className={`${classes.animationFullText} mx-auto text-white  font-semibold text-center  flex-col md:flex-row `}>
                {/* <h2 className="xl:text-45px lg:text-40px px-4 md:text-35px min-tb:max-tb:text-25px sm:text-25px text-[18px] flex md:gap-4 flex-wrap justify-center text-center"> */}
                <h2 className="flex md:gap-4 flex-wrap justify-center text-center">
                {data.upperTitle.title}
             
                    <span className={`${classes.animatedText}  `}>
                        {data?.upperTitle.switcher?.map((text: any, idx: any) => (
                            <span key={idx} className={ `${ idx === animateIndex ? classes.textIn : classes.textOut }  text-color-7`}>
                                {text}
                            </span>
                        ))}
                    </span>
                    </h2>
             </div>
         </div>


              {/* <div className={`${classes.animationDiv}`}>
                <div className={`${classes.animationFullText} mx-auto  md:w-fit lg:w-fit w-full font-semibold text-center max-w-[460px] sm:max-w-[500px]  md:max-w-none  md:px-0 px-[22px]`}>
                  <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[18px]  text-white font-mono flex md:gap-4 justify-center  flex-wrap mx-auto text-center ">
                    {data.upperTitle.title}

                    <p className={`${classes.animatedText}  xl:w-[177px] lg:w-[160px] md:w-[140px] mx-auto`}>
                      {data?.upperTitle.switcher?.map((text: any, idx: any) => (
                        <span key={idx} className={` ${idx === animateIndex ? classes.textIn : classes.textOut}  xl:text-45px lg:text-40px md:text-35px sm:text-25px text-[18px]   text-color-7`}>
                          {text}
                        </span>
                      ))}
                    </p>
                  </h2>
                </div>
              </div> */}

              <div className=" mx-auto min-tb:max-tb:mt-0 min-tb:max-tb:px-[67px] max-w-[1027px] xl:mt-[215px] lg:mt-[100px] md:mt-[90px] mt-[60px]" data-aos="fade-up" data-aos-delay="280">
                {/* <h2 className="font-mono min-tb:max-tb:text-25px min-tb:max-tb:px-[0px] italic font-semibold sm:text-25px text-[18px]  md:text-35px leading-normal lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-[16px] sm:px-[40px] pb-[24px]"> */}
                <h2 className={`${classes.solution_heading} font-mono italic font-semibold   text-white mx-auto text-center`}>
                  {data.heading}
                </h2>
                <div className="md:px-16 min-tb:max-tb:px-[0px] px-4">
                  {/* <p className="md:text-base  text-[10px] leading-normal min-tb:max-tb:text-[12px] font-mono text-color-9 mx-auto  border-t border-color-9 text-center pt-3 "> */}
                  <p className={`${classes.solution_description}  font-mono text-color-9 mx-auto  border-t border-color-9 text-center  `}>
                    {data.belowLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_padding">
        <div
          // className={`max-w-[1345px] font-mono  mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] lg:-mt-64 md:-mt-[200px] -mt-[165px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px]  `}
          className={`${classes.box_div} max-w-[1345px] font-mono  mx-auto grid md:gap-10 sm:gap-[30px] gap-[20px] lg:-mt-64 md:-mt-[200px] -mt-[165px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px]  `}
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

          <div className="grid grid-cols-1 min-tb:max-tb:grid-cols-1 md:grid-cols-2  md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1345px] mx-auto ">
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
    </>
  );
}

export default Section_Main;