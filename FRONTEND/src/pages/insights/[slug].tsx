import SingleInsightPage from "@/components/SingleInsightPage";
import React from "react";
import { getSingleInsightsData } from "../../../lib/sanity.query";
import { SingleInsightsType } from "../../../lib/interface";

function singleinsightpage({ singleInsights }: { singleInsights: SingleInsightsType[] }) {
  // console.log("singleInsights",singleInsights)
  return (
    <>
      <SingleInsightPage data={singleInsights[0]} />
    </>
  );
}

export default singleinsightpage;

export async function getServerSideProps({
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
