// import React from "react";
// import { getSingleOurServicesData } from "../../../lib/sanity.query";
// import { SingleOurService } from "../../../lib/interface";
// import Services from "@/components/Services";
// import { GetStaticPaths } from "next";

// function SingleService({ singleservicedata, }: { singleservicedata: SingleOurService[]; }) {
//   // console.log("a---------",singleservicedata[0])
//   return <Services data={singleservicedata[0]} />;
// }
// export default SingleService; 


// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//   return {
//       paths: [], //indicates that no page needs be created at build time
//       fallback: 'blocking' //indicates the type of fallback
//   }
// }
// export async function getStaticProps({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const singleservicedata = await getSingleOurServicesData(slug);
//   return {
//     props: {
//       singleservicedata,
//     },
//   };
// }


















import React from "react";
import { getSingleOurServicesData } from "../../../lib/sanity.query";
import { SingleOurService } from "../../../lib/interface";
import Services from "@/components/Services";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import ErrorPage from "next/error";
import Custom404 from "../404";

function SingleService({ errorCode,singleservicedata }: {errorCode:any, singleservicedata: SingleOurService }) {
  if (errorCode) {
    return <Custom404/>;
  }

  return <Services data={singleservicedata} />;
}

export default SingleService;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], // No pages created at build time
    fallback: 'blocking', // Type of fallback
  };
};

export const getStaticProps = async({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const singleservicedata = await getSingleOurServicesData(slug as string);

  if (!singleservicedata || singleservicedata.length === 0) {
    return {
      props:{

        errorCode: 404,
        singleservicedata:[]
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
