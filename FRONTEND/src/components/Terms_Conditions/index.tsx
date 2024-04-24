import React from "react";
import classes from "./Terms_Conditions.module.css";
import Boxes from "./Boxes";
import { TermsAndConditionsType } from "../../../lib/interface";

function Terms_Conditions({ data }: { data: TermsAndConditionsType }) {
  return (
    <div className="main_padding">
      <div className="main_container">
        <div className={`${classes.Careerbanner}`}>
          <div className="">
            <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px text-35px mb-5 xl:mt-[95px] lg:mt-[70px] md:mt-[55px] mt-[30px]">
              {data.heading}
            </h1>
          </div>
        </div>
      </div>
      <div className="main_container">
        <div
          className={`${classes.box_bg_image} xl:mt-[66px] lg:mt-[55px] md:mt-[45px] mt-[30px] rounded-30px h-[500px] md:h-[680px] pt-[86px]`}
        ></div>
        <div className="max-w-[1355px] mx-auto -mt-[482px] md:-mt-[650px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-5 font-mono mx-auto mt-[80px]">
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
