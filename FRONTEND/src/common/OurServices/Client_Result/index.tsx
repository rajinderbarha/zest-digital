import classes from "./Client_Result.module.css";
import { GoArrowRight } from "react-icons/go";
import { clientResults } from "../../../../lib/interface";
import Link from "next/link";

const Client_Result: React.FC<clientResults> = (props) => {
  const { belowbuttonName_CR, belowbuttonLink_CR, title_CR, heading_CR, card } = props;

  return <div className={`${classes.Client_Result_container}  Client_Result main_padding `} >
    <div className='main_container'>
      <div className={`${classes.Client_Result}  main_padding bg-color-1`} data-aos="fade-up">
        <div className={`${classes.Client_Result_title} `}>
          <h2 className='font-mono  font-semibold text-white text-center'>{title_CR}</h2>
          <p className="font-mono font-medium text-color-7 text-center">{heading_CR}</p>
        </div>
        <div className={` ${classes.Gross_profit_grid_div} Gross_profit_boxs grid grid-cols-12  justify-items-stretch	gap-10 2xl:gap-20`}>
          {card &&
            card?.map(
              (
                {
                  description_1_CR,
                  description_2_CR,
                  buttonName_CR,
                  sigleCaseStudyCard: { slug, card: { heading, belowHeading, description, descriptionBelow } }
                },
                index
              ) => (
                <div key={index} className={`  ${classes.profit_box} flex flex-col Gross_profit_box_start text-center border bg-color-1 rounded-[20px] lg:rounded-30px  font-mono border-color-8 `} data-aos="fade-up">
                  <h2 className='font-semibold text-color-7'>{heading}</h2>
                  <p className={` ${classes.profit_box_heading}  text-color-7  font-semibold`}>{belowHeading}</p>
                  <h3 className=' text-white font-normal max-tb:font-bold '>{description_1_CR}</h3>
                  <p className={`${classes.profit_box_desc} ${classes[`profit_box_desc${index}`]} max-w-[246px] mx-auto font-lato  font-normal  text-white text-center`}>{description_2_CR}</p>

                  <Link href={`/casestudies/${slug}`}>
                    <div className={classes.button_div}>
                      <button className=' arrowbtn_hover font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white flex sm:gap-2 gap-[6px] items-center'>{buttonName_CR}<span className=' text-white rounded-full bg-black  group-hover:bg-white group-hover:text-color-1'><GoArrowRight /></span></button>
                    </div>
                  </Link>
                </div>
              )
            )}
        </div>
        <div className={`${classes.view_more_btn} text-center `} data-aos="fade-up">
          <Link href={belowbuttonLink_CR} className="inline-block"><button className='nomalbtn_hover font-mono font-normal mx-auto text-color-1 rounded-full bg-white flex gap-2 items-center border border-white hover:bg-color-1 hover:text-white leading-normal'>{belowbuttonName_CR}</button></Link>
        </div>
      </div>
    </div>
  </div>
};

export default Client_Result;
