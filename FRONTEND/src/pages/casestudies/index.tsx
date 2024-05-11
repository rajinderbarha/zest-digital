import Casestudyintro from "@/components/caseStudy/CaseStudyIntro";
import Gross_profit from "@/components/caseStudy/gross_profit";
// import Conversions from "@/components/caseStudy/instrumental/conversions";
import Instrumental from "@/components/caseStudy/instrumental/instrumental_main";
// import Interests from "@/components/caseStudy/instrumental/interests";
// import Partnership from "@/components/caseStudy/instrumental/partnership";
// import Timeline from "@/components/caseStudy/instrumental/timeline";
// import Visibility from "@/components/caseStudy/instrumental/visibility";
import React from "react";
import { getCasestudyData } from "../../../lib/sanity.query";
import { CasestudyType } from "../../../lib/interface";

function Casestudy({ Casestudy }: {Casestudy:CasestudyType[]}) {
  // console.log("lib", Casestudy);
  return (
    <div>
      <Casestudyintro data={Casestudy[0].hero} />
      {Casestudy[0].collection.map((item:any, index:number) => {
        return (
          <div key={index}>
            <Gross_profit data={item} />
            <Instrumental data={item}/>



          </div>
        );
      })}

      {/* <Gross_profit />
      <Visibility />
      <Gross_profit />
      <Interests />
      <Gross_profit />
      <Partnership />
      <Gross_profit />
      <Conversions />
      <Gross_profit />
      <Timeline /> */}
    </div>
  );
}

export default Casestudy;

export async function getStaticProps() {
  const Casestudy = await getCasestudyData();

  return {
    props: { Casestudy },
  };
}
 