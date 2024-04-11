import LearnToGrow from "@/components/resourcesPage/learnToGrow";
import Resourcesbanner from "@/components/resourcesPage/resourcesbanner/resourcesbanner";
import React from "react";
import { getResourcesData } from "../../../lib/sanity.query";
import { useSearchParams } from "next/navigation";
import Resources_Calculater_Step_1 from "@/components/Resources_Calculater_Step_1";
import Resource_Access_popup from "@/components/Resource_Access_popup";
import Resources_Calculater_Step_2 from "@/components/Resources_Calculater_Step_2";
import Resources_Calculater_Step_3 from "@/components/Resources_Calculater_Step_3";
import Resources_Calculater_Step_4 from "@/components/Resources_Calculater_Step_4";
import Resources_Calculater_Step_5 from "@/components/Resources_Calculater_Step_5";
function resources({ resources }: any) {
  const searchParams = useSearchParams();

  const search = searchParams.get("popup");

  console.log("search", search === "/calculator");
  return (
    <>
      {search === "/calculator" ? (
        <>
          <Resources_Calculater_Step_1 />
          <Resources_Calculater_Step_2 />
          <Resources_Calculater_Step_3 />
          <Resources_Calculater_Step_4 />
          <Resources_Calculater_Step_5 />
        </>
      ) : search === "/workbook" ? (
        <Resource_Access_popup />
      ) : (
        <>
          <Resourcesbanner data={resources[0]} />
          <LearnToGrow data={resources[0]} />
        </>
      )}
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
