import Career from "@/components/Career";
import React from "react";
import { getCareersData } from "../../lib/sanity.query";
import { CareersType } from "../../lib/interface";

function career({ careerData }: { careerData: CareersType[] }) {
  return (
    <>
      <Career data={careerData} />
    </>
  );
}

export default career;

export async function getServerSideProps() {
  const careerData = await getCareersData();
  return {
    props: {
      careerData,
    },
  };
}
