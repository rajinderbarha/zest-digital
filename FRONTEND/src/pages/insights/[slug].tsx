// import SingleInsightPage from "@/components/SingleInsightPage";
// import React from "react";
// import { getSingleInsightsData, getSlugOfInsightsCards } from "../../../lib/sanity.query";
// import { SingleInsightsType } from "../../../lib/interface";
// import { GetStaticPaths } from "next";

// function singleinsightpage({ singleInsights, slugInsightCard }: { singleInsights: SingleInsightsType[], slugInsightCard:any }) {
//   // console.log("singleInsights",singleInsights)
//   // console.log("slugInsightCard----",slugInsightCard)
//   return (
//     <>
//       <SingleInsightPage data={singleInsights[0]}    slugCard={slugInsightCard[0].collection} />
//     </>
//   );
// }

// export default singleinsightpage;
// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: 'blocking' //indicates the type of fallback
//   }
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const singleInsights = await getSingleInsightsData(slug);
//   const slugInsightCard = await getSlugOfInsightsCards()
//   return {
//     props: {
//       singleInsights,
//       slugInsightCard
//     },
//   };
// }






import SingleInsightPage from "@/components/SingleInsightPage";
import React from "react";
import { getSingleInsightsData, getSlugOfInsightsCards } from "../../../lib/sanity.query";
import { SingleInsightsType } from "../../../lib/interface";

import { GetStaticPaths, GetStaticPropsContext } from "next";
import ErrorPage from "next/error";

function singleinsightpage({ singleInsights, slugInsightCard }: { singleInsights: SingleInsightsType[], slugInsightCard:any }) {
 
  if (!singleInsights || !slugInsightCard) {
    return <ErrorPage statusCode={404} />;
  }


  return (
    <>
      <SingleInsightPage data={singleInsights[0]}    slugCard={slugInsightCard[0].collection} />
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

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const { slug } = params!;

  const singleInsights = await getSingleInsightsData(slug);
  const slugInsightCard = await getSlugOfInsightsCards()

  if (!singleInsights || singleInsights.length === 0  || !slugInsightCard) {
    return {
      notFound: true, // Return 404 page
    };
  }

  return {
    props: {
      singleInsights,
      slugInsightCard
    },
  };
}
