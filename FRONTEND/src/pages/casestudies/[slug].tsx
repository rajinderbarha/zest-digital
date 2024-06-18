import React from "react";
import SingleIntro from "@/components/singleCaseStudyPage/SingleIntro";
import Singalcasebanner from "@/components/singleCaseStudyPage/singalcasebanner";
import { getSingleCasestudyData } from "../../../lib/sanity.query";
import { SingleCasestudyType } from "../../../lib/interface";
import { GetStaticPaths, GetStaticPropsContext } from "next";
// import ErrorPage from "next/error";

function singlecasestudy({ singleCasestudy }: {singleCasestudy:SingleCasestudyType[]}) {
 

  // if (!singleCasestudy ) {
  //   return <ErrorPage statusCode={404} />;
  // }

  const data = {
    title: singleCasestudy[0].Title,
    upperTitle: singleCasestudy[0].upperTitle,
  };
  // console.log("datad == ",data)
  return (
    <>
    <div className="Body_padding">

      <Singalcasebanner data={data} />
      <SingleIntro
        hero={singleCasestudy[0].hero}
        sectionCard={singleCasestudy[0].sectionCard}
        team={singleCasestudy[0].team} Title={""}  upperTitle={""}      />
        </div>
    </>
  );
}

export default singlecasestudy;
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}
export async function getStaticProps({ params }:{params:{slug:string}}) {
  const { slug } = params;
  const singleCasestudy = await getSingleCasestudyData(slug);

  // if (!singleCasestudy || singleCasestudy.length === 0 ) {
  //   return {
  //     notFound: true, // Return 404 page
  //   };
  // }
  return {
    props: {
      singleCasestudy
    },
  };
}
