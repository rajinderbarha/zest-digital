import SingleInsightPage from "@/components/SingleInsightPage";
import React from "react";
import { getSingleInsightsData } from "../../../lib/sanity.query";

function singleinsightpage({ singleInsights }: any) {
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
