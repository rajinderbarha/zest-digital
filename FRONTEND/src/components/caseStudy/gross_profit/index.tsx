import classes from "./gross_profit.module.css";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { Gross_profitType } from "../../../../lib/interface";
function Gross_profit({ data }: { data: Gross_profitType }) {

  return <div className="main_padding ">
    <div className="main_container">
      <div className={`${classes.Gross_profit} main_padding tablet_padding  md:rounded-30px rounded-[20px] `} data-aos="fade-up">
        <div className={`${classes.Gross_profit_grid_div} Gross_profit_boxs grid grid-cols-12  w-full justify-items-stretch	gap-10 2xl:gap-20`} >
          {data?.collection?.map((item, index: number) => {
            const heading = item.card.heading.replace(/\s+/g, "");
            return (
              <div
                key={index}
                className={` ${classes.profit_box}  Gross_profit_box_start text-center border bg-color-1 rounded-[20px] lg:rounded-30px  font-mono border-color-8  `} data-aos="fade-up" data-aos-delay="180"
              >
                <h2 className="font-semibold text-color-7">{heading} </h2>
                <p className={` ${classes.profit_box_heading} text-color-7 font-semibold `}>{item.card.belowHeading}</p>
                <h3 className={`${classes.profit_box_des} text-white font-semibold  max-tb:font-bold `}>{item.card.description}</h3>
                <p className={`${classes.profit_box_desc_below} font-lato font-normal  text-white text-center`}>
                  {item.card.descriptionBelow}
                </p>
                <Link href={`/casestudies/${item.slug.current}`}>
                  <button className={`${classes.box_btn} arrowbtn_hover font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white flex sm:gap-2 gap-[6px] items-center`}>
                    View case study
                    <span className=" text-white rounded-full bg-color-1  group-hover:bg-white group-hover:text-color-1">
                      <GoArrowRight />
                    </span>
                  </button>
                </Link>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  </div>
}

export default Gross_profit;
