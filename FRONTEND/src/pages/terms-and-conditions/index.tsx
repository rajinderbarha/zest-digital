import Climate_action from "@/common/Climate_action";
import Terms_Conditions from "@/components/Terms_Conditions";
// import Layout from '@/layout';
import React from "react";
import { getTermsndConditionsData } from "../../../lib/sanity.query";
import { TermsAndConditionsType } from "../../../lib/interface";

function Termsconditions({
  termsAndConditionData,
}: {
  termsAndConditionData: TermsAndConditionsType[];
}) {
  // console.log("termsAndConditionData-------------++++++++++++++",termsAndConditionData[0])
  return <Terms_Conditions data={termsAndConditionData[0]} />;
}

export default Termsconditions;

export async function getStaticProps() {
  const termsAndConditionData = await getTermsndConditionsData();
  return {
    props: {
      termsAndConditionData,
    },
  };
}
