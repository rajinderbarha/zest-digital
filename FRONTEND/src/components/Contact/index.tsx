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
              <div className="icons flex md:mt-10 min-tb:max-tb:mt-[24px] sm:mt-[30px] mt-[20px] gap-[18px]">
                <div className="group">
                  <Link href={data.social[0]?.socialLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="50" height="50" data-name="Layer 1" viewBox="0 0 331.01 327.01" className={`${classes.social_icon_img_facebook} ${classes.socal_image} nomalbtn_hover`}>
                      <path className={`${classes.facebook_cls_2}`} d="M270.64,302.5H34.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V34.36C2.5,16.76,16.76,2.5,34.36,2.5h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <polyline className={`${classes.facebook_cls_2}`} points="12.45 293.76 38.68 315.98 37.42 293.76" />
                      <polyline className={`${classes.facebook_cls_2}`} points="292.17 10.87 315.93 31 278 35" />
                      <path className={`${classes.facebook_cls_1}`} d="M296.64,324.5H60.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V56.36c0-17.59,14.26-31.86,31.86-31.86h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" className={`${classes.facebook_cls_3}`} d="M265.21,215.74l6.81-44.37h-42.58v-28.79c0-12.14,5.95-23.97,25.02-23.97h19.36v-37.78s-17.57-3-34.36-3c-35.06,0-57.98,21.25-57.98,59.73v33.82h-38.98v44.37h38.98v107.27h47.97v-107.27h35.77Z" />
                    </svg>

                  </Link>
                </div>
                <div className="group">
                  <Link href={data.social[1]?.socialLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="50" height="50" data-name="Layer 1" viewBox="0 0 331.01 327.01" className={`${classes.social_icon_img_linkedin} ${classes.socal_image} nomalbtn_hover`}>
                      <path className={`${classes.linkedin_cls_3}`} d="M270.64,302.5H34.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V34.36C2.5,16.76,16.76,2.5,34.36,2.5h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <polyline className={`${classes.linkedin_cls_1}`} points="12.45 293.76 38.68 315.98 37.42 293.76" />
                      <polyline className={`${classes.linkedin_cls_1}`} points="292.17 10.87 315.93 31 278 35" />
                      <path className={`${classes.linkedin_cls_2}`} d="M296.64,324.5H60.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V56.36c0-17.59,14.26-31.86,31.86-31.86h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <g>
                        <path className={`${classes.linkedin_cls_4}`} d="M128.91,101.76c0,10.55-8.04,19.09-20.6,19.09s-20.09-8.54-19.84-19.09c-.25-11.05,7.79-19.34,20.09-19.34s20.09,8.29,20.35,19.34ZM89.48,258.74v-122.82h38.18v122.82h-38.18Z" />
                        <path className={`${classes.linkedin_cls_4}`} d="M158.3,175.1c0-15.32-.5-28.38-1-39.18h33.15l1.76,16.83h.75c5.02-7.79,17.58-19.59,37.93-19.59,25.12,0,43.96,16.58,43.96,52.75v72.84h-38.18v-68.07c0-15.82-5.53-26.62-19.34-26.62-10.55,0-16.83,7.28-19.34,14.32-1,2.26-1.51,6.03-1.51,9.54v70.83h-38.18v-83.64Z" />
                      </g>
                    </svg>

                  </Link>
                </div>
                <div className="group">

                  <Link href={data.social[2]?.socialLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="50" height="50" data-name="Layer 1" viewBox="0 0 331.01 327.01" className={`${classes.social_icon_img_insta} ${classes.socal_image} nomalbtn_hover`}>
                      <path className={`${classes.insta_cls_3}`} d="M270.64,302.5H34.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V34.36C2.5,16.76,16.76,2.5,34.36,2.5h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <polyline className={`${classes.insta_cls_2}`} points="12.45 293.76 38.68 315.98 37.42 293.76" />
                      <polyline className={`${classes.insta_cls_2}`} points="292.17 10.87 315.93 31 278 35" />
                      <path className={`${classes.insta_cls_1}`} d="M296.64,324.5H60.36c-11,0-20.69-5.57-26.42-14.05-3.43-5.08-5.44-11.21-5.44-17.81V56.36c0-17.59,14.26-31.86,31.86-31.86h236.29c17.59,0,31.86,14.26,31.86,31.86v236.29c0,17.59-14.26,31.86-31.86,31.86Z" />
                      <path id="Icon_simple-instagram" data-name="Icon simple-instagram" className={`${classes.insta_cls_4}`} d="M178.97,74.56c-27.17,0-30.56.12-41.22.6-10.65.5-17.9,2.18-24.28,4.65-6.67,2.51-12.72,6.44-17.72,11.53-5.09,4.99-9.03,11.04-11.53,17.72-2.47,6.38-4.16,13.62-4.65,24.28-.5,10.67-.6,14.06-.6,41.22s.12,30.56.6,41.23c.5,10.64,2.18,17.9,4.65,24.27,2.51,6.67,6.45,12.72,11.53,17.72,4.99,5.09,11.04,9.03,17.72,11.53,6.38,2.47,13.63,4.16,24.28,4.65,10.67.5,14.06.6,41.22.6s30.56-.12,41.23-.6c10.64-.5,17.9-2.18,24.27-4.65,13.44-5.19,24.06-15.81,29.25-29.25,2.47-6.38,4.16-13.63,4.65-24.27.5-10.67.6-14.06.6-41.22s-.12-30.56-.6-41.22c-.5-10.64-2.18-17.91-4.65-24.28-2.51-6.67-6.45-12.72-11.53-17.72-4.99-5.09-11.04-9.03-17.72-11.53-6.38-2.47-13.63-4.16-24.27-4.65-10.67-.5-14.06-.6-41.23-.6ZM178.97,92.56c26.69,0,29.88.13,40.42.59,9.75.46,15.04,2.08,18.56,3.46,8.74,3.34,15.64,10.24,18.98,18.98,1.37,3.52,3,8.81,3.44,18.56.48,10.55.58,13.72.58,40.42s-.12,29.88-.62,40.42c-.51,9.75-2.13,15.04-3.51,18.56-1.63,4.34-4.18,8.27-7.49,11.52-3.23,3.31-7.16,5.86-11.5,7.47-3.5,1.37-8.88,3-18.62,3.44-10.62.48-13.74.58-40.49.58s-29.88-.12-40.49-.62c-9.76-.51-15.13-2.13-18.63-3.51-4.34-1.61-8.27-4.17-11.49-7.49-3.35-3.21-5.91-7.14-7.5-11.5-1.38-3.5-2.99-8.88-3.5-18.62-.38-10.5-.51-13.74-.51-40.37s.13-29.88.51-40.51c.51-9.75,2.12-15.12,3.5-18.62,1.56-4.37,4.13-8.31,7.5-11.51,3.19-3.36,7.13-5.92,11.49-7.48,3.5-1.38,8.76-3.01,18.51-3.51,10.62-.38,13.75-.5,40.49-.5l.38.25ZM178.97,123.21c-28.36,0-51.35,22.99-51.35,51.35s22.99,51.35,51.35,51.35,51.35-22.99,51.35-51.35c0-28.36-22.99-51.35-51.34-51.35h0ZM178.97,207.89c-18.41,0-33.33-14.92-33.33-33.33,0-18.41,14.92-33.33,33.33-33.33,18.41,0,33.33,14.92,33.33,33.33,0,18.4-14.91,33.33-33.32,33.33h-.02ZM244.36,121.18c0,6.63-5.36,12-11.99,12.01-6.63,0-12-5.36-12.01-11.99,0-6.63,5.36-12,11.99-12.01,0,0,0,0,0,0,6.62,0,11.99,5.37,12,11.99Z" />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
            <div className="ms-auto  hand_img sm:absolute right-0 lg:-bottom-[60%] md:-bottom-[50%] -bottom-[20%] md:max-w-max min-tb:max-tb:mt-[15px]" data-aos="fade-up">
              <Image
                src={urlFor(data?.image).url()}
                width={270}
                height={214}
                alt=""
                className={`${classes.hand_img} min-tb:max-tb:max-w-[158px] min-tb:max-tb:me-[44px] md:me-[48px] lg:me-0 xl:max-w-[270px] lg:max-w-[210px] md:max-w-[175px] sm:max-w-[150px] max-w-[130px] ms-auto`}
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

