// import React from "react";
// import classes from "./Client_Result.module.css";
// import { GoArrowRight } from "react-icons/go";
// import { clientResults } from "../../../../lib/interface";
// import Link from "next/link";

// const Client_Result: React.FC<clientResults> = (props) => {
//   const { belowbuttonName_CR,belowbuttonLink_CR, title_CR, heading_CR, card } = props;

//   console.log(card);
  

//   return (
//     <>
//       <div className="Client_Result main_padding xl:mt-[180px] lg:mt-[160px] md:mt-[135px] sm:mt-[90px] mt-[78px] xl:mb-[212px] lg:mb-[190px] md:mb-[160px] sm:mb-[110px] mb-[80px]" >
//         <div className='main_container'>
//           <div className={`${classes.Client_Result}  main_padding bg-color-1`}>
//             <div className={`${classes.Client_Result_title} `}>
//               <h2 className='font-mono xl:text-45px lg:text-40px md:text-35px sm:text-30px text-[22px] font-semibold text-white text-center'>{title_CR}</h2>
//               <p className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[12px] md:mt-6 sm:mt-[10px] mt-[5px] font-medium text-color-7 text-center">{heading_CR}</p>
//             </div>
//             <div className={` ${classes.Gross_profit_grid_div} Gross_profit_boxs grid grid-cols-3  justify-items-stretch	gap-10 2xl:gap-20`}>
//               {card &&
//                 card?.map(
//                   (
//                     {
//                       mapped_title,
//                       description_1_CR,
//                       description_2_CR,
//                       percentage_CR,
//                       buttonName_CR,
//                     },
//                     index
//                   ) => (
//                     <div key={index} className={` ${classes.profit_box} flex flex-col Gross_profit_box_start text-center border bg-color-1 rounded-[20px] lg:rounded-30px  font-mono border-color-8 xl:py-[75px] lg:py-[55px]  sm:py-[25px] py-[18px]`}>
//                       <h2 className='xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[26px] font-semibold text-color-7'>{percentage_CR}</h2>
//                       <p className={` ${classes.profit_box_heading} lg:text-30px md:text-25px sm:text-[22px] text-[16px] text-color-7 font-semibold xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]`}>{mapped_title}</p>
//                       <h3 className='lg:text-30px md:text-25px sm:text-[22px] text-[16px] text-white lg:mb-[11px] md:mb-[7px] sm:mb-[5px] mb-[3px]  '>{description_1_CR}</h3>
//                       <p className={`${classes.profit_box_desc} max-w-[246px] mx-auto font-lato text-[10px] sm:text-lg font-normal  text-white xl:mb-[30px] lg:mb-[25px] sm:mb-[20px]  mb-[15px] text-center`}>{description_2_CR}</p>
//                       <div className={classes.button_div}>

//                         <button className='font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white text-[12px] sm:text-base md:py-[3px] sm:py-[3px] py-[2px] md:ps-4 sm:ps-[15px] ps-[13px] flex sm:gap-2 gap-[6px] items-center'>{buttonName_CR}<span className='p-1 text-white rounded-full bg-black me-[2px] sm:me-[3px] md:me-1 text-[15px] sm:text-lg group-hover:bg-white group-hover:text-color-1'><GoArrowRight /></span></button>
//                       </div>
//                     </div>
//                   )
//                 )}
//             </div>
//             <div className={`${classes.view_more_btn} text-center xl:mt-[137px] lg:mt-[115px] md:mt-[85px] sm:mt-[60px] mt-[40px]`}>  
//               <Link href={belowbuttonLink_CR}><button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[12px] sm:text-base py-[7px] sm:py-[8px] md:py-[10px] px-7 flex gap-2 items-center border border-white hover:bg-color-1 hover:text-white'>{belowbuttonName_CR}</button></Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Client_Result;





import React from "react";
import classes from "./Client_Result.module.css";
import { GoArrowRight } from "react-icons/go";
import { clientResults } from "../../../../lib/interface";
import Link from "next/link";

const Client_Result: React.FC<clientResults> = (props) => {
  const { belowbuttonName_CR,belowbuttonLink_CR, title_CR, heading_CR, card } = props;

  // console.log("++++",card);
  

  return (
    <>
      {/* <div className="Client_Result main_padding xl:mt-[180px] lg:mt-[160px] md:mt-[135px] min-tb:max-tb:mt-[80px] sm:mt-[90px] mt-[78px] xl:mb-[212px] lg:mb-[190px] md:mb-[160px] min-tb:max-tb:mb-[118px] sm:mb-[110px] mb-[80px]" > */}
      <div className={`${classes.Client_Result_container}  Client_Result main_padding `} >
        <div className='main_container'>
          <div className={`${classes.Client_Result}  main_padding bg-color-1`} data-aos="fade-up">
            <div className={`${classes.Client_Result_title} `}>
                   {/* <h2 className='font-mono xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[26px] sm:text-30px text-[22px] font-semibold text-white text-center'>{title_CR}</h2> */}
              <h2 className='font-mono  font-semibold text-white text-center'>{title_CR}</h2>
                   {/* <p className="font-mono lg:text-30px md:text-25px min-tb:max-tb:text-[18px] sm:text-[20px] text-[12px] md:mt-6 min-tb:max-tb:mt-[8px] sm:mt-[10px] mt-[5px] font-medium text-color-7 text-center">{heading_CR}</p> */}
              <p className="font-mono font-medium text-color-7 text-center">{heading_CR}</p>
            </div>
            <div className={` ${classes.Gross_profit_grid_div} Gross_profit_boxs grid grid-cols-12  justify-items-stretch	gap-10 2xl:gap-20`}>
              {card &&
                card?.map(
                  (
                    {
                      // mapped_title,
                      description_1_CR,
                      // percentage_CR,
                      description_2_CR,
                      buttonName_CR,
                      
                      sigleCaseStudyCard:{slug,card:{heading,belowHeading,description,descriptionBelow}}
                    },
                    index
                  ) => (
                        // <div key={index} className={`  ${classes.profit_box} flex flex-col Gross_profit_box_start text-center border bg-color-1 rounded-[20px] lg:rounded-30px  font-mono border-color-8 xl:py-[75px] lg:py-[55px]  sm:py-[25px] py-[18px]`}>
                    <div key={index} className={`  ${classes.profit_box} flex flex-col Gross_profit_box_start text-center border bg-color-1 rounded-[20px] lg:rounded-30px  font-mono border-color-8 `} data-aos="fade-up">
                         {/* <h2 className='xl:text-55px lg:text-50px md:text-40px  sm:text-35px text-[26px] font-semibold text-color-7'>{heading}</h2> */}
                      <h2 className='font-semibold text-color-7'>{heading}</h2>
                         {/* <p className={` ${classes.profit_box_heading} lg:text-30px md:text-25px sm:text-[22px] text-[16px] text-color-7 font-semibold xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]`}>{belowHeading}</p> */}
                      <p className={` ${classes.profit_box_heading}  text-color-7 font-semibold`}>{belowHeading}</p>
                           {/* <h3 className='lg:text-30px md:text-25px sm:text-[22px] text-[16px] text-white lg:mb-[11px] md:mb-[7px] sm:mb-[5px] mb-[3px]  '>{description_1_CR}</h3> */}
                      <h3 className=' text-white '>{description_1_CR}</h3>
                          {/* <p className={`${classes.profit_box_desc} ${classes[`profit_box_desc${index}`]} max-w-[246px] mx-auto font-lato text-[10px] sm:text-lg font-normal  text-white xl:mb-[30px] lg:mb-[25px] sm:mb-[20px]  mb-[15px] text-center`}>{description_2_CR}</p> */}
                      <p className={`${classes.profit_box_desc} ${classes[`profit_box_desc${index}`]} max-w-[246px] mx-auto font-lato  font-normal  text-white text-center`}>{description_2_CR}</p>
                     
                     <Link href={`/casestudies/${slug}`}>
                      <div className={classes.button_div}>

                             {/* <button className='font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white text-[12px]  sm:text-base md:py-[3px] sm:py-[3px] py-[2px] md:ps-4 sm:ps-[15px] ps-[13px] flex sm:gap-2 gap-[6px] items-center'>{buttonName_CR}<span className='p-1 text-white rounded-full bg-black me-[2px] sm:me-[3px] min-tb:max-tb:text-[21px] md:me-1 text-[15px] sm:text-lg group-hover:bg-white group-hover:text-color-1'><GoArrowRight /></span></button> */}
                        <button className='font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white flex sm:gap-2 gap-[6px] items-center'>{buttonName_CR}<span className=' text-white rounded-full bg-black  group-hover:bg-white group-hover:text-color-1'><GoArrowRight /></span></button>
                      </div>
                     </Link>
                    </div>
                  )
                )}
            </div>
                  {/* <div className={`${classes.view_more_btn} text-center xl:mt-[137px] lg:mt-[115px] md:mt-[85px] min-tb:max-tb:mt-[57px] sm:mt-[60px] mt-[40px]`}>   */}
            <div className={`${classes.view_more_btn} text-center `} data-aos="fade-up">  
              {/* <Link href={belowbuttonLink_CR} className="inline-block"><button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[12px] sm:text-base py-[7px] sm:py-[8px] md:py-[10px] px-7 flex gap-2 items-center border border-white hover:bg-color-1 hover:text-white leading-normal'>{belowbuttonName_CR}</button></Link> */}
              <Link href={belowbuttonLink_CR} className="inline-block"><button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white flex gap-2 items-center border border-white hover:bg-color-1 hover:text-white leading-normal'>{belowbuttonName_CR}</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client_Result;
