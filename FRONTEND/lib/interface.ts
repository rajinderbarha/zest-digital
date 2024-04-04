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
  };
}









export interface DigitalTermsOfServiceType {
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



