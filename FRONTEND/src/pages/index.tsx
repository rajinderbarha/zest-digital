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



export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services />
      <Climate_action />
      <About />
      <Result />
      <Solution />
    </Layout>
  );
}
