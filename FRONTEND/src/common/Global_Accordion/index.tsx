import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import arrow_image from "../../assets/images/arrow.svg";
import Image from "next/image";
import Link from "next/link";

const Global_Accordion = ({ data }: any) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="app-container max-w-[1520px] mx-auto  mt-[80px] mb:mt-[212px] ">
      <div className="font-mono font-semibold text-30px md:text-45px text-center text-color-1 mb-[50px] md:mb-[115px]">
        {data.heading}
      </div>

      {data.accordian.map((item: any, index: number) => {
        return (
          <Accordion
            expanded={expanded === `panel${index+1}`}
            onChange={handleChange(`panel${index+1}`)}
            className="mb-[10px]"
          >
            <AccordionSummary
              expandIcon={
                <div className="arrow_img">
                  <Image src={arrow_image} alt="" className="arrow_img" />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="custom-header"
            >
              <Typography
                sx={{ width: "80%", flexShrink: 0 }}
                className="font-mono"
              >
                {item.heading}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="panel-data font-mono">
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}

    
      <div className="text-center">
        <Link href={data.buttonName}>
          <button className="font-mono bg-color-1 border border-color-1 text-[#c0c0c0] text-base md:px-[25px] px-[20px] py-[5px] md:py-[10px]  mt-[20px] md:mt-[60px] rounded-full">
            {data.buttonName}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Global_Accordion;
