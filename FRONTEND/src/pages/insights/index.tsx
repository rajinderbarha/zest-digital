import Filters from "@/components/Insights/Filters";
import React from "react";
import { getInsightsData } from "../../../lib/sanity.query";
import { FiltersType } from "../../../lib/interface";

const filters = ({ insights }: {insights:FiltersType[]}) => {
  return (
    <div className="Body_padding">
      <Filters data={insights[0]} />
    </div>
  );
};

export default filters;

export async function getStaticProps() {
  const insights = await getInsightsData();

  return {
    props: { insights },
  };
}
