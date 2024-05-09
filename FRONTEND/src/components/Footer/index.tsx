import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { FooterType } from "../../../lib/interface";
import Climate_action from "@/common/Climate_action";
import { PortableText } from "next-sanity";
import { FaPhoneAlt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa6";
// import { BiLogoFacebookSquare } from "react-icons/bi";
import facebook_black from '../../assets/images/facebook_black.svg'
import linkedin_black from '../../assets/images/linkedin_black.svg'
import instagram_black from '../../assets/images/instagram_black.svg'
import facebook_white from '../../assets/images/facebook_white.svg'
import linkedin_white from '../../assets/images/linkedin_white.svg'
import instagram_white from '../../assets/images/instagram_white.svg'

const Footer = ({ data }: { data: FooterType[] }) => {

  return (
    <>

      {data.map((item, index) => (
        <div key={index}>

          <Climate_action climate_actionImg={item.climate_actionImg} earth_img={item.earth_img} smallDescription={item.smallDescription} />

          {/* <div className="mx-auto max-w-[1720px] w-full px-5 my-10 mt-[74px] mb-[110px]">
            <div
              className={` mx-auto md:ps-14 px-10 md:pe-7  md:py-[70px] py-[60px] rounded-30px shadow-compo border border-black font-mono bg-white text-color-1 grid md:grid-cols-12 grid-cols-1 md:gap-0 gap-5`}
            >
              <div className={` col-span-4 flex items-center  mx-auto`}>
                <div className={`${classes.image1_w} w-[120px] sm:w-[250px]`}>
                  <Image
                    src={urlFor(item.climate_actionImg).url()}
                    width={250}
                    height={105}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className=" w-[80px] sm:w-[150px]">
                  <Image
                    src={urlFor(item.earth_img).url()}
                    width={197}
                    height={198}
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="col-span-8 md:ps-10 max-w-[919px]   items-center">
                <p className={`${classes.growth_engine_desc} text-3xl `}>
                  {item.smallDescription}
                </p>
              </div>
            </div>
          </div> */}



          <div className={`${classes.bg_image} bg-color-1  rounded-t-[20px] md:rounded-t-[30px] main_padding`}>
            <div className="main_container   md:pt-[48px] sm:pt-[30px] pt-[20px] md:pb-[28px] sm:pb-[20px] pb-[13px]">
              <div className="flex flex-row items-center">
                <div className="max-w-max w-full">
                  <Image
                    src={urlFor(item.logo).url()}
                    width={197}
                    height={76}
                    alt=""
                    className="xl:w-[197px] lg:w-[165px] md:w-[160px] sm:w-[120px] w-[100px]"
                  />
                </div>
                <div className=" max-w-[1171px] w-full ml-[20px] ">
                  <hr className={`${classes.horizontal_line} h-0 border-none`} />
                </div>
              </div>
              <div
                className={`${classes.detail_cont} max-w-[1521px] mx-auto grid grid-cols-2 sm:grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 mt-10`}
              >
                {item.footerItem.map((footerItm, index) => (
                  <div className={`${classes.footer_details}`} key={`${index}_footerItm`}>
                    <h2 className="font-bold xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] lg:mb-3 md:mb-[9px] sm:mb-[6px] mb-[4px] font-mono ">
                      {footerItm.heading}
                    </h2>
                    {footerItm.list.map((list, index) => (
                      <div key={`${index}_list`} className={`${classes.address}`}>
                        <address className="font-lato not-italic xl:text-[18px] lg:text-[16px] md:text-[15px] text-[13px]">
                          <PortableText value={list.address} />
                        </address>
                        <p className=" flex font-lato items-center justify-center gap-1 xl:mt-[13px] lg:mt-[10px] md:mt-[8px] mt-[5px] text-left"><FaPhoneAlt className='text-white xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]' /><span className="text-color-7 xl:text-[18px] lg:text-[16px] md:text-[15px] text-[13px]"> {list.contact}</span></p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div
                className={`${classes.certificate_icon} max-w-[1379px] mx-auto flex items-end md:my-10 sm:my-[25px] my-[20px]`}
              >
                {item.brands.map((brandsimg, index) => (
                  <div key={`${index}_brandsimg`} className="foter_logos">
                    <Image
                      src={urlFor(brandsimg.brandImage).url()}
                      width={400}
                      height={400}
                      className="w-auto"
                      alt=""
                    />
                  </div>
                ))}
              </div>
              <div className=" flex md:justify-start justify-center md:gap-5 sm:gap-[15px] gap-[10px]">
                {/* <div className="">

                  <FaFacebookF
                    className="text-[45px] rounded-[5px] shadow-[-4px_-4px_#000]  bg-white p-[5px] ps-[15px] pb-0" />
                </div> */}
                {/* {item.social.map((socialImg, index) => (
                 <div key={`${index}_socialImg`} className="">
                 <Link href={socialImg.socialLink}>
                   <Image
                     src={urlFor(socialImg.socialImage).url()}
                     width={50}
                     height={50}
                     alt=""
                     className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px]"
                   />
                 </Link>
               </div>
                ))} */}
                <div className="group">
                  <Link href="https://www.facebook.com/ZestDigital/">
                    <Image
                      src={facebook_white}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px] group-hover:hidden"
                    />
                    <Image
                      src={facebook_black}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                    />
                  </Link>

                </div>
                <div className="group">
                  <Link href="https://www.linkedin.com/company/zest-digital/">
                    <Image
                      src={linkedin_white}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px]  group-hover:hidden"
                    />
                    <Image
                      src={linkedin_black}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                    />
                  </Link>

                </div>
                <div className="group">
                  <Link href="https://www.instagram.com/zestdigital/">
                    <Image
                      src={instagram_white}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px]  group-hover:hidden"
                    />
                    <Image
                      src={instagram_black}
                      width={50}
                      height={50}
                      alt=""
                      className="lg:w-[50px] md:w-[45px] sm:w-[38px] w-[35px] hidden group-hover:block"
                    />
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="bg-color-1 lg:h-[90px] md:h-[80px] sm:h-[60px] sm:py-0 py-[5px] flex items-center " >
            <div className={"text-white max-w-[1720px] px-10 text-center mx-auto lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px]"}>
              <PortableText value={item.copyRightText} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;