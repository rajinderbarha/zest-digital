import About_team from '@/components/About_page/About_Team'
import About_banner from '@/components/About_page/About_banner'
import Escape from '@/components/About_page/Escape'
import Our_values from '@/components/About_page/Our_values'
import Zest_for_life from '@/components/About_page/Zest_for_life'
import React from 'react'
import client from '../../sanity.client';
import { getAboutData } from '../../sanity.query'


interface AboutType {
  hero: {
    title: string;
    heading: string;
    image: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
  };
  team: {
    image: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    title: string;
    description: string;
  }[];
  ourValue: {
    heading: string;
    ourValuesection: {
      image: {
        _type: string; // Ensure correct typing based on your schema
        asset: {
          _type: string; // Ensure correct typing based on your schema
          url: string; // Ensure correct typing based on your schema
          // Add any other fields if necessary
        };
        // Add any other fields if necessary
      };
      title: string;
      description: string;
    }[];
  };
  lifeSection: {
    image: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    title: string;
    description: string;
  };
  card: {
    image: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    title: string;
    description: string;
  }[];
  escape: {
    heading: string;
    description: string;
    marquee: {
      title: string;
      description: string;
    }[];
  };
  banner: {
    image1: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    image2: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    description: string;
  };
}





const About_page = ({ aboutdata }: { aboutdata: AboutType[] }) => {

  console.log("aboutdata=====================",aboutdata)

  return (
    <div>
      <About_banner />
      <About_team />
      <Our_values />
      <Zest_for_life />
      <Escape />
    </div>
  )
}

export default About_page

export async function getStaticProps() {
  const aboutdata = await getAboutData();
  return {
    props: {    
      aboutdata
    }
  };
}




