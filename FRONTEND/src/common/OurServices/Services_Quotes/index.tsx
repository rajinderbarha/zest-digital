import classes from "./Services_Quotes.module.css";
import { ServiceQuote } from "../../../../lib/interface";

interface Services_Quotes {
  Services_Quotes: ServiceQuote[];
}

const Services_Quotes: React.FC<Services_Quotes> = ({ Services_Quotes }) => {
  return <div className={`${classes.services_quotes} main_padding  overflow-x-hidden`}>
        <div className='main_container'>
          {Services_Quotes && Services_Quotes.map(({ desc_quote, name_quote }, index) => (
            <div className="" key={index}>
              {index % 2 == 0 ? (
                <div className={`${classes.quote_left} md:mt-0 mt-10`} data-aos="fade-right">
                  <h2 className={`${classes.quote_heading} font-mono font-semibold min-tb:max-tb:leading-[37px] italic max-w-[1347px] `}>{desc_quote}</h2>
                  <p className={`${classes.below_line} text-color-9  border-t font-mono  border-color-9`}>{name_quote}</p>
                </div>
              ) : (
                <div className={`${classes.quote_right} text-right  max-w-[1347px] ms-auto `} data-aos="fade-left">
                  <h2 className={`${classes.quote_heading} ms-auto font-mono font-semibold min-tb:max-tb:leading-[37px]  italic `}>{desc_quote}</h2>
                  <p className={`${classes.below_line} ms-auto text-color-9 border-t  font-moo  border-color-9`}>{name_quote}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

};

export default Services_Quotes;
