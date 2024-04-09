import Contact from '@/components/Contact'
import React from 'react'
import { getContactData } from '../../lib/sanity.query';
import { ContactType, TermsAndConditionsType } from '../../lib/interface';

function contact({ contactData }: { contactData: ContactType[] }) {
  // console.log("contactData============================",contactData[0])

  return (
    <>
        <Contact data={contactData[0]}/>
    </>
  )
}

export default contact




export async function getStaticProps() {
  const contactData = await getContactData();
  return {
      props: {
        contactData
      }
  };
}