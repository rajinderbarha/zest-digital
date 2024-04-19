import React from "react";
import Logo_moving from "@/common/Logo_moving";
import Section_Main from "@/components/SolutionsPage/Section_Main";
import Solution_Banner from "@/components/SolutionsPage/Solution_Banner";
import { getSolutionData } from "../../../lib/sanity.query";
function solutions({ solution }: any) {
  return (
    <>
      <Solution_Banner data={solution[0].hero} />
      <Section_Main data={solution[0].transform} card={solution[0].growth} />
      <div className="xl:mt-[250px] lg:mt-[200px] md:mt-[150px] sm:mt-[140px] mt-[100px] xl:mb-[200px] lg:mb-[180px] md:mb-[150px] mb-[120px]">
        <Logo_moving data={solution[0].brandList} />
      </div>
    </>
  );
}

export default solutions;

export async function getStaticProps() {
  const solution = await getSolutionData();

  return {
    props: { solution },
  };
}
