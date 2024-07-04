import About_team from "@/components/About_page/About_Team";
import About_banner from "@/components/About_page/About_banner";
import Escape from "@/components/About_page/Escape";
import Our_values from "@/components/About_page/Our_values";
import Zest_for_life from "@/components/About_page/Zest_for_life";
import React from "react";
import { getAboutData } from "../../lib/sanity.query";
import { AboutType } from "../../lib/interface";
import 'aos/dist/aos.css';
import Head from "next/head";

const About_page = ({ aboutdata }: { aboutdata: AboutType[] }) => {

  return <>
    <Head>
      <title>About — Zest Digital</title>
      <meta name="title" property="" content="About — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/about" />
      <meta name="keywords" property="og:keywords" content="careers, Thanks, interest, hiring, zest, digital" />
      <meta name="description" property="og:description" content="Founded in 2010, Zest Digital is an award-winning growth marketing agency focused on creating sustainable growth for their clients, people, and the planet." />
    </Head>
    <div className="Body_padding">
      <About_banner data={aboutdata} />
      <About_team data={aboutdata} />
      <Our_values data={aboutdata} />
      <Zest_for_life data={aboutdata} />
      <Escape data={aboutdata} />
    </div>
  </>
};
export default About_page;

export async function getStaticProps() {
  try {
    const aboutdata = await getAboutData();
    return {
      props: {
        aboutdata,
      },
    };
  } catch (error) {
    console.error("Error fetching About_page data:", error);
    return {
      props: {
        aboutdata: [],
      },
    };
  }
}
