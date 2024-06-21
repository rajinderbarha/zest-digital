import React from "react";
import classes from "./Terms_Conditions.module.css";
import Boxes from "./Boxes";
import { TermsAndConditionsType } from "../../../lib/interface";

function Terms_Conditions({ data }: { data: TermsAndConditionsType }) {
  // console.log("----------dfata",data.cards[6])
  if (!data) {
    return "Failed to load Terms_Conditions page data" ; // or display a placeholder message
  }
  return (
    <>
    {/* <div className="term_condition main_padding xl:mb-[216px] lg:mb-[160px] md:mb-[110px] sm:mb-[90px] mb-[80px]"> */}
    <div className={`${classes.term_condition} term_condition main_padding `}>
      <div className="main_container">
        <div className={`${classes.Careerbanner}`}>
          <div className="">
          {/* <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] sm:text-35px text-[22px] mb-[30px] xl:mt-[95px] lg:mt-[70px] md:mt-[50px] mt-[30px]"> */}
          <h1 className={`${classes.terms_heading} font-mono font-semibold `}>
                {data.heading}
              </h1>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div
          className={`${classes.box_bg_image} rounded-[15px] md:rounded-[20px] lg:rounded-30px h-[680px] md:h-[936px] lg:h-[680px] `}
        ></div>
        {/* <div className="max-w-[1355px] mx-auto -mt-[626px] md:-mt-[870px] lg:-mt-[600px] main_padding"> */}
        <div className={`${classes.box_div} max-w-[1355px] mx-auto main_padding`}>
          <div className={`${classes.t_and_c_cards} grid  grid-cols-2 max-tb:grid-cols-1 md:gap-10 sm:gap-[30px] gap-[20px]  font-mono mx-auto `}>
            {data.cards.map((card: any, cardIndex: number) => (
              <Boxes
                key={cardIndex}
                title={card?.boxtitle || ""}
                smallDescription={card.reference?.smallDescription || ""}
                shadow_right={cardIndex % 2 === 0} // Shadow alternating sides
                buttonName={card.reference?.buttonName || ""}
                buttonLink={card.reference?.slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Terms_Conditions;
