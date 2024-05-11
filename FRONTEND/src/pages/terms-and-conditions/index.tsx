import Terms_Conditions from "@/components/Terms_Conditions";
import React from "react";
import { getTermsndConditionsData } from "../../../lib/sanity.query";
import { TermsAndConditionsType } from "../../../lib/interface";

function Termsconditions({
  termsAndConditionData,
}: {
  termsAndConditionData: TermsAndConditionsType[];
}) {
  return <Terms_Conditions data={termsAndConditionData[0]} />;
}

export default Termsconditions;

export async function getStaticProps() {
  try{

    const termsAndConditionData = await getTermsndConditionsData();
    return {
      props: {
        termsAndConditionData,
      },
    };
  }catch(e){
    console.log(`Error fetching Termscondition data ${e}`)
    return {
      props: {
        termsAndConditionData: [],
      },
    };
  }
}
