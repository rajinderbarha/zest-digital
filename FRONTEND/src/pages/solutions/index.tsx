import React from "react";
import Logo_moving from "@/common/Logo_moving";
import Section_Main from "@/components/SolutionsPage/Section_Main";
import Solution_Banner from "@/components/SolutionsPage/Solution_Banner";
import { getSolutionData } from "../../../lib/sanity.query";
function solutions({ solution }: any) {

  console.log("-----",solution[0])
  return (
    <>
      <Solution_Banner data={solution[0].hero} />
      <Section_Main data={solution[0].transform} card={solution[0].growth} />
      <div className="xl:mt-[256px] lg:mt-[200px] md:mt-[150px] sm:mt-[140px] mt-[65px] xl:mb-[200px] lg:mb-[175px] md:mb-[130px] sm:mb-[70px] mb-[65px]">
        <Logo_moving LogoMovdata={solution[0].brandList} />
      </div>
    </>
  );
}

export default solutions;

export async function getServerSideProps() {
  const solution = await getSolutionData();

  return {
    props: { solution },
  };
}
