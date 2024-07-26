import classes from "./Services_book_call.module.css";
import { Services_book_cal } from "../../../../lib/interface";
import Link from "next/link";

const Services_book_call: React.FC<Services_book_cal> = (props) => {
  const { heading, buttonName, buttonLink } = props;

  return <div className="GrowthMarketingServices_book_call xl:mt-[170px] lg:mt-[150px] md:mt-[125px] min-tb:max-tb:mt-[143px] sm:mt-[80px] mt-[77px] main_padding" data-aos="fade-up">

    <div className={`${classes.container_bg} main_container rounded-[15px] md:rounded-[20px] lg:rounded-30px bg-color-1`}>
      <div className={`${classes.bookcall_box} max-w-[1584px] mx-auto  `}>
        <h2 className={`${classes.bookcall_heading} text-white text-center font-mono  font-semibold`}>{heading}</h2>
        <div className={`${classes.btn_div} mx-auto text-center`}>
          <Link href={buttonLink}>
            <button className='nomalbtn_hover bg-white text-[12px] sm:text-base font-mono  text-color-1 rounded-full px-[26px] sm:py-[8px] py-[7px] text-center border border-white hover:bg-color-1 hover:text-white' > {buttonName}</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
};

export default Services_book_call;
