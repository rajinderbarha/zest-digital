import React from 'react';
import Layout from "@/layout";
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import Climate_action from '@/common/Climate_action';
import client from '../../sanity.client';
import { HeaderType } from '@/components/Header';
// export interface HeaderType {
//   logo: any,
//   navItem: { buttonName: string, buttonLink: string }[],
//   button: { navName: string, navLink: string }
// }

export async function getHeaderData() {
  const query = `
    *[_type == 'header'] {
      logo,
      navItem[] {
        buttonName,
        buttonLink
      },
      button {
        navName,
        navLink
      }
    }
  `;
  const data = await client.fetch(query);
  return data;
}

export default function Home({ data }: { data: HeaderType[] }) {
  return (
    <Layout data={data}>
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services />
      <Climate_action />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getHeaderData();
  return {
    props: {
      data
    }
  };
}

































































// import React, { useEffect, useState } from 'react';
// import Layout from "@/layout";
// import HeroSection from '@/components/HeroSection';
// // import About from '@/components/About';
// // import Result from '@/components/Result';
// // import Solution from '@/components/Solution';
// import Growth from '@/components/Growth';
// import Logo_moving from '@/common/Logo_moving';
// import Services from '@/common/Services';
// import Climate_action from '@/common/Climate_action';
// import client from '../../sanity.client';
// import { groq } from 'next-sanity';

// export default function Home({ data }: any) {
//   const [queryData, setQueryData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const queryData = await getData();
//         setQueryData(queryData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   console.log("Query Data:", queryData);
//   console.log("Header Data:", data);

//   return (
//     <Layout data={data}>
//       <HeroSection />
//       <Growth />
//       <Logo_moving />
//       <Services />
//       <Climate_action />
//       {/* <About />
//       <Result />
//       <Solution /> */}
//     </Layout>
//   );
// }

// async function getData() {
//   const query = `
//     *[_type == 'header'] {
//       logo,
//       navItem[] {
//         buttonName,
//         buttonLink
//       },
//       button {
//         navName,
//         navLink
//       }
//     }
//   `;

//   const data = await client.fetch(query);
//   return data;
// }

// export async function getStaticProps(context: any) {
//   const data = await client.fetch(groq`*[_type == 'header'] {
//     logo,
//     navItem[] {
//       buttonName,
//       buttonLink
//     },
//     button {
//       navName,
//       navLink
//     }
//   }`);

//   return {
//     props: {
//       data
//     }
//   };
// }
