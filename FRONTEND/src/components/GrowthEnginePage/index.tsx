import React from "react";
import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
import Global_Accordion from "../../common/Global_Accordion";
import Growths from "./Growths";
import flag_img from "../../assets/images/flags.png";

function GrowthEnginePage({ data , card}: any) {

// console.log(data)
  const { globalaccordion:{accordiongroup:{heading_acc,card_acc,belowbtnName_acc,belowbtnLink_acc}}
  } = data;


  const card_Accordian = card_acc.map(({content,question}:any,)=>(
    {
      content,question
    }
  ))

  return (
    <>
      <GrowthEnginePage_Banner
        data={{
          heading: data.heading,
          description: data.description,
          buttonName: data.buttonName,
          buttonLink: data.buttonLink,
          image: data.image,
        }}
      />
      <GrowthEnginePage_Box data={data.growthSection} />
      <Global_Accordion  heading_acc={heading_acc} belowbtnLink_acc={belowbtnLink_acc} belowbtnName_acc={belowbtnName_acc} card_acc={card_Accordian}/>
      <Growths data={card} />
    </>
  );
}

export default GrowthEnginePage;
