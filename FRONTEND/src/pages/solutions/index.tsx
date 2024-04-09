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
      <Logo_moving data={solution[0].brandList} />
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
