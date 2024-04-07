import React from "react";
import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
import Growth_Accordion from "./Growth_Accordion";
import Growths from "./Growths";
import flag_img from "../../assets/images/flags.png";

function GrowthEnginePage({ data }: any) {


  return (
    <>
      <GrowthEnginePage_Banner data={data.heroSection} />
      <GrowthEnginePage_Box data={data.growthSection} />
      <Growth_Accordion />
      <Growths data={data.solution.card} />
    </>
  );
}

export default GrowthEnginePage;
