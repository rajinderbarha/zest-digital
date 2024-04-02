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



export function getFooter(){
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
  )
}

export function getAbout(){
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
  )
}


