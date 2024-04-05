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





export async function getSharedEngineData() {   //   we are getting this data from growthShared schema 
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