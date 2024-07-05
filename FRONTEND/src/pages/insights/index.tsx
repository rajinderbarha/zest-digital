import Filters from "@/components/Insights/Filters";
import { getInsightsData } from "../../../lib/sanity.query";
import { FiltersType } from "../../../lib/interface";


const insights = ({ insights }: { insights: FiltersType[] }) => {
  return <>

  
   <div className="Body_padding">
    <Filters data={insights[0]} />
  </div>
  </>
};
export default insights;

export async function getStaticProps() {
  const insights = await getInsightsData();
  return {
    props: { insights },
  };
}
