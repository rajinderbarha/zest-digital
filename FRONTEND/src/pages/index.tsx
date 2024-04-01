import React from 'react';
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import { HeaderType } from '@/components/Header';





export default function Home() {
  return (
   
    <>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services />
      </>
   
  );
}



