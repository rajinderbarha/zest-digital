import React from 'react';
import Layout from "@/layout";
import HeroSection from '@/components/HeroSection';
import Growth from '@/components/Growth';
import Logo_moving from '@/common/Logo_moving';
import Services from '@/common/Services';
import Climate_action from '@/common/Climate_action';
import client from '../../sanity.client';
import { HeaderType } from '@/components/Header';


export async function getHeaderData() {
  const headerquery = `
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
  const data = await client.fetch(headerquery);
  return data;
}


export default function Home({ headerdata }: { headerdata: HeaderType[] }) {
  return (
    <Layout headerdata={headerdata}  >
      <HeroSection />
      <Growth />
      <Logo_moving />
      <Services />
    </Layout>
  );
}

export async function getStaticProps() {
  const headerdata = await getHeaderData();
  return {
    props: {    
      headerdata
    }
  };
}

// import React from 'react';
// import Layout from "@/layout";
// import HeroSection from '@/components/HeroSection';
// import Growth from '@/components/Growth';
// import Logo_moving from '@/common/Logo_moving';
// import Services from '@/common/Services';
// import Climate_action from '@/common/Climate_action';
// import client from '../../sanity.client';
// import { HeaderType } from '@/components/Header';
// import { FooterType } from '@/components/Footer';


// export async function getHeaderData() {
//   const headerquery = `
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
//   const data = await client.fetch(headerquery);
//   return data;
// }
// export async function getFooterData() {
//   const footerquery = `
// *[_type == "footer"] {
//   logo,
//     footerItem[] {
//       heading,
//       list[] {
//         name,
//         link,
//         icon
//       },
//       brands[] {
//           brandImage
//       },
//     social[] {
//       socialImage,
//       socialLink
//     },
//     copyRightText
//     }
// }
//   `;
//   const data = await client.fetch(footerquery);
//   return data;
// }

// export default function Home({ headerdata }: { headerdata: HeaderType[] }, { footerdata }: { footerdata: FooterType[] }) {
//   return (
//     <Layout headerdata={headerdata} footerdata={footerdata} >
//       <HeroSection />
//       <Growth />
//       <Logo_moving />
//       <Services />
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const headerdata = await getHeaderData();
//   const footerdata = await getFooterData();
//   return {
//     props: {    
//       headerdata,
//       footerdata
//     }
//   };
// }

