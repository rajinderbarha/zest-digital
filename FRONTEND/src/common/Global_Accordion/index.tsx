import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AccordianType } from "../../../lib/interface";
import { PortableText } from "next-sanity";
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

  return <div className="">
    <div className={`${classes.accordion} max-w-[1520px] mx-auto `}>
      <div className={`${classes.accordion_heading} font-mono font-semibold max-w-[300px] sm:max-w-full mx-auto text-center text-color-1 `} data-aos="fade">
        {heading_acc}
      </div>
      {card_acc.map((item, index) => (
        <div key={index} className={classes.accordion_item} data-aos="fade-up">
          <button
            onClick={() => toggleItem(index)}
            className={`font-mono  font-medium text-left ${classes.title_desc_padding_class} ${classes.title_text_class} ${classes.accordion_title} ${openItemId === index ? 'open' : ''}`}
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

            className={`font-mono ${classes.accordion_content}  ${classes.desc_text_class} `}
            style={{
              maxHeight: openItemId === index ? contentRefs.current[index]?.scrollHeight + 'px' : '0',
            }}
          >
            <div className={`${classes.content_inner}  ${classes.title_desc_padding_class}  max-w-[1221px]`}>
              <PortableText value={item.content} />
            </div>
          </div>
        </div>
      ))}
    </div>
    {belowbtnName_acc && belowbtnLink_acc &&
      <div className="text-center" data-aos="fade-up">
        <Link href={belowbtnLink_acc || ""}>
          <button className={`${classes.speak_button} nomalbtn_hover font-mono bg-color-1 border border-color-1 text-white hover:text-color-1 hover:bg-white  rounded-full`}>
            {belowbtnName_acc}
          </button>
        </Link>
      </div>
    }
  </div>
};

export default Global_Accordion;
