import React from "react";
import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
import Global_Accordion from "../../common/Global_Accordion";
import Growths from "./Growths";
import Sign_up from "../GrowthTracker/Sign_up";

function GrowthEnginePage({ data , card, otherSolHeading}: any) {

// console.log("-----",card)
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
      <Sign_up />
      <Global_Accordion  heading_acc={heading_acc} belowbtnLink_acc={belowbtnLink_acc} belowbtnName_acc={belowbtnName_acc} card_acc={card_Accordian}/>
      <Growths data={card} otherSolHeading={otherSolHeading}/>
    </>
  );
}

export default GrowthEnginePage;







// import React from "react";
// import { useRouter } from "next/router";
// import GrowthEnginePage_Banner from "./GrowthEnginePage_Banner";
// import GrowthEnginePage_Box from "./GrowthEnginePage_Box";
// import Global_Accordion from "../../common/Global_Accordion";
// import Growths from "./Growths";
// import Sign_up from "../GrowthTracker/Sign_up";

// function GrowthEnginePage({ data , card, otherSolHeading}: any) {
//   const router = useRouter();
//   const { pathname } = router;

//   // Define the paths where you want to render the <Sign_up /> component
//   const allowedPaths = [
//     "/solutions/growth-tracker",
//     // Add other allowed paths here if needed
//   ];

//   // Check if the current path is included in the allowed paths
//   const showSignUp = allowedPaths.includes(pathname);

//   const {
//     globalaccordion: {
//       accordiongroup: { heading_acc, card_acc, belowbtnName_acc, belowbtnLink_acc },
//     },
//   } = data;

//   const card_Accordian = card_acc.map(({content, question}:any,) => ({
//     content,
//     question
//   }));

//   return (
//     <>
//       <GrowthEnginePage_Banner
//         data={{
//           heading: data.heading,
//           description: data.description,
//           buttonName: data.buttonName,
//           buttonLink: data.buttonLink,
//           image: data.image,
//         }}
//       />
//       <GrowthEnginePage_Box data={data.growthSection} />
//       {showSignUp && <Sign_up />}
//       <Global_Accordion heading_acc={heading_acc} belowbtnLink_acc={belowbtnLink_acc} belowbtnName_acc={belowbtnName_acc} card_acc={card_Accordian}/>
//       <Growths data={card} otherSolHeading={otherSolHeading}/>
//     </>
//   );
// }

// export default GrowthEnginePage;
