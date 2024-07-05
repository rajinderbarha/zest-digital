import { useEffect } from "react";
import classes from "./Terms_Conditions.module.css";
import Boxes from "./Boxes";
import { TermsAndConditionsType } from "../../../lib/interface";
import AOS from 'aos'
import 'aos/dist/aos.css';

function Terms_Conditions({ data }: { data: TermsAndConditionsType }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  if (!data) {
    return "Failed to load Terms_Conditions page data";
  }
  return <div className={`${classes.term_condition} term_condition main_padding `}>
    <div className="main_container">
      <div className={`${classes.Careerbanner}`}>
        <div className="">
          <h1 className={`${classes.terms_heading} font-mono font-semibold `} data-aos="fade">
            {data.heading}
          </h1>
        </div>
      </div>
    </div>
    <div className="main_container" data-aos="fade-up">
      <div
        className={`${classes.box_bg_image} rounded-[15px] md:rounded-[20px] lg:rounded-30px h-[680px] md:h-[936px] lg:h-[680px] `}
      ></div>
      <div className={`${classes.box_div} max-w-[1355px] mx-auto main_padding`}>
        <div className={`${classes.t_and_c_cards} grid  grid-cols-2 max-tb:grid-cols-1 md:gap-10 sm:gap-[30px] gap-[20px]  font-mono mx-auto `}>
          {data.cards.map((card: any, cardIndex: number) => (
            <Boxes
              key={cardIndex}
              title={card?.boxtitle || ""}
              smallDescription={card.reference?.smallDescription || ""}
              shadow_right={cardIndex % 2 === 0}
              buttonName={card.reference?.buttonName || ""}
              buttonLink={card.reference?.slug.current}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
}

export default Terms_Conditions;
