import Career from "@/components/Career";
import React from "react";
import { getCareersData } from "../../lib/sanity.query";
import { CareersType } from "../../lib/interface";
import Head from "next/head";

function careers({ careerData }: { careerData: CareersType[] }) {
  return <>
    <Head>
      <title>Careers — Zest Digital</title>
      <meta name="title" property="" content="Careers — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/careers" />
      <meta name="keywords" property="og:keywords" content="careers, Thanks, interest, hiring, zest, digital" />
      <meta name="description" property="og:description" content="" />
    </Head>

    <Career data={careerData} />;
  </>
}
export default careers;

export async function getStaticProps() {
  const careerData = await getCareersData();
  return {
    props: {
      careerData,
    },
  };
}
