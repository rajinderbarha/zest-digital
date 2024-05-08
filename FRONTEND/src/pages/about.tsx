import About_team from "@/components/About_page/About_Team";
import About_banner from "@/components/About_page/About_banner";
import Escape from "@/components/About_page/Escape";
import Our_values from "@/components/About_page/Our_values";
import Zest_for_life from "@/components/About_page/Zest_for_life";
import React from "react";
import { getAboutData } from "../../lib/sanity.query";
import { AboutType } from "../../lib/interface";

const About_page = ({ aboutdata }: { aboutdata: AboutType[] }) => {
  
  return (
    <div>
      <About_banner data={aboutdata} />
      <About_team data={aboutdata} />
      <Our_values data={aboutdata} />
      <Zest_for_life data={aboutdata} />
      <Escape data={aboutdata} />
    </div>
  );
};

export default About_page;

export async function getServerSideProps() {
  try{

    const aboutdata = await getAboutData();
    return {
      props: {
        aboutdata,
      },
    };
  }catch (error) {
    console.error("Error fetching About_page data:", error);
    return {
      props: {
        aboutdata: [],
      },
    };
  }
}
