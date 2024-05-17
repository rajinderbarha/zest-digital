import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AccordianType } from "../../../lib/interface";
import { PortableText } from "next-sanity";
import arrowImage from "../../assets/images/arrow.svg";
import classes from "./Global_Accordion.module.css";
import arrow_image from "../../assets/images/arrow.svg"

const Global_Accordion = ({
  heading_acc,
  card_acc,
  belowbtnName_acc,
  belowbtnLink_acc,
}: AccordianType) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleItem = (itemId: number) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId
    );
  };

  const handleContentRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      contentRefs.current[index] = el;
    }
  };

  return (
  
   <div className="main_padding">
    <div className={`${classes.accordion} max-w-[1520px] mx-auto `}>
      <div className="font-mono font-semibold text-[30px] md:text-45px text-center text-color-1 xl:mb-[115px] lg:mb-[100px] md:mb-[80px] sm:mb-[60px] mb-[40px]">
      {heading_acc}
      </div>
      {card_acc.map((item,index) => (
        <div key={index} className={classes.accordion_item}>
          <button
            onClick={() => toggleItem(index)}
            className={`font-mono font-medium sm:py-[30px] py-[20px] text-left ${classes.title_desc_padding_class} ${classes.title_desc_text_class} ${classes.accordion_title} ${openItemId === index ? 'open' : ''}`}
          >
            {item.question}
            <span className={`${classes.accordion_icon} ${classes.arrow_img}`}>
              <Image src={arrow_image} alt="Arrow Icon" className={`max-w-max ${classes.arrow_img} ${openItemId === index ? classes.rotate : classes.rotate_back}`} />
            </span>
          </button>
          <div
           ref={(el) => {
            if (el) {
              contentRefs.current[index] = el;
            }
          }}
          
            className={`font-mono ${classes.accordion_content}  ${classes.title_desc_text_class} `}
            style={{
              maxHeight: openItemId === index? contentRefs.current[index]?.scrollHeight + 'px' : '0',
            }}
          >
            <div className={`${classes.content_inner}  ${classes.title_desc_padding_class}  xl:py-[80px] lg:py-[50px] md:py-[35px] py-[25px]  max-w-[1221px]`}>
              <PortableText value={item.content} />
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href={belowbtnLink_acc}>
          <button className="font-mono bg-color-1 border border-color-1 text-white hover:text-color-1 hover:bg-white text-[15px] md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full">
          {belowbtnName_acc}
          </button>
        </Link>
      </div>
    </div>
  
  );
};

export default Global_Accordion;
