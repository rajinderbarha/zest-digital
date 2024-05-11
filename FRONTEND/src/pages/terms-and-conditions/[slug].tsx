import DigitalTerms from "@/components/DigitalTerms";
import React from "react";
import { getSingleTerms } from "../../../lib/sanity.query";
import { SingletermsAndConditionsType } from "../../../lib/interface";
import { GetStaticPaths } from "next";

function SingletermsAndConditions({
  singletermsdata,
}: {
  singletermsdata: SingletermsAndConditionsType[];
}) {
  return <DigitalTerms data={singletermsdata} />;
}

export default SingletermsAndConditions;
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

  const singletermsdata = await getSingleTerms(slug);
  return {
    props: {
      singletermsdata,
    },
  };
}
