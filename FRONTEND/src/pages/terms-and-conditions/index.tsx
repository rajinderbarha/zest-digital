import Terms_Conditions from "@/components/Terms_Conditions";
import React from "react";
import { getTermsndConditionsData } from "../../../lib/sanity.query";
import { TermsAndConditionsType } from "../../../lib/interface";
import Head from "next/head";

function Termsconditions({ termsAndConditionData, }: { termsAndConditionData: TermsAndConditionsType[] }) {

  return <>
    <Head>
      <title>Terms & Conditions — Zest Digital</title>
      <meta name="title" property="" content="Terms & Conditions — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/terms-and-conditions" />
      <meta name="keywords" property="og:keywords" content="Digital, Web Development, Projects, Hosting, Website usage, Privacy policy" />
      <meta name="description" property="og:description" content="View all of our terms and conditions from one easy to use repository." />
    </Head>

    <div className="Body_padding">
      <Terms_Conditions data={termsAndConditionData[0]} />
    </div>
  </>
}
export default Termsconditions;

export async function getStaticProps() {
  try {
    const termsAndConditionData = await getTermsndConditionsData();
    return {
      props: {
        termsAndConditionData,
      },
    };
  } catch (e) {
    console.log(`Error fetching Termscondition data ${e}`)
    return {
      props: {
        termsAndConditionData: [],
      },
    };
  }
}
