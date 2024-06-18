import DigitalTerms from "@/components/DigitalTerms";
import React from "react";
import { getSingleTerms } from "../../../lib/sanity.query";
import { SingletermsAndConditionsType } from "../../../lib/interface";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import ErrorPage from "next/error";


function SingletermsAndConditions({singletermsdata,}: { singletermsdata: SingletermsAndConditionsType[];}) {

  
  if(!singletermsdata){
    return <ErrorPage  statusCode={404}/>
  }

  return <DigitalTerms data={singletermsdata} />;
}

export default SingletermsAndConditions;
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({params}:GetStaticPropsContext<{slug:string}>) {
  const { slug } = params!;

  const singletermsdata = await getSingleTerms(slug);

  if(!singletermsdata || singletermsdata.length === 0){
    return {
      notFound:true
    }
  }

  return {
    props: {
      singletermsdata,
    },
  };
}
