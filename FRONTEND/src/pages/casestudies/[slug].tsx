import React from "react";
import SingleIntro from "@/components/singleCaseStudyPage/SingleIntro";
import Singalcasebanner from "@/components/singleCaseStudyPage/singalcasebanner";
import { getSingleCasestudyData } from "../../../lib/sanity.query";
import { SingleCasestudyType } from "../../../lib/interface";
import { GetStaticPaths } from "next";

function singlecasestudy({ singleCasestudy }: {singleCasestudy:SingleCasestudyType[]}) {
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
        team={singleCasestudy[0].team} Title={""}  upperTitle={""}      />
    </>
  );
}

export default singlecasestudy;
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const singleCasestudy = await getSingleCasestudyData(slug);
  return {
    props: {
      singleCasestudy,
    },
  };
}
