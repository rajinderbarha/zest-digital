import React from "react";
import SingleIntro from "@/components/singleCaseStudyPage/SingleIntro";
import Singalcasebanner from "@/components/singleCaseStudyPage/singalcasebanner";
import { getSingleCasestudyData } from "../../../lib/sanity.query";

function singlecasestudy({ singleCasestudy }: any) {
  console.log("singleCasestudy", singleCasestudy);

  const data = {
    title: singleCasestudy[0].Title,
    upperTitle: singleCasestudy[0].upperTitle,
  };
  return (
    <>
      <Singalcasebanner data={data} />
      <SingleIntro
        hero={singleCasestudy[0].hero}
        card={singleCasestudy[0].card}
        team={singleCasestudy[0].team }
      />
    </>
  );
}

export default singlecasestudy;

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const singleCasestudy = await getSingleCasestudyData(slug);
  return {
    props: {
      singleCasestudy,
    },
  };
}
