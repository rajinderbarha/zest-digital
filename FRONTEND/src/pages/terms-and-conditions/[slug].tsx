import DigitalTerms from "@/components/DigitalTerms";
import React from "react";
import { getSingleTerms } from "../../../lib/sanity.query";
import { SingletermsAndConditionsType } from "../../../lib/interface";

function SingletermsAndConditions({
  singletermsdata,
}: {
  singletermsdata: SingletermsAndConditionsType[];
}) {
  return <DigitalTerms data={singletermsdata} />;
}

export default SingletermsAndConditions;

export async function getServerSideProps({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const singletermsdata = await getSingleTerms(slug);
  return {
    props: {
      singletermsdata,
    },
  };
}
