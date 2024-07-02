import Career from "@/components/Career";
import React from "react";
import { getCareersData } from "../../lib/sanity.query";
import { CareersType } from "../../lib/interface";

function careers({ careerData }: { careerData: CareersType[] }) {
  return <Career data={careerData} />;
}
export default careers;

export async function getStaticProps() {
  const careerData = await getCareersData();
  return {
    props: {
      careerData,
    },
  };
}
