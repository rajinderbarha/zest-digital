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
      horizontalbars?: HorizontalBarsType[]
    };
  }[];
}

export interface HorizontalBarsType{ 
  SingleCaseStudyCard:{
  slug:string,
  upperTitle:string,
  card:{
    heading:string,
    belowHeading:string,
    homepageCardDesc:string
  }
}}[];

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
  // switcher: any;
  card: {
    growthcard?: any;
    length?: number;
    slice?: (arg0: number) => any;

    heading?: string;
    switcher?: string[];
    horizontalbars?: HorizontalBarsType[]
  };
}
export interface LogoMoving {
  LogoMovdata: {
    icon: string;
  }[];
}
export interface GrowthEngineProps {
  props: {
    title: string;
    // heading: string;
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
    // services: { slug: string; title: string }[];
    services:{
      reference: any; servicetitle:string; slug: string
}[]
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
    contactInfo: any;
    // leftDescriptionList: string;
    rightDescriptionList: string;
    latitude: number;
    longitude: number;
  }[];
}
//---------------------------------------------Contact------------------------------------

//---------------------------------------------Career------------------------------------
export interface CareerCard {
  image: string;
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
    reference: any;
    slug: string;
    title: string;
    boxtitle:string;
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
  earth_img: { type: string; asset: { type: string } };
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
    brandImage: { type: string; asset: { type: string } };
  }[];
  social: {
    id: any;
    socialImage: { type: string; asset: { type: string } };
    socialLink: string;
  }[];
  copyRightText: any;
}
//---------------------------------------------Footer------------------------------------

//---------------------------------------------Solution------------------------------------

export interface SolutionProps {
  brandList: { icon: string }[];
  growth: SolSection_Main_Card[];
  transform: SolSection_Main;
  hero: Solution_BannerType;
}
export interface Solution_BannerType {
  upperTitle: string;
  heading: string;
  image: any;
}
export interface SolSection_Main {
  belowLine: string;
  heading: string;
  upperTitle: {
    switcher: string[];
    title: string;
  };
}
export interface SolSection_Main_Card {
  card: {
    buttonName: string;
    description: string;
    heading: string;
    image: any;
  };
  slug: Slug;
}
export interface Slug {
  current: string;
  _type: string;
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
    callButtonLink: string;
    resultsButtonName: string;
    resultsButtonLink: string;
  };
  Services_Box: Services_BoxType;

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
    // heading: string;
    serviceheading: any;
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
  buttonLink: string;
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
  belowbuttonLink_CR: string;
  card: ourServiceCard[];
  //   clientResult: {
  // }
}
export interface ourServiceCard {
  // percentage_CR: string;
  // mapped_title: string;
  description_1_CR: string;
  description_2_CR: string;
  buttonName_CR: string;

  sigleCaseStudyCard:{
    slug:string,
    card:{
      heading:string,
      belowHeading:string,
      description:string,
      descriptionBelow:string
    }
  }
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
  buttonName_link: string;
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
  brandList: { icon: any }[];
  heading: string;
  hero: {
    description: string;
    hovericon: { icon: any };
    icon: any;
    image: any;
    title: string;
    tool: {
      buttonLink: string;
      buttonName: string;
      description: string;
      heading: string;
    }[];
  };
}
[];
//---------------------------------------------Resources------------------------------------

//---------------------------------------------insights------------------------------------
export interface FiltersType {
  collection: {
    hero: {
      heading: string;
      icon: any;
      keywords: string[];
    };
    slug: Slug;
  }[];
  heading: string;
  linkSection: {
    linkName: string;
    linkUrl: string;
  };
  linkSectionIcon: any;
}
export interface SingleInsightsType {
  content: any;
  hero: {
    grow_down: any;
    heading: string;
    icon: any;
    keywords: string[];
  };
  linkSection: {
    icon: any;
    linkName: string;
    linkUrl: string;
  };
  slug: Slug;
}
//---------------------------------------------insights------------------------------------

//---------------------------------------------Casestudy------------------------------------
export interface CasestudyType {
  section: {}[];
  hero: CaseStudyIntroType;
}
export interface CaseStudyIntroType {
  buttonLink: string;
  buttonName: string;
  heading: string;
  image: any;
}
export interface Gross_profitType {

    belowLine: string;
    heading: string;
    image: any;
    imageDesc: string;
    collection: {
      buttonname: string;
      count: string;
      description: string;
      heading: string;
      icon: any;
      title: string;
      _key: string;
      slug: Slug;
      card:any;
    }[];
  
}
export interface SingleCasestudyType {
  // singleCasestudy:{}
  Title: string;
  sectionCard: Card[];
  hero: Hero;
  // slug: Slug;
  team: Team;
  upperTitle: string;
}
[];
export interface Hero {
  heading: string;
  belowLine: string;
  item: {
    buttonname: string;
    count: string;
    description: string;
    heading: string;
    icon: any;
    title: string;
  }[];
}
export interface Team {
  heading: string;
  profile: {
    description: string;
    image: any;
    name: string;
  }[];
}
export interface Card {
  description: any;
  heading: string;
  image: any;
}
export interface SingalcasebannerProps {
  data: {
    title: string;
    upperTitle: string;
  };
}
//---------------------------------------------Casestudy------------------------------------
