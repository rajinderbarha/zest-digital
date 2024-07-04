import { useEffect } from "react";
import classes from "./footer.module.css";
import Image from "next/image";
import { urlFor } from "../../../lib/sanity.client";
import Link from "next/link";
import { FooterType } from "../../../lib/interface";
import Climate_action from "@/common/Climate_action";
import { PortableText } from "next-sanity";
import { FaPhoneAlt } from "react-icons/fa";
import facebook_black from '../../assets/images/facebook_black.svg'
import linkedin_black from '../../assets/images/linkedin_black.svg'
import instagram_black from '../../assets/images/instagram_black.svg'
import facebook_white from '../../assets/images/facebook_white.svg'
import linkedin_white from '../../assets/images/linkedin_white.svg'
import instagram_white from '../../assets/images/instagram_white.svg'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Footer = ({ data }: { data: FooterType[] }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div className="Body_padding">

            <Climate_action climate_actionImg={item.climate_actionImg} earth_img={item.earth_img} smallDescription={item.smallDescription} />
          </div>
          <div className={`${classes.bg_image} bg-color-1 rounded-t-[15px] sm:rounded-t-[20px] md:rounded-t-[30px] main_padding`} >
            <div className="Body_padding">
              <div className="main_container   md:pt-[48px] sm:pt-[30px] pt-[20px] md:pb-[28px] sm:pb-[20px] pb-[13px]">
                <div className="flex flex-row items-center">
                  <div className="max-w-max w-full">
                    <Image
                      src={urlFor(item.logo).url()}
                      width={197}
                      height={76}
                      alt=""
                      className="xl:w-[197px] lg:w-[165px] md:w-[160px] min-tb:max-tb:w-[108px] sm:w-[120px] w-[100px]"
                    />
                  </div>
                  <div className=" max-w-[1171px] w-full ml-[20px] " data-aos="fade-right" >
                    <hr className={`${classes.horizontal_line} h-0 border-none`} />
                  </div>
                </div>
                <div
                  className={`${classes.detail_cont} max-w-[1521px] mx-auto grid grid-cols-2 sm:grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 mt-10`}
                >
                  {item.footerItem.map((footerItm, index) => (
                    <div className={`${classes.footer_details}`} key={`${index}_footerItm`} data-aos="fade-up">
                      <h2 className={`${classes.footer_linkheading} font-bold  font-mono`}>
                        {footerItm.heading}
                      </h2>
                      {footerItm.list.map((list, index) => (
                        <div key={`${index}_list`} className={`${classes.address}`}>
                          <address className="font-lato not-italic ">
                            <PortableText value={list.address} />
                          </address>
                          <p className={`${classes.telephone} flex font-lato items-center justify-center gap-1  text-left`}><FaPhoneAlt className='text-white ' /><span className="text-color-7 "> {list.contact}</span></p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  className={`${classes.certificate_icon} max-w-[1379px] mx-auto flex items-end md:my-10 sm:my-[25px] my-[20px]`}
                >
                  {item.brands.map((brandsimg, index) => (
                    <div key={`${index}_brandsimg`} className="foter_logos" data-aos="fade-up">
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
                <div className={`${classes.socialimages} flex md:justify-start justify-center md:gap-5 sm:gap-[15px] gap-[10px]`} data-aos="fade-up">

                  <div className="group">

                    <Link href={item.social[0].socialLink}>
                      <Image
                        src={facebook_white}
                        width={50}
                        height={50}
                        alt=""
                        className=" group-hover:hidden"
                      />
                      <Image
                        src={facebook_black}
                        width={50}
                        height={50}
                        alt=""
                        className=" hidden group-hover:block"
                      />
                    </Link>

                  </div>
                  <div className="group">
                    <Link href={item.social[1].socialLink}>
                      <Image
                        src={linkedin_white}
                        width={50}
                        height={50}
                        alt=""
                        className="  group-hover:hidden"
                      />
                      <Image
                        src={linkedin_black}
                        width={50}
                        height={50}
                        alt=""
                        className=" hidden group-hover:block"
                      />
                    </Link>

                  </div>
                  <div className="group">
                    <Link href={item.social[2].socialLink}>
                      <Image
                        src={instagram_white}
                        width={50}
                        height={50}
                        alt=""
                        className="  group-hover:hidden"
                      />
                      <Image
                        src={instagram_black}
                        width={50}
                        height={50}
                        alt=""
                        className=" hidden group-hover:block"
                      />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.footer_belowsection} bg-color-1 lg:h-[90px] md:h-[80px] sm:h-[60px] sm:py-0 py-[10px] flex items-center `} >
            <div className={`${classes.footer_belowtext} text-white max-w-[1720px] text-center mx-auto `}>
              <PortableText value={item.copyRightText} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;