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
// import { usePopup } from "@/context";
import { useForm } from "react-hook-form";
function resources({ resources }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("popup");
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({});

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log("resources", resources);
  return (
    <>
      <StepPopup
        onClose={() => setStep(0)}
        open={search === "/calculator" || search === "/workbook"}
      >
        <>
          {step === 0 && (
            <Resource_Access_popup
              setStep={setStep}
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
            />
          )}
          {step === 5 && (
            <Resources_Calculater_Step_5
              setStep={setStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )}
        </>
      </StepPopup>

      <Resourcesbanner data={resources[0]} />
      <LearnToGrow data={resources[0]} />
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
