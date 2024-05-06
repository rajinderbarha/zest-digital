import React from "react";
import classes from "./Terms_Conditions.module.css";
import Boxes from "./Boxes";
import { TermsAndConditionsType } from "../../../lib/interface";

function Terms_Conditions({ data }: { data: TermsAndConditionsType }) {
  return (
    <div className="term_condition main_padding xl:mb-[216px] lg:mb-[160px] md:mb-[110px] sm:mb-[90px] mb-[80px]">
      <div className="main_container">
        <div className={`${classes.Careerbanner}`}>
          <div className="">
          <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[30px] mb-5 xl:mt-[95px] lg:mt-[70px] md:mt-[55px] mt-[30px]">
                {data.heading}
              </h1>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div
          className={`${classes.box_bg_image} xl:mt-[66px] lg:mt-[55px] md:mt-[45px] mt-[30px] rounded-[20px] md:rounded-30px h-[500px] md:h-[680px] pt-[86px]`}
        ></div>
        <div className="max-w-[1355px] mx-auto -mt-[482px] md:-mt-[650px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] px-4 md:px-5 font-mono mx-auto mt-[80px]">
            {data.cards.map((card: any, cardIndex: number) => (
              <Boxes
                key={cardIndex}
                title={card?.title || ""}
                smallDescription={card?.smallDescription || ""}
                shadow_right={cardIndex % 2 === 0} // Shadow alternating sides
                buttonName={card?.buttonName || ""}
                buttonLink={card?.slug.current}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms_Conditions;
