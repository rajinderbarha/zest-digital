// import React from "react";
// import classes from "./gross_profit.module.css";
// import { GoArrowRight } from "react-icons/go";
// import Link from "next/link";
// import { Gross_profitType } from "../../../../lib/interface";
// function Gross_profit({ data }: {data:Gross_profitType}) {
//   // console.log("qqqq",data)
//   return (
//     // xl:mt-[85px] lg:mt-[65px] md:mt-[50px] sm:mt-[40px] mt-[35px]
//     <div className="main_padding ">
//     <div className="main_container">
//       <div className={`${classes.Gross_profit} main_padding   md:rounded-30px rounded-[20px] `}>
//         <div className={`${classes.Gross_profit_grid_div} Gross_profit_boxs grid grid-cols-3  justify-items-stretch	gap-10 2xl:gap-20`}>
//           {data?.hero?.item.map((item, index: number) => {
             
//             return (
//               // xl:px-[78px] lg:px-[55px] md:px-[40px] sm:px-[25px] px-[18px]
//               <div
//                 key={index}
//                 className={` ${classes.profit_box} Gross_profit_box_start text-center border bg-black rounded-[20px] md:rounded-30px  font-mono border-color-8 xl:py-[75px] lg:py-[55px]  sm:py-[25px] py-[18px] `}
//               >
//                 <h2 className="xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[30px] font-semibold text-color-7">{item.count} </h2>
//                 <p className={` ${classes.profit_box_heading} lg:text-30px md:text-25px sm:text-[22px] text-[20px] text-color-7 font-semibold xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]`}>{item.heading}</p>
//                 <h3 className="lg:text-30px md:text-25px sm:text-[22px] text-[20px] text-white lg:mb-[11px] md:mb-[7px] sm:mb-[5px] mb-[3px] ">{item.title}</h3>
//                 <p className={`${classes.profit_box_desc} font-lato text-base sm:text-lg font-normal  text-white xl:mb-[30px] lg:mb-[25px] sm:mb-[20px]  mb-[15px] text-center`}>
//                   {item.description}
//                 </p>
//                 <Link href={`/casestudies/${data.slug.current}`}>
//                 <button className="font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white text-[15px] sm:text-base md:py-[3px] sm:py-[2px] py-[1px] md:ps-4 sm:ps-[15px] ps-[13px] flex sm:gap-2 gap-[6px] items-center">
//                  {item.buttonname}
//                   <span className="p-1 text-white rounded-full bg-black me-[2px] sm:me-[3px] md:me-1 text-[15px] sm:text-lg group-hover:bg-white group-hover:text-color-1">
//                     <GoArrowRight />
//                   </span>
//                 </button>
//                 </Link>
//               </div>
//             );
//           })}
//           {/* <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:p-20 p-6'>
//                         <h2 className='text-55px font-semibold text-color-7'>+772% </h2>
//                         <p className='text-30px text-color-7 mb-12'>gross profit</p>
//                         <h3 className='text-30px text-white mb-4'>Hanson (UK)</h3>
//                         <p className='font-lato text-lg font-normal  text-white mb-4'>Best SEO Campaign finalist at the UK Digital Growth Awards</p>
//                         <button className='font-mono font-normal  mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'><Link href={"/casestudy/hanson-uk"}>View case study</Link> <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
//                     </div>
//                     <div className='Gross_profit_box_start text-center border bg-black rounded-30px  font-semibold font-mono border-color-8 md:p-20 p-6'>
//                         <h2 className='text-55px font-semibold text-color-7'>+772% </h2>
//                         <p className='text-30px text-color-7 mb-12'>gross profit</p>
//                         <h3 className='text-30px text-white mb-4'>Hanson (UK)</h3>
//                         <p className='font-lato text-lg font-normal  text-white mb-4'>Best SEO Campaign finalist at the UK Digital Growth Awards</p>
//                         <button className='font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-base py-[3px] ps-5 flex gap-2 items-center'>View case study <span className='p-1 text-white rounded-full bg-black me-1 text-lg'><GoArrowRight /></span></button>
//                     </div> */}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Gross_profit;



//optimized
import React from "react";
import classes from "./gross_profit.module.css";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import { Gross_profitType } from "../../../../lib/interface";

function Gross_profit({ data }: { data: Gross_profitType }) {
  const columnCount = Math.min(data?.hero?.item.length, 3); // Calculate the number of columns dynamically
  const columnClass = `grid-cols-${columnCount}`;

  return (
    <div className="main_padding ">
      <div className="main_container">
        <div className={`${classes.Gross_profit} main_padding   md:rounded-30px rounded-[20px] `}>
          <div className={`${classes.Gross_profit_grid_div} Gross_profit_boxs grid ${columnClass} justify-items-stretch	gap-10 2xl:gap-20`}>
            {data?.hero?.item.map((item, index: number) => {
              return (
                <div key={index} className={` ${classes.profit_box} Gross_profit_box_start text-center border bg-black rounded-[20px] md:rounded-30px  font-mono border-color-8 xl:py-[75px] lg:py-[55px]  sm:py-[25px] py-[18px] `}>
                  <h2 className="xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[30px] font-semibold text-color-7">{item.count} </h2>
                  <p className={` ${classes.profit_box_heading} lg:text-30px md:text-25px sm:text-[22px] text-[20px] text-color-7 font-semibold xl:mb-[35px] lg:mb-[30px] md:mb-[25px] sm:mb-[20px] mb-[15px]`}>{item.heading}</p>
                  <h3 className="lg:text-30px md:text-25px sm:text-[22px] text-[20px] text-white lg:mb-[11px] md:mb-[7px] sm:mb-[5px] mb-[3px] ">{item.title}</h3>
                  <p className={`${classes.profit_box_desc} font-lato text-base sm:text-lg font-normal  text-white xl:mb-[30px] lg:mb-[25px] sm:mb-[20px]  mb-[15px] text-center`}>
                    {item.description}
                  </p>
                  <Link href={`/casestudies/${data.slug.current}`}>
                    <button className="font-mono group hover:bg-color-1 hover:text-white border border-white font-normal mx-auto text-color-1 rounded-full bg-white text-[15px] sm:text-base md:py-[3px] sm:py-[2px] py-[1px] md:ps-4 sm:ps-[15px] ps-[13px] flex sm:gap-2 gap-[6px] items-center">
                      {item.buttonname}
                      <span className="p-1 text-white rounded-full bg-black me-[2px] sm:me-[3px] md:me-1 text-[15px] sm:text-lg group-hover:bg-white group-hover:text-color-1">
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
  );
}

export default Gross_profit;
