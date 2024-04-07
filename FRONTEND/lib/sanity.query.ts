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

export function getDigitalTerms() {
  return client.fetch(
    groq`
    *[_type == 'digitalTermsOfService'] {
      content,
      "banner": banner-> {
        climate_actionImg,
        earth_img,
        smallDescription
      }
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

export async function getSharedEngineData() {
  //   we are getting this data from growthShared schema
  const headerquery = `
  *[_type == "growthEngine"] {
    growthEngine {
        heroSection {
            upperTitle,
            heading,
            button {
                buttonName,
                buttonLink
            }
        },
        growthSection {
            headingUpper,
            titleUpper,
            growthContent[] {
                title,
                description,
                buttonName,
                buttonLink,
                price {
                    priceOutline
                }
            },
            headingBelow,
            titleBelow,
            image
        },
        solution {
            heading,
            card[] {
                title,
                description,
                buttonName,
                buttonLink
            },
            image
        },
        "banner": banner-> {
            climate_actionImg,
            earth_img,
            smallDescription
        }
    },
    signupform {
        signupheading,
        signupdescription,
        firstnameLabel,
        lastnameLabel,
        emailLabel
    }
}

    
  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getSharedTrackerData() {
  const headerquery = `
  *[_type == "growthTracker"] {
    growthTracker {
        heroSection {
            upperTitle,
            heading,
            button {
                buttonName,
                buttonLink
            }
        },
        growthSection {
            headingUpper,
            titleUpper,
            growthContent[] {
                title,
                description,
                buttonName,
                buttonLink,
                
            },
            headingBelow,
            titleBelow,
            image
        },
        solution {
            heading,
            card[] {
                title,
                description,
                buttonName,
                buttonLink,
                image
            }
        },
        "banner": banner-> {
            climate_actionImg,
            earth_img,
            smallDescription
        }
    },
    signupform {
        signupheading,
        signupdescription,
        firstnameLabel,
        lastnameLabel,
        emailLabel,
        buttonName,
        buttonLink,
        privacyDescription
    }
}

    
  `;
  const data = await client.fetch(headerquery);
  return data;
}

export async function getSharedCurveData() {
  const headerquery = `
  *[_type == "growthCurve"] {
    growthCurve {
        heroSection {
            upperTitle,
            heading,
            button {
                buttonName,
                buttonLink
            }
        },
        growthSection {
            headingUpper,
            titleUpper,
            growthContent[] {
                title,
                description,
                buttonName,
                buttonLink,
                
            },
            headingBelow,
            titleBelow,
            image
        },
        solution {
            heading,
            card[] {
                title,
                description,
                buttonName,
                buttonLink
            },
            image
        },
        "banner": banner-> {
            climate_actionImg,
            earth_img,
            smallDescription
        }
    },
    signupform {
        signupheading,
        signupdescription,
        firstnameLabel,
        lastnameLabel,
        emailLabel
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
      card[]{
        heading,
        description,
        image,
        buttonName,
        buttonLink
      },
      brandList[]

      
      
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
   description
    
    }

  `;
  const data = await client.fetch(headerquery);
  return data;
}
