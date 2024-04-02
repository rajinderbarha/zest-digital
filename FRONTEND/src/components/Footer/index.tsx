import React from 'react'
import classes from './footer.module.css'
import Image from 'next/image'
import logo from '../../assets/images/zest-logo-darkbg.png'
import carbon_logo from '../../assets/images/carbon_logo.png'
import hubspot_logo from '../../assets/images/hubspot_logo.png'
import microsoft_partner_logo from '../../assets/images/microsoft_partner_logo.png'
import google_partner_logo from '../../assets/images/google_partner_logo.png'
import cyber_certification_logo from '../../assets/images/cyber_certification_logo.png'
import facebook from '../../assets/images/facebook.png'
import linkedin from '../../assets/images/linkedin.png'
import instagram from '../../assets/images/twitter.png'
import { FaPhoneAlt } from "react-icons/fa";
import climate_action from '../../assets/images/climate_action.png'
import earth from '../../assets/images/earth.png'
import { urlFor } from '../../../sanity.client'
import Link from 'next/link'

export interface FooterType {
  climate_actionImg: { _type: string; asset: { _type: string; /* other fields */ } };
  earth_img: { _type: string; asset: { _type: string; /* other fields */ } };
  smallDescription: string;
  logo: string;
  footerItem: {
    heading: string;
    list: { name: string; link: string; icon: { _type: string; asset: { _type: string; /* other fields */ } } }[];
  }[];
  brands: { brandImage: { _type: string; asset: { _type: string; /* other fields */ } } }[];
  social: { socialImage: { _type: string; asset: { _type: string; /* other fields */ } }; socialLink: string }[];
  copyRightText: string;
}




// const Footer = ({ data }: { data: FooterType[] }) => {
const Footer = ({ data }: { data: FooterType[] }) => {
  console.log("footer", data);


  return (
    <>
     
    </>
  )
}

export default Footer