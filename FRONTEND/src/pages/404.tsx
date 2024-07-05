import AOS from 'aos'
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';

export default function Custom404() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <>
  <Head>
  <title>404 | Page Not Found</title>
  </ Head >
   <div className=" mb-28 overflow-hidden">
    <div className="flex items-center main_padding justify-center w-[100vw] h-[100vh] bg-color-1">
      <h1 className="text-[30px] font-mono font-semibold text-center lg:text-[50px] text-white" data-aos="zoom-in">404 | Page Not Found</h1>
    </div>
  </div>
  </>
}