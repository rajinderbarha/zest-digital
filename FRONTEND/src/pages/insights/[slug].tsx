import SingleInsightPage from "@/components/SingleInsightPage";
import React from "react";
import { getSingleInsightsData } from "../../../lib/sanity.query";
import { SingleInsightsType } from "../../../lib/interface";
import { GetStaticPaths } from "next";

function singleinsightpage({ singleInsights }: { singleInsights: SingleInsightsType[] }) {
  // console.log("singleInsights",singleInsights)
  return (
    <>
      <SingleInsightPage data={singleInsights[0]} />
    </>
  );
}

export default singleinsightpage;
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const singleInsights = await getSingleInsightsData(slug);
  return {
    props: {
      singleInsights,
    },
  };
}
