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
import Climate_action from '@/common/Climate_action'


// export interface FooterType {
//   logo: any;
//   footerItem: { heading: string; list: object[] }[];
//   brands: { brandImage: any;  }[];
//   social: {socialImage:any ; socialLink: any }[];
//   copyRightText: string
// }

// const Footer = ({ data }: { data: FooterType[] }) => {
const Footer = () => {
  return (
    <>
      <Climate_action />
      <div className={`${classes.bg_image} bg-black rounded-t-[30px]  `} >
        <div className="max-w-[1720px] mx-auto px-5 pt-[48px] pb-10">

          <div className="flex flex-row items-center">
            <div className="">
              <Image src={logo} alt="" />
            </div>
            <div className="border-5 max-w-[1171px] w-full ps-5 shadow-xl shadow-white">
              <hr className=" bg-green-500 border-0 h-[1px]" />
            </div>
          </div>

          <div className={`${classes.detail_cont} max-w-[1521px] mx-auto grid grid-cols-2 sm:grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 mt-10`}>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono '>Oxford</h2>
              <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +44 (0) 1865 864 999</p>
            </div>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono '>Birmingham</h2>
              <address className="not-italic">
                123-131 Bradford Street<br />
                Digbeth<br />
                Birmingham<br />
                B12 0NS
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +44 (0) 1212 805 858</p>
            </div>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono'>London</h2>
              <address className="not-italic">
                10 Fitzroy Square <br />
                Fitzrovia <br />
                London <br />
                W1T 5HP
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +44 (0) 207 8560 434</p>
            </div>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono' >Bristol</h2>
              <address className="not-italic">
                The Old Stock Exchange <br />
                St. Nicholas Street <br />
                Bristol <br />
                BS1 1TG
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +44 (0) 117 463 3137</p>
            </div>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono '>New York</h2>
              <address className="not-italic">
                115 Broadway Street <br />
                5th Floor <br />
                New York <br />
                NY 10006
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +1 (718) 550-0804</p>
            </div>
            <div className={`${classes.footer_details}`}>
              <h2 className='font-bold text-2xl mb-3 font-mono '>Amsterdam</h2>
              <address className="not-italic">
                Spaces - Amsterdam  <br />
                Barbara Strozzilaan 201  <br />
                Amsterdam <br />
                1083 HN
              </address>
              <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +31 970 1025 7004</p>
            </div>
          </div>

          <div className={`${classes.certificate_icon} max-w-[1379px] mx-auto flex items-end my-10`}>
            <div className="">
              <Image src={carbon_logo} alt="" />
            </div>
            <div className="">
              <Image src={hubspot_logo} alt="" />
            </div>
            <div className="">
              <Image src={microsoft_partner_logo} alt="" />
            </div>
            <div className="">
              <Image src={google_partner_logo} alt="" />
            </div>
            <div className="">
              <Image src={cyber_certification_logo} alt="" />
            </div>
          </div>

          <div className=" flex gap-5">
            <div className="">
              <Image src={facebook} alt="" />
            </div>
            <div className="">
              <Image src={linkedin} alt="" />
            </div>
            <div className="">
              <Image src={instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-1 py-[35px]">
        <p className='text-white max-w-[970px] px-10 text-center mx-auto'>Copyright 2023 © Zest Digital Limited | View our terms and conditions. Company No: 07288662 | VAT No: GB994 6614 67 </p>
      </div>
    </>
  )
}

export default Footer