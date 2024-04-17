import React from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { ClimateAction, FooterType } from "../../../lib/interface";
import Climate_action from "@/common/Climate_action";


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



          <div className={`${classes.bg_image} bg-black rounded-t-[30px]  `}>
            <div className="max-w-[1720px] mx-auto px-5 pt-[48px] pb-10">
              <div className="flex flex-row items-center">
                <div className="">
                  <Image
                    src={urlFor(item.logo).url()}
                    width={197}
                    height={76}
                    alt=""
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
                    <h2 className="font-bold text-2xl mb-3 font-mono ">
                      {footerItm.heading}
                    </h2>
                    {footerItm.list.map((list, index) => (
                      <div key={`${index}_list`} className={`${classes.address}`}>
                        <address className="not-italic">
                          <Link href={list.link}> {list.name}</Link> <br />
                        </address>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div
                className={`${classes.certificate_icon} max-w-[1379px] mx-auto flex items-end my-10`}
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
              <div className=" flex gap-5">
                {item.social.map((socialImg, index) => (
                  <div key={`${index}_socialImg`} className="">
                    <Link href={socialImg.socialLink}>
                      <Image
                        src={urlFor(socialImg.socialImage).url()}
                        width={50}
                        height={50}
                        alt=""
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-color-1 py-[35px]">
            <p className="text-white max-w-[970px] px-10 text-center mx-auto">
              {item.copyRightText}{" "}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;