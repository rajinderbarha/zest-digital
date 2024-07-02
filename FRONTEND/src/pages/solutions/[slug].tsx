import GrowthEnginePage from "@/components/GrowthEnginePage";
import React from "react";
import { getGrowthData, getSolutionData } from "../../../lib/sanity.query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Custom404 from "../404";

function growthengine({ errorCode, growth, card }: any) {
  if (errorCode) {
    return <Custom404 />;
  }
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

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const growth = await getGrowthData(slug as string);
  const solution = await getSolutionData();
  const card = solution[0].growth.filter((a: any) => a.slug.current !== slug && a);

  if (!growth || growth.length === 0 || !solution) {
    return {
      props: {

        errorCode: 404,
        growth: [],
        solution: []
      }
    }
  }
  return {
    props: {
      errorCode: false,
      growth,
      card,
    },
  };
}
