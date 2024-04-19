import { groq } from "next-sanity";
import client from "./sanity.client";

export function getHeader() {
  return client.fetch(
    groq`
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
    }`
  );
}
export function getClimateActiondata() {
  return client.fetch(
    groq`
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
    }`
  );
}

export function getFooter() {
  return client.fetch(
    groq`
    *[_type == "footer"] {
      climate_actionImg,
      earth_img,
      smallDescription,
      logo,
      footerItem[] {
        heading,
        list[] {
          name,
          link,
          icon
        }
      },
      brands[] {
        brandImage
      },
      social[] {
        socialImage,
        socialLink
      },
      copyRightText
    }
    
    `
  );
}

export async function getAboutData() {
  const headerquery = `
  *[_type == 'about'] {
    hero {
      title,
      heading,
      image
    },
    team[] {
      image,
      title,
      description
    },
    ourValue {
      heading,
      ourValuesection[] {
        image,
        title,
        description
      }
    },
    lifeSection {
      image,
      title,
      description
    },
    card[] {
      image,
      title,
      description
    },
    escape {
      heading,
      description,
      marquee[] {
        title,
        description
      }
    },
    banner {
      image1,
      image2,
      description
    }
  }
  
  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getSingleCasestudyData(slug: string) {
  const headerquery = `

*[_type == "singleCaseStudy" && slug.current == "${slug}"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
      team{
          heading,
          profile[]{
            image,
            name,
            description
          }
      },
      upperTitle,
      Title,
     
      slug,
      hero{
          heading,
          belowLine,
          item[]{
            icon,
            count, 
            heading,
            title,
            description
          }
      },
      card[]{
          heading,
          description,
          image
      }
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getCasestudyData() {
  const headerquery = `

*[_type == "caseStudy"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
      
      hero{
        heading,
        image,
        buttonName,
        buttonLink
      },
      collection[]->{
        slug,
        hero{
        image,
        heading,
        belowLine,
        item
        }
      }
      
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}
export async function getSolutionData() {
  const headerquery = `

*[_type == "solution"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
      
      hero{
        heading,
        image,
        upperTitle
      },
      transform{
        heading,
        belowLine,
        upperTitle{
          title,
          switcher[]
        }
      },
     growth[]->{
      slug,
     
     
        card{
       heading,
       description,
       image,
       buttonName,
        
   },
   
     },
      brandList[]->{
        icon
      }

      
      
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getInsightsData() {
  const headerquery = `

*[_type == "insights"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
      heading,
      linkSectionIcon,

      linkSection{
        linkName,
        linkUrl
      },
      collection[]->{
        slug,
       hero{
        heading,
        keywords[],
        icon
       }
      }
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getSingleInsightsData(slug: string) {
  const headerquery = `

*[_type == "singleInsights" && slug.current == "${slug}"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
      slug,
    hero{
      heading,
      keywords[],
      icon
    },
    content[],
    linkSection{
      icon,
      linkName,
      linkUrl
    }
     
     
    
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getResourcesData() {
  const headerquery = `

*[_type == "resources"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
    heading,
    hero{
      title,
      description,
      image,
      icon
    },
    tool[]{
      heading,
      description,
      buttonName,
      buttonLink,

    },
    brandList[]->{
      icon
    }
     
    
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getSchedule_a_callData() {
  const headerquery = `

*[_type == "Schedule_a_call"]{
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      },
    heading,
   description,
   image,
   subheading
    
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getTermsndConditionsData() {
  const headerquery = `

  *[_type == 'termsAndConditions'] {
    heading,
    'cards': card[]-> {
      slug,
      title,
      smallDescription,
      buttonName,
      content,
      'banner': banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      }
    },
    'banner': banner-> {
      climate_actionImg,
      earth_img,
      smallDescription
    }
  }
  

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export function getSingleTerms(slug: string) {
  return client.fetch(
    groq`
    *[_type == 'singleTermsOfService' && slug.current == "${slug}"] {
      slug,
      title,
      smallDescription,
      buttonName,
      content,
      'banner': banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      }
    }
    `
  );
}

// export async function getOurServicesSectionData() {
//   const OurServicesSection = `
//   *[_type == "OurServicesSection"] {
//     heading,
//       "cards": card[]-> {
//       "slug": slug.current,
//       "title": title,

//     },
//     "images": images {
//       "vertical_bar": vertical_bar.asset->url,
//       "Code_icon": Code_icon.asset->url,
//       "target_icon": target_icon.asset->url
//     },
//     "banner": banner-> {
//       "climate_actionImg": climate_actionImg.asset->url,
//       "earth_img": earth_img.asset->url,
//       "smallDescription": smallDescription
//     }
//   }
//   `;
//   const data = await client.fetch(OurServicesSection);
//   return data;
// }

export async function getSingleOurServicesData(slug: string) {
  const singleServicesSectionData = `
  *[_type == "singleService"  && slug.current == "${slug}"] {
  
  
    "slug": slug.current,
    "title": title,
    "smallDescription": smallDescription,
    "button": {
      "callButtonName": button.callButtonName,
      "resultsButtonName": button.resultsButtonName
    },
    "Services_Box": Services_Box {
      "imageBox": imageBox[] {
        "image": image.asset->url,
        "imagetitle": imagetitle
      },
      "contentBox": contentBox {
        "heading": heading,
        coloredText,
        "description": description,
        "belowdesc": belowdesc
      }
    },
    "Services_details": Services_details[] {
      "heading": heading,
      content,
      
      "image": image.asset->url
    },
    "Services_book_call": Services_book_call {
      "heading_call": heading_call,
      "buttonName": buttonName
    },
    "ourSubServices": ourSubServices {
      "heading_sub": heading_sub,
      "services": services[] {
        "image": image.asset->url,
        "title_sub": title_sub,
        "desc_sub": desc_sub
      }
    },
    "clientResults": clientResults {
      "title_CR": title_CR,
      "heading_CR": heading_CR,
      "card": card[] {
        "percentage_CR": percentage_CR,
        "mapped_title": mapped_title,
        "description_1_CR": description_1_CR,
        "description_2_CR": description_2_CR,
        "percentage_CR": percentage_CR,
        "buttonName_CR": buttonName_CR
      },
      "belowbuttonName_CR": belowbuttonName_CR
    },
    "globalaccordion": globalaccordion-> {
      "accordiongroup": accordiongroup {
        "heading_acc": heading_acc,
        "card_acc": card_acc[] {
          "question": question,
          content,
        },
        "belowbtnName_acc": belowbtnName_acc,
        "belowbtnLink_acc": belowbtnLink_acc
      }
    },
    "Services_Quotes": Services_Quotes[] {
      "desc_quote": desc_quote,
      "name_quote": name_quote
    },
    "agencyAddress": agencyAddress-> {
      "heading_add": heading_add,
      "slotDescription_add": slotDescription_add,
      "buttonName_add": buttonName_add,
      "address": address[] {
        "title_add": title_add,
        "streetAddress_add": streetAddress_add,
        "hourstitle_add": hourstitle_add,
        "dayandtiming_add": dayandtiming_add
      },
       card []{
         location ->{
          
            "latitude": latitude,
            "longitude": longitude
          
        },
        "contactno": contactno
      
    },

  },
  
  "banner": banner-> {
    "climate_actionImg": climate_actionImg.asset->url,
    "earth_img": earth_img.asset->url,
    "smallDescription": smallDescription
  }
}

  `;
  const data = await client.fetch(singleServicesSectionData);
  return data;
}

export async function getCareersData() {
  const headerquery = `

  *[_type == 'Careers'] {
    heading,
    "card": card {
      image,
      title,
      description
    },
    "banner": banner-> {
      climate_actionImg,
      earth_img,
      smallDescription
    }
  }
  

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getContactData() {
  const headerquery = `
  *[_type == 'contact'] {
    description,
    image,
    social[] {
      socialImage,
      socialLink
    },
    card[] {
      leftDescriptionList,
      rightDescriptionList,
      'latitude': location->latitude,
      'longitude': location->longitude
    }
  }
  

  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getGrowthData(slug: string) {
  //   we are getting this data from growthShared schema
  const headerquery = `
  *[_type == "growth" && slug.current == "${slug}"] {


    slug,
    heading,
    description,
    image,
    buttonName,
    buttonLink,
    "growthcard": growthcard-> {
      "slug":slug.current,
      mainheading,
      card{
     heading,
     description,
     image,
     buttonName,
      }
 },
    growthSection {
          upperHeading,
          upperSmallLine,
            growthContent[] {
                heading,
                description,
                belowLine,
                buttonName,
                buttonLink,
               
            },
            belowHeading,
            belowSmallLine,
            image
        },
        "globalaccordion": globalaccordion-> {
          "accordiongroup": accordiongroup {
            "heading_acc": heading_acc,
            "card_acc": card_acc[] {
              "question": question,
              content,
            },
            "belowbtnName_acc": belowbtnName_acc,
            "belowbtnLink_acc": belowbtnLink_acc
          }
        },
        "banner": banner-> {
            climate_actionImg,
            earth_img,
            smallDescription
        }
    }
   


    
  `;
  const data = await client.fetch(headerquery);
  return data;
}
export async function getHomepageData() {
  //   we are getting this data from growthShared schema
  const homepagequery = `
  *[_type == "homepage"] {
    growRevenue{
      video{
        asset-> {
       playbackId,
       assetId,
       filename,
     }
     },
     image,
     heading,
     viewSolBtnName,
     SeeOurResBtnName,
     viewSolBtnLink,
    SeeOurResBtnLink,
    },
    TransformResults {
        heading,
        switcher[],
        horizontalbars[] {
            numHeading,
            title,
            desc,
        },
        growthcard[]-> {
          "slug":slug.current,
          card{
            heading,
            description,
            buttonName,
            "image": image.asset->url,
          }
        },
        serviceSection{
    
          title,
          image1,
            image2,
            image3,
              services[]->{
                 "slug":slug.current,
                title
            }
          
        },


        brandList[]-> {
            "icon": icon.asset->url,
        },
         "banner": banner-> {
            climate_actionImg,
            earth_img,
            smallDescription
        }
    },
}

  `;
  const data = await client.fetch(homepagequery);
  return data;
}
