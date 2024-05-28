






import React from "react";
import { useRouter } from "next/router";
import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
import Global_Accordion from "../../common/Global_Accordion";
import Growths from "./Growths";
import Sign_up from "../GrowthTracker/Sign_up";

function GrowthEnginePage({ data, card, otherSolHeading }: any) {
  const router = useRouter();
  const { slug } = router.query;
  const currentPath = `/solutions/${slug}`;

  console.log("Current path:", currentPath); // Log current path



  const {
    globalaccordion: {
      accordiongroup: {
        heading_acc,
        card_acc,
        belowbtnName_acc,
        belowbtnLink_acc,
      },
    },
  } = data;

  const card_Accordian = card_acc.map(({ content, question }: any) => ({
    content,
    question,
  }));

  return (
    <>
    <div className="Body_padding">
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
      {currentPath == `/solutions/growth-tracker` && <Sign_up />}

      <div className="main_padding">
      <Global_Accordion
        heading_acc={heading_acc}
        belowbtnLink_acc={belowbtnLink_acc}
        belowbtnName_acc={belowbtnName_acc}
        card_acc={card_Accordian}
        />
        </div>
      <Growths data={card} otherSolHeading={otherSolHeading} />
      </div>
    </>
  );
}

export default GrowthEnginePage;
