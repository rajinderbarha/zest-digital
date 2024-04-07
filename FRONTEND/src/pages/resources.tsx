import LearnToGrow from "@/components/resourcesPage/learnToGrow";
import Resourcesbanner from "@/components/resourcesPage/resourcesbanner/resourcesbanner";
import React from "react";
import { getResourcesData } from "../../lib/sanity.query";
function resources({resources}:any) {
  
  return (
    <>
      <Resourcesbanner data={resources[0]}/>
      <LearnToGrow data={resources[0]}/>
    </>
  );
}

export default resources;

export async function getServerSideProps() {
  const resources = await getResourcesData();

  return {
    props: { resources },
  };
}
