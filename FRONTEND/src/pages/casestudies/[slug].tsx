import React from "react";
import SingleIntro from "@/components/singleCaseStudyPage/SingleIntro";
import Singalcasebanner from "@/components/singleCaseStudyPage/singalcasebanner";
import { getSingleCasestudyData } from "../../../lib/sanity.query";
import { SingleCasestudyType } from "../../../lib/interface";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Custom404 from "../404";

interface SingleCaseStudyProps {
  errorCode: number | boolean;
  singleCasestudy: SingleCasestudyType[];
}

const SingleCaseStudy: React.FC<SingleCaseStudyProps> = ({ errorCode, singleCasestudy }) => {
  if (errorCode) {
    return <Custom404 />;
  }
  const data = {
    title: singleCasestudy[0].Title,
    upperTitle: singleCasestudy[0].upperTitle,
  };

  return <div className="Body_padding">
    <Singalcasebanner data={data} />
    <SingleIntro
      hero={singleCasestudy[0].hero}
      sectionCard={singleCasestudy[0].sectionCard}
      team={singleCasestudy[0].team}
      Title={""}
      upperTitle={""}
    />
  </div>
};

export default SingleCaseStudy;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const singleCasestudy = await getSingleCasestudyData(slug as string);

  if (!singleCasestudy || singleCasestudy.length === 0) {
    return {
      props: {
        errorCode: 404,
        singleCasestudy: [],
      },
    };
  }
  return {
    props: {
      errorCode: false,
      singleCasestudy,
    },
  };
};
