import DigitalTerms from "@/components/DigitalTerms";
import { getSingleTerms } from "../../../lib/sanity.query";
import { SingletermsAndConditionsType } from "../../../lib/interface";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Custom404 from "../404";

function SingletermsAndConditions({ errorCode, singletermsdata, }: { singletermsdata: SingletermsAndConditionsType[]; errorCode: any }) {
  if (errorCode) {
    return <Custom404 />;
  }

  return <div className="Body_padding">
    <DigitalTerms data={singletermsdata} />
  </div>
}
export default SingletermsAndConditions;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const { slug } = params!;
  const singletermsdata = await getSingleTerms(slug as string);
  if (!singletermsdata || singletermsdata.length === 0) {
    return {
      props: {

        errorCode: 404,
        singletermsdata: []
      }
    }
  }
  return {
    props: {
      errorCode: false,
      singletermsdata,
    },
  };
}
