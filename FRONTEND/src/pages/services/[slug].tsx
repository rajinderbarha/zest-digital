import React from "react";
import { getSingleOurServicesData } from "../../../lib/sanity.query";
import { SingleOurService } from "../../../lib/interface";
import Services from "@/components/Services";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Custom404 from "../404";

function SingleService({ errorCode, singleservicedata }: { errorCode: any, singleservicedata: SingleOurService }) {
  if (errorCode) {
    return <Custom404 />;
  }
  return <Services data={singleservicedata} />;
}
export default SingleService;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const singleservicedata = await getSingleOurServicesData(slug as string);

  if (!singleservicedata || singleservicedata.length === 0) {
    return {
      props: {
        errorCode: 404,
        singleservicedata: []
      }
    };
  }
  return {
    props: {
      errorCode: false,
      singleservicedata: singleservicedata[0],
    },
  };
}
