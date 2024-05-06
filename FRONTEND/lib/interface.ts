import { ReactNode } from "react";

export interface ScheduleCallProps {
  schedule_a_call: Schedule_a_call[];
}

export interface Schedule_a_call {
  heading: string;
  description: string;
  image: any;
  subheading: string;
}

//---------------------------------------------Homepage------------------------------------
export interface HomepageProps {
  homepageData: {
    growRevenue: {
      heading: string;
      viewSolBtnName: string;
      SeeOurResBtnName: string;
      viewSolBtnLink: string;
      SeeOurResBtnLink: string;
      image: any;
      videosrc: any;
    };
    TransformResults: {
      brandList?: any;
      serviceSection?: any;
      growthcard?: any;
      length?: number;
      slice?: (arg0: number) => any;
      heading?: string;
      switcher?: string[];
      horizontalbars?: { desc: string; numHeading: string; title: string }[];
    };
  }[];
}

export interface HomepageHeroSec {
  HeroSecData: {
    heading: string;
    viewSolBtnName: string;
    SeeOurResBtnName: string;
    viewSolBtnLink: string;
    SeeOurResBtnLink: string;
    image: any;
    videosrc: any;
  };
}

export interface HomepageGrowthCard {
  card: {
    growthcard?: any;
    length?: number;
    slice?: (arg0: number) => any;

    heading?: string;
    switcher?: string[];
    horizontalbars?: { desc: string; numHeading: string; title: string }[];
  };
}

export interface LogoMoving {
  LogoMovdata: {
    icon: string;
  }[];
}

export interface GrowthEngineProps {
  props: {
    heading: string;
    description: string;
    buttonName: string;
    buttonLink: string;
    image: any;
  };
  has_image: boolean;
  shadow_right: boolean;
}

export interface HomePageServices {
  data: {
    title: string;
    image1: any;
    image2: any;
    image3: any;
    services: { slug: string; title: string }[];
  };
}
//---------------------------------------------Homepage------------------------------------

//---------------------------------------------Contact------------------------------------
export interface ContactType {
  description: string;
  image: {
    _type: string;
    asset: {
      _type: string;
      url: string;
    };
  };
  social: {
    socialImage: {
      _type: string;
      asset: {
        _type: string;
        url: string;
      };
    };
    socialLink: string;
  }[];
  card: {
    leftDescriptionList: string;
    rightDescriptionList: string;
    latitude: number;
    longitude: number;
  }[];
}
//---------------------------------------------Contact------------------------------------

//---------------------------------------------Career------------------------------------
export interface CareerCard {
  image: string; // Assuming this is the URL of the image
  title: string;
  description: string;
}

export interface CareersType {
  heading: string;
  card: CareerCard;
  banner: ClimateAction;
}

export interface CareerProps {
  data: CareersType[];
}
//---------------------------------------------Career------------------------------------

//---------------------------------------------About------------------------------------
export interface ImageType {
  _type: string;
  asset: {
    _type: string;
    url: string;
  };
}

export interface AboutBanner {
  title: string;
  heading: string;
  image: ImageType;
}
[];
export interface AboutOurValues {
  heading: string;
  ourValuesection: {
    image: ImageType;
    title: string;
    description: string;
  }[];
}

export interface AboutCard {
  image: ImageType;
  title: string;
  description: string;
}
[];

export interface AboutEscapeSec {
  heading: string;
  careerPagelink: string;
  description: string;
  marquee: {
    title: string;
    description: string;
  }[];
}

export interface AboutBanner {
  image1: ImageType;
  image2: ImageType;
  description: string;
}

export interface AboutType {
  hero: AboutBanner;
  team: {
    image: ImageType;
    title: string;
    description: string;
  }[];
  ourValue: AboutOurValues;
  lifeSection: {
    image: ImageType;
    title: string;
    description: string;
  };
  card: AboutCard[];
  escape: AboutEscapeSec;
  banner: AboutBanner;
}

//---------------------------------------------About------------------------------------

//---------------------------------------------Termsconditions------------------------------------

export interface TermsAndConditionsType {
  heading: string;
  cards: {
    slug: string;
    title: string;
    smallDescription: string;
    buttonName: string;
    buttonLink: string;
    content: string[];
    banner: ClimateAction;
  }[];
  banner: ClimateAction;
}

export interface SingletermsAndConditionsType {
  content: any;
  title: string;
}

//---------------------------------------------Termsconditions------------------------------------



//---------------------------------------------Header------------------------------------
export interface HeaderType {
  logo: any;
  navItem: { buttonName: string; buttonLink: string }[];
  button: { navName: string; navLink: string };
}
//---------------------------------------------Header------------------------------------



//---------------------------------------------Footer------------------------------------
export interface ClimateAction {
  climate_actionImg: {
    _type: string;
    asset: { _type: string };
  };
  earth_img: { _type: string; asset: { _type: string  } };
  smallDescription: string;
}

export interface FooterType extends ClimateAction {
  id: any;
  logo: string;
  footerItem: {
    id: any;
    heading: string;
    list: {
      id: any;
      contact: any;
      address: any;
    }[];
  }[];
  brands: {
    id: any;
    brandImage: { _type: string; asset: { _type: string /* other fields */ } };
  }[];
  social: {
    id: any;
    socialImage: { _type: string; asset: { _type: string /* other fields */ } };
    socialLink: string;
  }[];
  copyRightText: any;
}
//---------------------------------------------Footer------------------------------------







//---------------------------------------------Solution------------------------------------

export interface SolutionProps{
  
  brandList: { icon: string; }[];
  growth: SolSection_Main_Card[];
  transform: SolSection_Main;
  hero: Solution_BannerType;
}


export interface Solution_BannerType {
  upperTitle:string,
  heading:string,
  image:any
}

export interface SolSection_Main{
  belowLine: string;
  heading: string;
  upperTitle: {
    switcher: string[]; 
    title: string;
  };
}


export interface SolSection_Main_Card {
  card:{
    buttonName:string,
    description:string,
    heading:string,
    image:any
  }
  slug:Slug
}

export interface Slug{
  current:string,
  _type:string
}
//---------------------------------------------Solution------------------------------------



//---------------------------------------------Services------------------------------------

export interface SingleOurService {
  buttonName: ReactNode;
  heading: ReactNode;
  imageBox: any;
  slug: string;
  title: string;
  smallDescription: string;
  max_width: string;
  button: {
    callButtonName: string;
    resultsButtonName: string;
  };
  Services_Box: Services_BoxType

  Services_details: HappyCustomer[];
  Services_book_call: Services_book_cal;
  ourSubServices: SubServices;
  clientResults: clientResults;
  globalaccordion: {
    accordiongroup: AccordianType;
  };
  Services_Quotes: ServiceQuote[];
  agencyAddress: AgencyAddress;
  banner: ClimateAction;
}



export interface ServiceImageBox {
  image: string;
  imagetitle: string;
}


export interface Services_BoxType {
  imageBox: ServiceImageBox[];
  contentBox: ServiceContentBox;
}

export interface ServiceContentBox {
  heading: string;
  coloredText: string;
  description: string;
  belowdesc: string;
}

export interface HappyCustomer {
  [x: string]: any;
  Services_details: {
    heading: string;
    content: any;
    // description_1: string;
    // description_2: string;
    image: string;
  }[];
}

export interface Services_book_cal {
  [x: string]: any;
  heading: string;
  buttonName: string;
}

export interface SubServices {
  heading_sub: string;
  services: {
    image: string;
    title_sub: string;
    desc_sub: string;
  }[];
}

export interface clientResults {
  title_CR: string;
  heading_CR: string;
  belowbuttonName_CR: string;
  card: ourServiceCard[];
  //   clientResult: {

  // }
}

export interface AccordianType {
  heading_acc: string;
  card_acc: {
    question: string;
    content: any;
  }[];
  belowbtnName_acc: string;
  belowbtnLink_acc: string;
}

export interface ServiceQuote {
  desc_quote: string;
  name_quote: string;
}

export type AgencyAddress = {
  heading_add: string;
  slotDescription_add: string;
  buttonName_add: string;
  address: any;
  cardLoc: {
    location: {
      latitude: any;
      longitude: any;
    };
    contactno: string;
  }[];
};

//---------------------------------------------Services------------------------------------





//---------------------------------------------Resources------------------------------------
  export interface Resources {
    tool: any;
    brandList: { icon: any; }[];
    heading:string,
    hero:{
      description:string,
      hovericon:{icon:any},
      icon:any,
      image:any,
      title:string,
      tool:{
        buttonLink:string,
        buttonName:string,
        description:string,
        heading:string
      }[]
    }
  }[]
//---------------------------------------------Resources------------------------------------







export interface SingalcasebannerProps {
  data: {
    title: string;
    upperTitle: string;
  };
}



// export interface TermsAndConditionsType {
//   heading: string;
//   cards: {
//     slug: string;
//     title: string;
//     smallDescription: string;
//     buttonName: string;
//     buttonLink: string;
//     content: string[];
//     banner: ClimateAction;
//   }[];
//   banner: ClimateAction;
// }

export interface GrowthTrackerType {
  children: any;
  growthTracker: {
    heroSection: {
      upperTitle: string;
      heading: string;
      button: {
        buttonName: string;
        buttonLink: string;
      };
    };
    growthSection: {
      headingUpper: string;
      titleUpper: string;
      growthContent: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
      }[];
      headingBelow: string;
      titleBelow: string;
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    solution: {
      heading: string;
      card: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
      }[];
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    banner: {
      climate_actionImg: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      earth_img: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      smallDescription: string;
    };
  };

  signupform: {
    signupheading: string;
    signupdescription: string;
    firstnameLabel: string;
    lastnameLabel: string;
    emailLabel: string;
    buttonName: string;
    buttonLink: string;
    privacyDescription: string;
  };
}

export interface GrowthCurveType {
  children: any;
  growthCurve: {
    heroSection: {
      upperTitle: string;
      heading: string;
      button: {
        buttonName: string;
        buttonLink: string;
      };
    };
    growthSection: {
      headingUpper: string;
      titleUpper: string;
      growthContent: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
      }[];
      headingBelow: string;
      titleBelow: string;
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    solution: {
      heading: string;
      card: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
      }[];
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    banner: {
      climate_actionImg: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      earth_img: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      smallDescription: string;
    };
  };
  // signupform: {
  //   signupheading: string;
  //   signupdescription: string;
  //   firstnameLabel: string;
  //   lastnameLabel: string;
  //   emailLabel: string;
  // };
}

export interface GrowthEngineType {
  growthEngine: {
    heroSection: {
      upperTitle: string;
      heading: string;
      button: {
        buttonName: string;
        buttonLink: string;
      };
    };
    growthSection: {
      headingUpper: string;
      titleUpper: string;
      growthContent: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
        price: {
          priceOutline: string;
        } | null; // Nullable type to handle null values
      }[];
      headingBelow: string;
      titleBelow: string;
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    solution: {
      heading: string;
      card: {
        title: string;
        description: string;
        buttonName: string;
        buttonLink: string;
      }[];
      image: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
    };
    banner: {
      climate_actionImg: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      earth_img: {
        _type: string;
        asset: {
          _type: string;
          url: string;
        };
      };
      smallDescription: string;
    };
  };
  // signupform: {
  //   signupheading: string;
  //   signupdescription: string;
  //   firstnameLabel: string;
  //   lastnameLabel: string;
  //   emailLabel: string;
  // };
}

export interface ServiceCard {
  slug: string;
  title: string;
}

export interface ServiceImages {
  vertical_bar: string;
  Code_icon: string;
  target_icon: string;
}

// export interface OurServicesSection {
//   heading: string;
//   cards: ServiceCard[];
//   images: ServiceImages;
//   banner: ClimateAction;
// }

interface ourServiceCard {
  percentage_CR: string;
  mapped_title: string;
  description_1_CR: string;
  description_2_CR: string;
  buttonName_CR: string;
}












// export interface ServiceAddress {
//   title_add: string;
//   streetAddress_add: string;
//   hourstitle_add: string;
//   dayandtiming_add: string;
// }







// export interface DigitalTermsOfServiceType {
//   content: {
//     _type: string; // Ensure correct typing based on your schema
//     // Add any other fields if necessary
//   }[];
//   banner: {
//     climate_actionImg: {
//       _type: string; // Ensure correct typing based on your schema
//       asset: {
//         _type: string; // Ensure correct typing based on your schema
//         url: string; // Ensure correct typing based on your schema
//         // Add any other fields if necessary
//       };
//       // Add any other fields if necessary
//     };
//     earth_img: {
//       _type: string; // Ensure correct typing based on your schema
//       asset: {
//         _type: string; // Ensure correct typing based on your schema
//         url: string; // Ensure correct typing based on your schema
//         // Add any other fields if necessary
//       };
//       // Add any other fields if necessary
//     };
//     smallDescription: string;
//   };
// }
