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
  