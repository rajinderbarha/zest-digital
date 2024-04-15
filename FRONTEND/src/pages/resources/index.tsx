import LearnToGrow from "@/components/resourcesPage/learnToGrow";
import Resourcesbanner from "@/components/resourcesPage/resourcesbanner/resourcesbanner";
import React, { useState } from "react";
import { getResourcesData } from "../../../lib/sanity.query";
import { useSearchParams } from "next/navigation";
import Resources_Calculater_Step_1 from "@/components/Resources_Calculater_Step_1";
import Resource_Access_popup from "@/components/Resource_Access_popup";
import Resources_Calculater_Step_2 from "@/components/Resources_Calculater_Step_2";
import Resources_Calculater_Step_3 from "@/components/Resources_Calculater_Step_3";
import Resources_Calculater_Step_4 from "@/components/Resources_Calculater_Step_4";
import Resources_Calculater_Step_5 from "@/components/Resources_Calculater_Step_5";
import PopupWrapper from "@/common/PopupWrapper";
import { usePopup } from "@/context";
function resources({ resources }: any) {
  const searchParams = useSearchParams();
  const { isOpen, openPopup, closePopup } = usePopup() as any;
  const search = searchParams.get("popup");
  const[step, setStep] = useState<number>(0)

  console.log("search", search === "/calculator");
  return (
    <>
      <button type="button" onClick={() => openPopup()}>
        Click me
      </button>
      {(search === "/calculator") || (search === "/workbook") ? (
        <>
          <PopupWrapper>
            {step===0 && <Resource_Access_popup setStep={setStep}/>}
            {step===1 && <Resources_Calculater_Step_1 setStep={setStep} />}
            {step===2 && <Resources_Calculater_Step_2 setStep={setStep}/>}
            {step===3 && <Resources_Calculater_Step_3 setStep={setStep}/>}
            {step===4 && <Resources_Calculater_Step_4 setStep={setStep}/>}
            {step===5 && <Resources_Calculater_Step_5 setStep={setStep}/>}
          </PopupWrapper>
          
        </>
      ) : ( <>
        <Resourcesbanner data={resources[0]} />
        <LearnToGrow data={resources[0]} />
      </>)}
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
