// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import arrow_image from "../../assets/images/arrow.svg";
// import Image from "next/image";
// import Link from "next/link";

// const Global_Accordion = ({ data }: any) => {
//   const [expanded, setExpanded] = React.useState<string | false>("panel1");

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpanded(isExpanded ? panel : false);
//     };

//   return (
//     <div className="app-container max-w-[1520px] mx-auto  mt-[80px] mb:mt-[212px] ">
//       <div className="font-mono font-semibold text-30px md:text-45px text-center text-color-1 mb-[50px] md:mb-[115px]">
//         {data.heading}
//       </div>

//       {data.accordian.map((item: any, index: number) => {
//         return (
//           <Accordion
//             expanded={expanded === `panel${index+1}`}
//             onChange={handleChange(`panel${index+1}`)}
//             className="mb-[10px]"
//           >
//             <AccordionSummary
//               expandIcon={
//                 <div className="arrow_img">
//                   <Image src={arrow_image} alt="" className="arrow_img" />
//                 </div>
//               }
//               aria-controls="panel1bh-content"
//               id="panel1bh-header"
//               className="custom-header"
//             >
//               <Typography
//                 sx={{ width: "80%", flexShrink: 0 }}
//                 className="font-mono"
//               >
//                 {item.heading}
//               </Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography className="panel-data font-mono">
//                 {item.description}
//               </Typography>
//             </AccordionDetails>
//           </Accordion>
//         );
//       })}

    
//       <div className="text-center">
//         <Link href={data.buttonName}>
//           <button className="font-mono bg-color-1 border border-color-1 text-[#c0c0c0] text-base md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full">
//             {data.buttonName}
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Global_Accordion;
import React,  { useState, useRef } from 'react'
import arrow_image from "../../assets/images/arrow.svg";
import classes from './Global_Accordion.module.css';
import Image from 'next/image';
import Link from 'next/link';


type AccordionItem = {
  id: number;
  title: string;
  content: string;
};
const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'What do we mean by Growth Marketing?',
    content: 'Growth marketing focuses on generating commercial growth for businesses...',
  },
  {
    id: 2,
    title: 'How does Growth Marketing work?',
    content: 'It involves a variety of tactics aimed at increasing user engagement and retention...',
  },

];


const Global_Accordion = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const toggleItem = (itemId: number) => {
    setOpenItemId(prevOpenItemId => prevOpenItemId === itemId ? null : itemId);
  };
  return (
   <>
   <div className="main_padding">
    <div className={`${classes.accordion} max-w-[1520px] mx-auto  mt-[80px] mb:mt-[212px] `}>
      <div className="font-mono font-semibold text-30px md:text-45px text-center text-color-1 xl:mb-[115px] lg:mb-[100px] md:mb-[80px] sm:mb-[60px] mb-[40px]">
      Frequently Asked Questions
      </div>
      {accordionData.map((item) => (
        <div key={item.id} className={classes.accordion_item}>
          <button
            onClick={() => toggleItem(item.id)}
            className={`font-mono font-medium sm:py-[30px] py-[20px] text-left ${classes.title_desc_padding_class} ${classes.title_desc_text_class} ${classes.accordion_title} ${openItemId === item.id ? 'open' : ''}`}
          >
            {item.title}
            <span className={`${classes.accordion_icon} ${classes.arrow_img}`}>
              <Image src={arrow_image} alt="Arrow Icon" className={`max-w-max ${classes.arrow_img} ${openItemId === item.id ? classes.rotate : classes.rotate_back}`} />
            </span>
          </button>
          <div
            ref={el => contentRefs.current[item.id] = el}
            className={`font-mono ${classes.accordion_content}  ${classes.title_desc_text_class} `}
            style={{
              maxHeight: openItemId === item.id ? contentRefs.current[item.id]?.scrollHeight + 'px' : '0',
            }}
          >
            <div className={`${classes.content_inner}  ${classes.title_desc_padding_class} xl:pt-[80px] lg:pt-[60px] md:pt-[45px] sm:pt-[35px] pt-[20px] lg:pb-[30px] md:pb-[25px] pb-[20px]  max-w-[1221px]`}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
        <Link href="#">
          <button className="font-mono bg-color-1 border border-color-1 text-[#c0c0c0] text-base md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full">
          Speak to our team
          </button>
        </Link>
      </div>
    </div>
   </>
  )
}

export default Global_Accordion