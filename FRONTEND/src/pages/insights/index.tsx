import Filters from "@/components/Insights/Filters";
import { getInsightsData } from "../../../lib/sanity.query";
import { FiltersType } from "../../../lib/interface";
import Head from "next/head";

const insights = ({ insights }: { insights: FiltersType[] }) => {
  return <>
        <Head>
          <title>Insights — Zest Digital</title>
          <meta name="title" property="" content="Insights — Zest Digital" />
          <meta name="url" property="og:url" content="https://www.zestdigital.com/insights" />
          <meta name="keywords" property="og:keywords" content="zest, SEO, PPC, Growth, Company, CRO & Analytics, Landing Pages" />
          <meta name="description" property="og:description" content="" />
        </Head>
  
   <div className="Body_padding">
    <Filters data={insights[0]} />
  </div>
  </>
};
export default insights;

export async function getStaticProps() {
  const insights = await getInsightsData();
  return {
    props: { insights },
  };
}
