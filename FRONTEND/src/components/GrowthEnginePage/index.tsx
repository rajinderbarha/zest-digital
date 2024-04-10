import React from "react";
import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
import Growth_Accordion from "../../common/Growth_Accordion";
import Growths from "./Growths";
import flag_img from "../../assets/images/flags.png";

function GrowthEnginePage({ data , card}: any) {



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
      {/* <Growth_Accordion /> */}
      <Growths data={card} />
    </>
  );
}

export default GrowthEnginePage;
