import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { ClimateAction, FooterType } from "../../../lib/interface";
import Climate_action from "@/common/Climate_action";
import { PortableText } from "next-sanity";


const Footer = ({ data }: { data: FooterType[]  }) => {


  return (
    <>
    
      {data.map((item, index) => (
        <div key={index}>

          <Climate_action climate_actionImg={item.climate_actionImg}  earth_img={item.earth_img}  smallDescription={item.smallDescription} />

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



          <div className={`${classes.bg_image} bg-black  rounded-t-[20px] md:rounded-t-[30px]  `}>
            <div className="main_container  px-5 md:pt-[48px] sm:pt-[30px] pt-[20px] md:pb-10 sm:pb-[25px] pb-[20px]">
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
                        <address className="not-italic">
                          <PortableText value={list.address}/>
                        </address>
                          <p>{list.contact}</p>
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
                {item.social.map((socialImg, index) => (
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
                ))}
              </div>
            </div>
          </div>
          <div className="bg-color-1 py-[35px] " >
            <div className={"text-white max-w-[970px] px-10 text-center mx-auto "}>
              <PortableText value={item.copyRightText}  />
              </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;