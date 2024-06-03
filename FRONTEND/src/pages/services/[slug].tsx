import React from "react";
import { getSingleOurServicesData } from "../../../lib/sanity.query";
import { SingleOurService } from "../../../lib/interface";
import Services from "@/components/Services";
import { GetStaticPaths } from "next";

function SingleService({ singleservicedata, }: { singleservicedata: SingleOurService[]; }) {
  console.log(singleservicedata[0])
  return <Services data={singleservicedata[0]} />;
}
export default SingleService;
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

  const singleservicedata = await getSingleOurServicesData(slug);
  return {
    props: {
      singleservicedata,
    },
  };
}
