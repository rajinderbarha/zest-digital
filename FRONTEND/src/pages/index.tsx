import React from 'react';
import Layout from "@/layout";
import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Result from '@/components/Result';
import Solution from '@/components/Solution';



export default function Home() {
  return (
   <Layout>
    <HeroSection/>
    <About/>
    <Result/>
    <Solution/>
   </Layout>
  );
}
