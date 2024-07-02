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
import StepPopup from "@/common/PopupWrapper/stepPopup";
import { useForm } from "react-hook-form";
import Logo_moving from "@/common/Logo_moving";

function resources({ resources }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("popup");
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({});
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();


  function sendDataToGoogleSheets() {
    fetch('https://script.google.com/macros/s/AKfycbypYXDAAfgjAqOot2S1jWblyG9_Uo0nGtEgpkgbhp7kcFmFEU3t-W1ECr76vCkolAYS/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log("Response from Google Sheets:", data))
      .catch(error => console.error('No file available for download:', error));
  }

  let title;
  if (search === "/calculator") {
    title = "Access calculator"
  } else if (search === "/workbook") {
    title = "Access workbook"
  }


  return (
    <>
      <StepPopup
        onClose={() => setStep}
        open={search === "/calculator" || search === "/workbook"}
      >
        <>
          {step === 0 && (
            <Resource_Access_popup
              setStep={setStep}
              formTitle={title}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
          {step === 1 && (
            <Resources_Calculater_Step_1
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
          {step === 2 && (
            <Resources_Calculater_Step_2
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
          {step === 3 && (
            <Resources_Calculater_Step_3
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
          {step === 4 && (
            <Resources_Calculater_Step_4
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              formData={formData}
            />
          )}
          {step === 5 && (
            <Resources_Calculater_Step_5
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              sendDataToGoogleSheets={sendDataToGoogleSheets}
              downloadUrls={[selectedFileUrl]}
            />
          )}

        </>
      </StepPopup>
      <div className="Body_padding">
        <Resourcesbanner data={resources[0]} />
        <LearnToGrow data={resources[0]} setSelectedFileUrl={setSelectedFileUrl} />
        {/* <div className={` xl:mt-[200px] lg:mt-[170px] md:mt-[120px] sm:mt-[80px] mt-[50px] xl:mb-[190px] lg:mb-[160px] md:mb-[110px] sm:mb-[80px] mb-[50px]`}>
        <Logo_moving LogoMovdata={resources[0].brandList.map((a: any) => a)} />
      </div> */}
      </div>

    </>
  );
}
export default resources;

export async function getStaticProps() {
  const resources = await getResourcesData();
  return {
    props: { resources },
  };
}




