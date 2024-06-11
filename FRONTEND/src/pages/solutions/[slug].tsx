import GrowthEnginePage from "@/components/GrowthEnginePage";
import React from "react";
import { getGrowthData, getSolutionData } from "../../../lib/sanity.query";
import { GetStaticPaths } from "next";

function growthengine({ growth, card }: any) {
  // console.log("data= = =",card);
  return (
    <GrowthEnginePage
      data={growth[0]}
      card={card}
      otherSolHeading={growth[0].Solheading}
    />
  );
}

export default growthengine;


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

  const growth = await getGrowthData(slug);
  const solution = await getSolutionData();
  const card = solution[0].growth.filter(
    (a: any) => a.slug.current !== slug && a
  );
  return {
    props: {
      growth,
      card,
    },
  };
}
