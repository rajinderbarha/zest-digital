import { ReactNode } from "react";

export interface SingalcasebannerProps {
  data: {
      title: string;
      upperTitle: string;
  }
}

export interface FooterType {
  id:any,


  climate_actionImg: {
    _type: string;
    asset: { _type: string /* other fields */ };
  };
  earth_img: { _type: string; asset: { _type: string /* other fields */ } };
  smallDescription: string;



  logo: string;
  footerItem: {
      id:any,
    heading: string;
    list: {
      id:any,
      name: string;
      link: string;
      icon: { _type: string; asset: { _type: string /* other fields */ } };
    }[];
  }[];
  brands: {
      id:any,
    brandImage: { _type: string; asset: { _type: string /* other fields */ } };
  }[];
  social: {
      id:any,
    socialImage: { _type: string; asset: { _type: string /* other fields */ } };
    socialLink: string;
  }[];
  copyRightText: string;
}


export interface ClimateAction {
  climate_actionImg: {
    _type: string;
    asset: { _type: string /* other fields */ };
  };
  earth_img: { _type: string; asset: { _type: string /* other fields */ } };
  smallDescription: string;
}



export interface HeaderType {
  logo: any;
  navItem: { buttonName: string; buttonLink: string }[];
  button: { navName: string; navLink: string };
}


export interface TermsAndConditionsType {
  heading: string;
  cards: {
    slug: string;
    title: string;
    smallDescription: string,
    buttonName: string,
    buttonLink:string,
    content: string[];
    banner: ClimateAction;
   
  }[];
  banner: ClimateAction
}



export interface CareerCard {
  image: string; // Assuming this is the URL of the image
  title: string;
  description: string;
}

export interface CareersType {
  heading: string;
  card: CareerCard;
  banner: ClimateAction
}




export interface AboutType {

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


export interface GrowthTrackerType {
  children:any;
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
    buttonName: string
    buttonLink: string,
    privacyDescription:string
  };
}

export interface GrowthCurveType {
  children:any;
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

export interface OurServicesSection {
  heading: string;
  cards: ServiceCard[];
  images: ServiceImages;
  banner: ClimateAction;
}















interface ourServiceCard {
  percentage_CR: string;
  mapped_title: string;
  description_1_CR: string;
  description_2_CR: string;
  buttonName_CR: string;
}

interface ServiceImageBox {
  image: string;
  imagetitle: string;
}

interface ServiceContentBox {

  
    heading: string;
  coloredText: string;
  description: string;
  belowdesc: string;

  
}

export interface Services_book_cal {
  [x: string]: any;
  heading:string,
  buttonName:string
}


export interface ServiceDetail {
  [x: string]: any;
  Services_details:{

    heading: string;
    description_1: string;
    description_2: string;
    image: string;
  }[]
}

export interface SubServices {
  heading_sub:string
  services:{

    image: string;
    title_sub: string;
    desc_sub: string;
  }[]
}

export interface ServiceQuote {
  desc_quote: string;
  name_quote: string;
}

export interface ServiceAddress {
  title_add: string;
  streetAddress_add: string;
  hourstitle_add: string;
  dayandtiming_add: string;
}

export interface clientResults  {
  title_CR: string;
  heading_CR: string;
  belowbuttonName_CR: string;
  card: ourServiceCard[];
//   clientResult: { 
  
// }
};


export type AgencyAddress = {
  
  heading_add: string;
  slotDescription_add: string;
  buttonName_add: string;
    address: ServiceAddress[];
    card: {
      location: {
        latitude: string;
        longitude: string;
      };
      contactno: string;
    }[];
  
}



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
  Services_Box: {
    imageBox: ServiceImageBox[];
    contentBox: ServiceContentBox;
  };
  
  Services_details: ServiceDetail[];
  Services_book_call:Services_book_cal;
  ourSubServices: SubServices
  clientResults: clientResults
  globalaccordion: {
    accordiongroup: {
      heading: string;
      card: ourServiceCard[];
      belowbuttonName: string;
    };
  };
  Services_Quotes: ServiceQuote[];
  agencyAddress: AgencyAddress,
  banner: ClimateAction
}























export interface TermsOfServiceType {
  definitions: string;
  general: {
      customer: string;
      supplier: string;
      services: string;
      relationshipContract: string;
      commencementDate: string;
      partnership: string;
  };
  services: {
      supplierExperience: string;
      performanceDates: string;
      reasonableEndeavours: string;
      warranties: string;
      customerResponsibilities: {
          cooperation: string;
          information: string;
          licenses: string;
      };
      customerDefault: {
          suspension: string;
          liability: string;
          reimbursement: string;
      };
  };
  feesAndPayment: {
      fees: string;
      expenses: string;
      directDebit: string;
      paymentFailure: string;
      suspension: string;
      paymentDefault: string;
  };
  licensesAndIntellectualPropertyRights: {
      deliverables: string;
      preExistingWork: string;
      supplierLicense: string;
  };
  durationOfAgreement: {
      validityPeriod: string;
      cancellation: string;
      termination: string;
      invoiceDate: string;
      intellectualPropertyTransfer: string;
  };
  confidentiality: string;
  limitationOfLiability: string;
  responsibility: string;
  hosting: string;
  amendments: string;
  changelog: string;
  
  banner: {
    climate_actionImg: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    earth_img: {
      _type: string; // Ensure correct typing based on your schema
      asset: {
        _type: string; // Ensure correct typing based on your schema
        url: string; // Ensure correct typing based on your schema
        // Add any other fields if necessary
      };
      // Add any other fields if necessary
    };
    smallDescription: string;
  };
}



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



