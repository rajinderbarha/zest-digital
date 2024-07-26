import Image from "next/image";
import { useEffect } from "react";
import classes from "./Contact.module.css";
import MapLocations from "./MapLocations";
import { ContactType } from "../../../lib/interface";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity.client";
import facebook_black from '../../assets/images/facebook_black.svg';
import linkedin_black from '../../assets/images/linkedin_black.svg';
import instagram_black from '../../assets/images/instagram_black.svg';
import facebook_white from '../../assets/images/facebook_white.svg';
import linkedin_white from '../../assets/images/linkedin_white.svg';
import instagram_white from '../../assets/images/instagram_white.svg';
import { useRouter } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = ({ data }: { data: ContactType }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Load the HubSpot forms script
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      // Type assertion for window.hbspt
      const hbspt = (window as any).hbspt;
      if (hbspt) {
        hbspt.forms.create({
          region: "eu1",
          portalId: "26290409",
          formId: "77c50a0c-3073-4b4d-b8cd-4d19a73691ca",
          target: "#hubspotForm"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className={`${classes.contact_container} Contact  main_padding`}>
      <div className="main_container ">
        <div className="grid md:grid-cols-12 ">
          <div className={`${classes.text_div} md:col-span-5 min-tb:max-tb:col-span-6  relative h-max lg:me-10`}>
            <div className=" max-w-[636px] " data-aos="fade-up">
              <h2 className={`${classes.contact_heading} font-mono font-semibold `}>
                {data?.description}
              </h2>
              <div className="icons flex md:mt-10 sm:mt-[30px] mt-[15px] gap-[18px]">
                <div className="group">
                  <Link href={data.social[0]?.socialLink}>
                    <Image
                      src={facebook_black}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image}  group-hover:hidden`}
                    />
                    <Image
                      src={facebook_white}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image} hidden group-hover:block`}
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href={data.social[1]?.socialLink}>
                    <Image
                      src={linkedin_black}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image}  group-hover:hidden`}
                    />
                    <Image
                      src={linkedin_white}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image} hidden group-hover:block`}
                    />
                  </Link>
                </div>
                <div className="group">
                  <Link href={data.social[2]?.socialLink}>
                    <Image
                      src={instagram_black}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image}   group-hover:hidden`}
                    />
                    <Image
                      src={instagram_white}
                      width={50}
                      height={50}
                      alt=""
                      className={`${classes.socal_image}  hidden group-hover:block`}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="ms-auto  hand_img sm:absolute right-0 lg:-bottom-[60%] md:-bottom-[50%] -bottom-[20%] md:max-w-max " data-aos="fade-up">
              <Image
                src={urlFor(data?.image).url()}
                width={270}
                height={214}
                alt=""
                className={`${classes.hand_img} min-tb:max-tb:max-w-[158px] md:me-[48px] lg:me-0 xl:max-w-[270px] lg:max-w-[210px] md:max-w-[175px] sm:max-w-[150px] max-w-[130px] ms-auto`}
              />
            </div>
          </div>
          <div className={`${classes.form_div} md:col-span-7 min-tb:max-tb:col-span-6`}>
            <div className="max-w-[956px] min-tb:max-tb:px-[30px] ms-auto bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px px-5 sm:px-10 " data-aos="fade-up">
              <div className="max-w-[670px] mx-auto min-tb:max-tb:gap-[26px] sm:py-[88px] min-tb:max-tb:py-[40px] pt-[38px] pb-[41px] grid gap-6 sm:gap-9">
                <div id="hubspotForm" className={`${classes.hubspot_form} w-full`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${classes.map_div} ${classes.map_container} min-tb:max-tb:grid-cols-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  `}>
          <MapLocations data={data.card} />
        </div>
      </div>
    </div>
  );
}

export default Contact;

