import Contact from "@/components/Contact";
import React from "react";
import { getContactData } from "../../lib/sanity.query";
import { ContactType } from "../../lib/interface";

function contact({ contactData }: { contactData: ContactType[] }) {
  return <div className="Body_padding">
    <Contact data={contactData[0]} />
  </div>
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
