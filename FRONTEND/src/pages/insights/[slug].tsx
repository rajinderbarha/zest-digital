import SingleInsightPage from "@/components/SingleInsightPage";
import { getSingleInsightsData, getSlugOfInsightsCards } from "../../../lib/sanity.query";
import { SingleInsightsType } from "../../../lib/interface";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Custom404 from "../404";

interface SingleCaseStudyProps {
  errorCode: number | boolean;
  singleInsights: SingleInsightsType[];
  slugInsightCard: any
}


const singleinsightpage: React.FC<SingleCaseStudyProps> = ({ errorCode, singleInsights, slugInsightCard }) => {
  if (errorCode) {
    return <Custom404 />;
  }

  return <div className="Body_padding">
    <SingleInsightPage data={singleInsights[0]} slugCard={slugInsightCard[0].collection} />
  </div>
}
export default singleinsightpage;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const singleInsights = await getSingleInsightsData(slug as string);
  const slugInsightCard = await getSlugOfInsightsCards()

  if (!singleInsights || singleInsights.length === 0 || !slugInsightCard) {
    return {
      props: {
        errorCode: 404,
        singleInsights: [],
        slugInsightCard: []
      },
    };
  }
  return {
    props: {
      errorCode: false,
      singleInsights,
      slugInsightCard
    },
  };
}
