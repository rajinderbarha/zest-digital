// import LearnToGrow from "@/components/resourcesPage/learnToGrow";
// import Resourcesbanner from "@/components/resourcesPage/resourcesbanner/resourcesbanner";
// import { useState } from "react";
// import { getResourcesData } from "../../../lib/sanity.query";
// import { useSearchParams } from "next/navigation";
// import Resources_Calculater_Step_1 from "@/components/Resources_Calculater_Step_1";
// import Resource_Access_popup from "@/components/Resource_Access_popup";
// import Resources_Calculater_Step_2 from "@/components/Resources_Calculater_Step_2";
// import Resources_Calculater_Step_3 from "@/components/Resources_Calculater_Step_3";
// import Resources_Calculater_Step_4 from "@/components/Resources_Calculater_Step_4";
// import Resources_Calculater_Step_5 from "@/components/Resources_Calculater_Step_5";
// import StepPopup from "@/common/PopupWrapper/stepPopup";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";

// import Head from "next/head";

// function resources({ resources }: any) {
//   const searchParams = useSearchParams();
//   const search = searchParams.get("popup");
//   const [step, setStep] = useState<number>(0);
//   const [formData, setFormData] = useState({});
//   const [selectedFileUrl, setSelectedFileUrl] = useState("");
//   const [progressValue, setProgressValue] = useState<number>(20);
//   const [priviousProgressValue, setPriviousProgressValue] = useState<number>(0);
//   const router = useRouter()

//   // console.log(router.query);

//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   function sendDataToGoogleSheets() {
//     fetch('https://script.google.com/macros/s/AKfycbypYXDAAfgjAqOot2S1jWblyG9_Uo0nGtEgpkgbhp7kcFmFEU3t-W1ECr76vCkolAYS/exec', {
//       method: 'POST',
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     })
//       .then(response => response.json())
//       .then(data => console.log("Response from Google Sheets:", data))
//       .catch(error => console.error('No file available for download:', error));
//   }

//   let title;
//   if (search === "/growthcalculator" || search === "/serpcalculator") {
//     title = "Access calculator"
//   } else if (search === "/workbook") {
//     title = "Access workbook"
//   }

//   const handleNextStep = (nextStep: number) => {
//     // forword step
//     if (nextStep > step) {
//       setProgressValue(progressValues[nextStep]);
//       setPriviousProgressValue(progressValues[nextStep - 1]);
//     }
//     // back step
//     else {
//       setProgressValue(progressValues[nextStep]);
//       setPriviousProgressValue(progressValues[nextStep + 1]);
//     }
//     // set initail values
//     if (nextStep === 0) {
//       setProgressValue(20);
//       setPriviousProgressValue(0);
//     }
//     setStep(nextStep);
//   };

//   const progressValues = [0, 20, 35, 55, 75, 90];
//   return (
//     <>
//       <StepPopup
//         onClose={() => setStep}
//         open={search === "/growthcalculator" || search === "/serpcalculator" || search === "/workbook"}
//       >
//         <>
//           {step === 0 && (
//             <Resource_Access_popup
//               setStep={setStep}
//               formTitle={title}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               sendDataToGoogleSheets={sendDataToGoogleSheets}
//             />
//           )}
//           {step === 1 && (
//             <Resources_Calculater_Step_1
//               setStep={handleNextStep}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               progressValue={progressValue}
//               priviousProgressValue={priviousProgressValue}
//             />
//           )}
//           {step === 2 && (
//             <Resources_Calculater_Step_2
//               setStep={handleNextStep}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               progressValue={progressValue}
//               priviousProgressValue={priviousProgressValue}
//             />
//           )}
//           {step === 3 && (
//             <Resources_Calculater_Step_3
//               setStep={handleNextStep}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               progressValue={progressValue}
//               priviousProgressValue={priviousProgressValue}
//             />
//           )}
//           {step === 4 && (
//             <Resources_Calculater_Step_4
//               setStep={handleNextStep}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               formData={formData}
//               progressValue={progressValue}
//               priviousProgressValue={priviousProgressValue}
//             />
//           )}
//           {step === 5 && (
//             <Resources_Calculater_Step_5
//               // setStep={setStep}
//               setStep={handleNextStep}
//               register={register}
//               handleSubmit={handleSubmit}
//               setFormData={setFormData}
//               sendDataToGoogleSheets={sendDataToGoogleSheets}
//               downloadUrls={[selectedFileUrl]}
//               progressValue={progressValue}
//               priviousProgressValue={priviousProgressValue}
//             />
//           )}

//         </>
//       </StepPopup>

//       <>
//         <Head>
//           <title>General  2 — Zest Digital</title>
//           <meta name="title" property="" content="General  2 — Zest Digital" />
//           <meta name="url" property="og:url" content="https://www.zestdigital.com/resources" />
//           <meta name="keywords" property="og:keywords" content="zest, calculator, workbook , ideas" />
//           <meta name="description" property="og:description" content="" />
//         </Head>
//         <div className="Body_padding">
//           <Resourcesbanner data={resources[0]} />
//           <LearnToGrow data={resources[0]} setSelectedFileUrl={setSelectedFileUrl} />

//         </div>
//       </>

//     </>
//   );
// }
// export default resources;

// export async function getStaticProps() {
//   const resources = await getResourcesData();
//   return {
//     props: { resources },
//   };
// }




import LearnToGrow from "@/components/resourcesPage/learnToGrow";
import Resourcesbanner from "@/components/resourcesPage/resourcesbanner/resourcesbanner";
import { useState } from "react";
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
// import { useRouter } from "next/router";
import Head from "next/head";

function Resources({ resources }: any) {
  const searchParams = useSearchParams();
  const search = searchParams.get("popup");
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({});
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>("");
  const [progressValue, setProgressValue] = useState<number>(20);
  const [previousProgressValue, setPreviousProgressValue] = useState<number>(0);
  // const router = useRouter();

  console.log(selectedFileUrl);


  const { register, handleSubmit } = useForm();

  async function sendDataToGoogleSheets(data: any) {
    let dynamicSheetData;
    {
      // search === "/growthcalculator"
      search === "/calculator"
        ? (dynamicSheetData = formData)
        : (dynamicSheetData = data);
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbypYXDAAfgjAqOot2S1jWblyG9_Uo0nGtEgpkgbhp7kcFmFEU3t-W1ECr76vCkolAYS/exec",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dynamicSheetData),
        }
      );

      const responsedata = await response.json();
      console.log("Response from Google Sheets:", responsedata);
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  }

  let title;
  if (search === "/calculator" || search === "/serpcalculator") {
    title = "Access calculator";
  } else if (search === "/workbook") {
    title = "Access workbook";
  }

  const handleNextStep = (nextStep: number) => {

    if (nextStep > step) {
      setProgressValue(progressValues[nextStep]);
      setPreviousProgressValue(progressValues[nextStep - 1]);
    } else {
      setProgressValue(progressValues[nextStep]);
      setPreviousProgressValue(progressValues[nextStep + 1]);
    }
    if (nextStep === 0) {
      setProgressValue(20);
      setPreviousProgressValue(0);
    }
    setStep(nextStep);
  };

  const progressValues = [0, 20, 35, 55, 75, 90];

  return (
    <>
      <StepPopup
        onClose={() => setStep(0)}
        open={
          // search === "/growthcalculator" ||
          search === "/calculator" ||
          search === "/serpcalculator" ||
          search === "/workbook"
        }
      >
        <>
          {step === 0 && (
            <Resource_Access_popup
              setStep={handleNextStep}
              formTitle={title}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              sendDataToGoogleSheets={sendDataToGoogleSheets}
              downloadUrls={[selectedFileUrl]}
            />
          )}
          {step === 1 && (
            <Resources_Calculater_Step_1
              setStep={handleNextStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              progressValue={progressValue}
              priviousProgressValue={previousProgressValue}
            />
          )}
          {step === 2 && (
            <Resources_Calculater_Step_2
              setStep={handleNextStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              progressValue={progressValue}
              priviousProgressValue={previousProgressValue}
            />
          )}
          {step === 3 && (
            <Resources_Calculater_Step_3
              setStep={handleNextStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              progressValue={progressValue}
              priviousProgressValue={previousProgressValue}
            />
          )}
          {step === 4 && (
            <Resources_Calculater_Step_4
              setStep={handleNextStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              formData={formData}
              progressValue={progressValue}
              priviousProgressValue={previousProgressValue}
            />
          )}
          {step === 5 && (
            <Resources_Calculater_Step_5
              setStep={handleNextStep}
              register={register}
              handleSubmit={handleSubmit}
              setFormData={setFormData}
              sendDataToGoogleSheets={sendDataToGoogleSheets}
              downloadUrls={[selectedFileUrl]}
              progressValue={progressValue}
              priviousProgressValue={previousProgressValue}
            />
          )}
        </>
      </StepPopup>

      <>
        <Head>
          <title>General 2 — Zest Digital</title>
          <meta name="title" property="" content="General 2 — Zest Digital" />
          <meta
            name="url"
            property="og:url"
            content="https://www.zestdigital.com/resources"
          />
          <meta
            name="keywords"
            property="og:keywords"
            content="zest, calculator, workbook, ideas"
          />
          <meta name="description" property="og:description" content="" />
        </Head>
        <div className="Body_padding">
          <Resourcesbanner data={resources[0]} />
          <LearnToGrow
            data={resources[0]}
            setSelectedFileUrl={setSelectedFileUrl}
          />
        </div>
      </>
    </>
  );
}

export default Resources;

export async function getStaticProps() {
  const resources = await getResourcesData();
  return {
    props: { resources },
  };
}
