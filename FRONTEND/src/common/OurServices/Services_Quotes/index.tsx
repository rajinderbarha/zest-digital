import React from "react";
import classes from "./Services_Quotes.module.css";
import { ServiceQuote } from "../../../../lib/interface";

interface Services_Quotes {
  Services_Quotes: ServiceQuote[];
}

const Services_Quotes: React.FC<Services_Quotes> = ({ Services_Quotes }) => {
  return (
    <>
      {/* <div className={`${classes.Instrumental} main_padding xl:mt-[225px] lg:mt-[200px] md:mt-[170px] min-tb:max-tb:mt-[129px] sm:mt-[120px] mt-[80px] xl:mb-[290px] lg:mb-[250px] md:mb-[200px] min-tb:max-tb:mb-[140px] sm:mb-[150px] mb-[100px]`}> */}
      <div className={`${classes.Instrumental} main_padding xl:mt-[225px] lg:mt-[200px] md:mt-[170px] min-tb:max-tb:mt-[129px] sm:mt-[120px] mt-[80px] xl:mb-[290px] lg:mb-[250px] md:mb-[200px] min-tb:max-tb:mb-[140px] sm:mb-[150px] mb-[100px]`}>
        <div className='main_container'>
          {Services_Quotes && Services_Quotes.map(({ desc_quote, name_quote }, index) => (


            <div className="" key={index}>
              {index % 2 == 0 ? (
                <div className={`${classes.objective_left_description} md:mt-0 mt-10`}>
                  {/* <h2 className={`${classes.Interests_h2} font-mono font-semibold xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] min-tb:max-tb:leading-[37px] sm:text-[28px] text-[18px] italic lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[8px] max-w-[1347px] `}>{desc_quote}</h2> */}
                  <h2 className={`${classes.Interests_h2} font-mono font-semibold min-tb:max-tb:leading-[37px] italic max-w-[1347px] `}>{desc_quote}</h2>
                  {/* <p className='text-color-9 md:pt-[8px] sm:pt-[5px] pt-[3px] border-t lg:text-30px md:text-25px min-tb:max-tb:text-[18px] min-tb:max-tb:leading-[23px] sm:text-[20px] text-[12px] font-mono  border-color-9'>{name_quote}</p> */}
                  <p className={`${classes.below_line} text-color-9  border-t font-mono  border-color-9`}>{name_quote}</p>
                </div>
              ) : (
                // <div className={`${classes.objective_right_description} text-right xl:mt-[120px] lg:mt-[90px] md:mt-[60px] sm:mt-[30px] mt-[70px]  max-w-[1347px] ms-auto `}>
                <div className={`${classes.objective_right_description} text-right  max-w-[1347px] ms-auto `}>
                  <h2 className={`${classes.Interests_h2} ms-auto font-mono font-semibold min-tb:max-tb:leading-[37px]  italic `}>{desc_quote}</h2>
                  <p className={`${classes.below_line} ms-auto text-color-9 border-t  font-moo  border-color-9`}>{name_quote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services_Quotes;
