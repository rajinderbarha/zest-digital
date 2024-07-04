import Contact from "@/components/Contact";
import React from "react";
import { getContactData } from "../../lib/sanity.query";
import { ContactType } from "../../lib/interface";
import Head from "next/head";

function contact({ contactData }: { contactData: ContactType[] }) {
  return <>
   <Head>
      <title>Contact — Zest Digital</title>
      <meta name="title" property="" content="Contact — Zest Digital" />
      <meta name="url" property="og:url" content="https://www.zestdigital.com/contact" />
      <meta name="keywords" property="og:keywords" content="contact, enquiry, zest, digital" />
      <meta name="description" property="og:description" content="" />
    </Head>
  <div className="Body_padding">
    <Contact data={contactData[0]} />
  </div>
  </> 
}
export default contact;

export async function getStaticProps() {
  const contactData = await getContactData();
  return {
    props: {
      contactData,
    },
  };
}
