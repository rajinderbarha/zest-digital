import GrowthEnginePage from "@/components/GrowthEnginePage";
import React from "react";
import { GrowthEngineType } from "../../lib/interface";
import { getGrowthData, getSharedEngineData } from "../../lib/sanity.query";

function growthengine({growth}:any) {

  console.log("will--------------------",growth )
  return (
    <>
      <GrowthEnginePage data={growth[0]}/>
    </>
  );
}

export default growthengine;


export async function getServerSideProps({ params }:{params:{slug:string}}) {
    const { slug } = params;
 
    const growth = await getGrowthData(slug);
    return {
      props: {
        growth,
      },
    };
  
   
  }

