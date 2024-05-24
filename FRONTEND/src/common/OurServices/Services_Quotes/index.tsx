import React from "react";
import classes from "./Services_Quotes.module.css";
import { ServiceQuote } from "../../../../lib/interface";

interface Services_Quotes {
  Services_Quotes: ServiceQuote[];
}

const Services_Quotes: React.FC<Services_Quotes> = ({ Services_Quotes }) => {
  return (
    <>
     <div className={`${classes.Instrumental} main_padding xl:mt-[225px] lg:mt-[200px] md:mt-[170px] sm:mt-[120px] mt-[80px] xl:mb-[290px] lg:mb-[250px] md:mb-[200px] sm:mb-[150px] mb-[100px]`}>
                <div className='main_container'>
                {Services_Quotes&& Services_Quotes.map(({desc_quote,name_quote},index)=>(


                    <div className="" key={index}>
                {index % 2 == 0 ? (
                  <div className=" md:mt-0 mt-10">
                  <h2 className={`${classes.Interests_h2} font-mono font-semibold xl:text-45px lg:text-40px md:text-35px sm:text-[28px] text-[18px] italic lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[8px] max-w-[1347px] `}>{desc_quote}</h2>
                  <p className='text-color-9 md:pt-[8px] sm:pt-[5px] pt-[3px] border-t lg:text-30px md:text-25px sm:text-[20px] text-[12px] font-mono  border-color-9'>{name_quote}</p>
              </div>
                ) : (
                  <div className="text-right xl:mt-[120px] lg:mt-[90px] md:mt-[60px] sm:mt-[30px] mt-[70px]  max-w-[1347px] ms-auto ">
                                <h2 className={`${classes.Interests_h2} font-mono font-semibold xl:text-45px lg:text-40px md:text-35px  sm:text-[28px] text-[18px] italic lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[8px]`}>{desc_quote}</h2>
                                <p className='ms-auto text-color-9 md:pt-[8px] sm:pt-[5px] pt-[3px] border-t lg:text-30px md:text-25px sm:text-[20px] text-[12px] font-moo  border-color-9'>{name_quote}</p>
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
