import React from 'react';
import Layout from "@/layout";
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Result from '@/components/Result';
import Solution from '@/components/Solution';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import Climate_action from '@/common/Climate_action';
import client from '../../sanity.client';
import { groq } from 'next-sanity';



export default  function Home({data}:any) {

console.log("Header",data)
  return (
    <Layout data={data}>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services />
      <Climate_action />
      {/* <About />
      <Result />
      <Solution /> */}
    </Layout>
  );
}

export async function getStaticProps(context:any) {
  // It's important to default the slug so that it doesn't return "undefined"
  // const { slug = "" } = context.params
  const data = await client.fetch(
    groq`*[_type == "header"]`
  )
  
  return {
    props: {
      data
    }
  }
}
