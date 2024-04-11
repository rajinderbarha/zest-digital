import GrowthEnginePage from "@/components/GrowthEnginePage";
import React from "react";
import { getGrowthData, getSolutionData } from "../../../lib/sanity.query";

function growthengine({ growth , card}: any) {

  

  return <GrowthEnginePage data={growth[0]} card={card}/>;
}

export default growthengine;

export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const growth = await getGrowthData(slug);
  const solution = await getSolutionData();
  const card= solution[0].growth.filter((a:any)=>(a.slug.current !== slug) && a)
  return {
    props: {
      growth,
      card
    },
  };
}
