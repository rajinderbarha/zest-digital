import DigitalTerms from "@/components/DigitalTerms";
import Layout from "@/layout";
import React from "react";
import { getSingleOurServicesData, getSingleTerms } from "../../../lib/sanity.query";
import { SingleOurService, TermsOfServiceType } from "../../../lib/interface";
import Services from "@/components/Services";

function SingleService({singleservicedata,}: { singleservicedata: SingleOurService[];}) {
  // console.log("singleservicedata------------",singleservicedata)

  return  <Services data={singleservicedata[0]} />;
}

export default SingleService;

export async function getServerSideProps({params,}: { params: { slug: string };}) {
  
  const { slug } = params;

  const singleservicedata = await getSingleOurServicesData(slug);
  return {
    props: {
      singleservicedata,
    },
  };
}
