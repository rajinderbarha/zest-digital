import React from "react";
import Services_Banner from "@/common/OurServices/Services_Banner";
import Services_Box from "@/common/OurServices/Services_Box";
import Services_book_call from "@/common/OurServices/Services_book_call";
import Services_SubServices from "@/common/OurServices/Services_SubServices";
import Client_Result from "@/common/OurServices/Client_Result";
import Services_Quotes from "@/common/OurServices/Services_Quotes";
import Global_Accordion from "../../common/Global_Accordion";
import Services_Address from "@/common/OurServices/Services_Address";
import Services_details_happy_customer from "@/common/OurServices/Services_details/Services_details_happy_customer";
import { SingleOurService } from "../../../lib/interface"

function Services({ data }: { data: SingleOurService }) {
  const {
    title,
    smallDescription,
    button: { callButtonName, resultsButtonName },
    Services_Box: {
      contentBox: { heading, description, belowdesc, coloredText },
      imageBox,
    },
    clientResults: { title_CR, heading_CR, belowbuttonName_CR, card: clientResultsMapData },
    agencyAddress: { buttonName_add, heading_add, slotDescription_add, address: agencyAddressData, cardLoc },
    globalaccordion: { accordiongroup: { heading_acc, card_acc: card_Accordian, belowbtnName_acc, belowbtnLink_acc } },
    Services_book_call: { heading_call, buttonName },
    ourSubServices: { heading_sub, services: subServices },
    Services_details,
    Services_Quotes: serviceQuotes,
  } = data;


  // Process agency address
  const agencyAddress = agencyAddressData.flatMap((item: any) => item.contactInfo);

  return (
    <>
      <Services_Banner
        max_width="1033px"
        title={title}
        smallDescription={smallDescription}
        button={{ callButtonName, resultsButtonName }}
      />
      <Services_Box Services_Box={{ contentBox: { heading, description, belowdesc, coloredText }, imageBox }} />
      <div className="xl:mt-[175px] lg:mt-[150px] md:mt-[125px] sm:mt-[80px] mt-[68px]"></div>
      <Services_details_happy_customer Services_details={Services_details} className="" />
      <Services_book_call heading={heading_call} buttonName={buttonName} />
      <Services_SubServices heading_sub={heading_sub} services={subServices} />
      <Client_Result
        card={clientResultsMapData}
        belowbuttonName_CR={belowbuttonName_CR}
        title_CR={title_CR}
        heading_CR={heading_CR}
      />
      <Global_Accordion
        heading_acc={heading_acc}
        card_acc={card_Accordian}
        belowbtnName_acc={belowbtnName_acc}
        belowbtnLink_acc={belowbtnLink_acc}
      />
      <Services_Quotes Services_Quotes={serviceQuotes} />
      <Services_Address
        heading_add={heading_add}
        slotDescription_add={slotDescription_add}
        buttonName_add={buttonName_add}
        address={agencyAddress}
        cardLoc={cardLoc}
      />
    </>
  );
}

export default Services;
