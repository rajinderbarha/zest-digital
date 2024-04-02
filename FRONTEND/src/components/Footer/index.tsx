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
  logo:   string ;
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
  console.log("-----------footer", data);


  return (
    <>
    {data.map((item,index) => (

    <div key={index}>
   
      <div className="mx-auto max-w-[1720px] w-full px-5 my-10 mt-[74px] mb-[110px]">
                {/* {/ <div className={`  rounded-30px font-mono pt-[88px]  flex`}> /} */}
                <div className={` mx-auto md:ps-14 px-10 md:pe-7  md:py-[70px] py-[60px] rounded-30px shadow-compo border border-black font-mono bg-white text-color-1 grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-5`}>
                    <div className={` col-span-4 flex items-center  mx-auto`}>
                        <div className={`${classes.image1_w} w-[120px] sm:w-[250px]`}>
                            <Image src={urlFor(item.climate_actionImg).url()} width={250} height={105} alt="" className='w-full' />
                            {/* <Image src={climate_action} alt="" className='w-full' /> */}
                        </div>
                        <div className=" w-[80px] sm:w-[150px]">
                            <Image src={urlFor(item.earth_img).url()} width={197} height={198} alt="" className='w-full' />
                        </div>
                    </div>
                    <div className="col-span-8 md:ps-10 max-w-[919px]   items-center">
                        <p className={`${classes.growth_engine_desc} text-3xl `}>{item.smallDescription}</p>
                    </div>
                </div>
                {/* {/ </div> /} */}
            </div>



      <div className={`${classes.bg_image} bg-black rounded-t-[30px]  `} >
        <div className="max-w-[1720px] mx-auto px-5 pt-[48px] pb-10">

          <div className="flex flex-row items-center">
            <div className="">
              <Image src={urlFor(item.logo).url() }  width={197} height={76} alt="" />
            </div>
            <div className="border-5 max-w-[1171px] w-full ps-5 shadow-xl shadow-white">
              <hr className=" bg-green-500 border-0 h-[1px]" />
            </div>
          </div>
<div className={`${classes.detail_cont} max-w-[1521px] mx-auto grid grid-cols-2 sm:grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 mt-10`}>
            {item.footerItem.map((footeItm, index) => (
         


            <div className={`${classes.footer_details}`} key={index}>
              <h2 className='font-bold text-2xl mb-3 font-mono '>{footeItm.heading}</h2>
              {footeItm.list.map((list,index)=>(
                <div> 
                    
                    <address className="not-italic">

             <Link href={list.link}> {list.name}</Link> <br />
               {/* <br /> */}
                {/* Oxford<br />
                OX2 0DP */}
              </address>
                    {/* <address className="not-italic">
                1–3 Kings Meadow<br />
                Odney Mead<br />
                Oxford<br />
                OX2 0DP
              </address> */}
              {/* <p className={`${classes.footer_details_telephone}`}><FaPhoneAlt className='text-white' /> +44 (0) 1865 864 999</p> */}
              </div>
              ))}
              










          </div>
              ))}
</div>    
<div className={`${classes.certificate_icon} max-w-[1379px] mx-auto flex items-end my-10`}>
              {item.brands.map((brandsimg,index )=>(

            
        
            <div key={index} className="foter_logos">
              <Image src={urlFor(brandsimg.brandImage).url()} width={400} height={400} className='w-auto' alt="" />
            </div>
       
          
            ))}
</div>
          <div className=" flex gap-5">
            {item.social.map((socialImg,index)=>(

          
            <div className="">
              <Link href={socialImg.socialLink}>
              
              <Image src={urlFor(socialImg.socialImage).url()} width={50} height={50} alt="" />
              </Link>
            </div>
              ))}
           
          </div>
        </div>
      </div>
      <div className="bg-color-1 py-[35px]">
        <p className='text-white max-w-[970px] px-10 text-center mx-auto'>{item.copyRightText} </p>
      </div>
      </div>
       ))}
    </>
  )
}

export default Footer