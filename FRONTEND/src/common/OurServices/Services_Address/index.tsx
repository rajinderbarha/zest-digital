import React from "react";
import classes from "./Services_Address.module.css";
import { GoArrowRight } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { AgencyAddress } from "../../../../lib/interface";
import { PortableText } from "next-sanity";
import Link from "next/link";
import GoogleMapComponent from "@/components/GoogleMapComponent";

const Services_Address: React.FC<AgencyAddress> = (props) => {
  const { heading_add, slotDescription_add, buttonName_add, buttonName_link } = props;

  const contactInfoArray = Array.isArray(props.address) ? props.address : [];
  return (
    <>
      {/* <div className="GrowthMarketingServices_Address main_padding xl:mb-[200px] lg:mb-[160px] md:mb-[120px] sm:mb-[100px] mb-[80px]"> */}
      <div className={`${classes.GrowthMarketingServices_Address} GrowthMarketingServices_Address main_padding `} >
        <div className="main_container">
          <div
            // className={`${classes.bg_image} bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px xl:py-[160px] lg:py-[130px] md:py-[100px] sm:py-[70px] py-[50px] xl:px-[77px] lg:px-[60px] md:px-[45px] sm:px-[35px] px-[25px]  grid md:grid-cols-2 max-tb:grid-cols-1 md:gap-y-0 max-tb:gap-y-[60px] max-tb:gap-x-0 md:gap-x-10 min-tb:max-tb:pt-[80px] min-tb:max-tb:pb-[61px]`}
            className={`${classes.bg_image} bg-color-1 rounded-[15px] md:rounded-[20px] lg:rounded-30px grid md:grid-cols-2 max-tb:grid-cols-1 md:gap-y-0 max-tb:gap-y-[60px] max-tb:gap-x-0 md:gap-x-10`}
            data-aos="fade-up" >
            <div className="col-span-1 md:max-w-[558px] min-tb:max-tb:max-w-[420px] sm:max-w-[300px] max-w-[250px]  mx-auto">
              {/* <h2 className="font-mono xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] min-tb:max-tb:leading-[45px] sm:text-30px text-[22px] font-semibold text-color-9 text-center "> */}
              <h2 className={`${classes.address_heading} font-mono font-semibold text-color-9 text-center `} data-aos="fade-up">
                {heading_add}
              </h2>
              {/* <h2 className="font-mono lg:text-35px md:text-[33px] min-tb:max-tb:text-[20px] min-tb:max-tb:mt-[42px] min-tb:max-tb:mb-[20px] min-tb:max-tb:leading-[27px] sm:text-[22px] text-[18px] font-semibold text-white text-center xl:mt-[60px] lg:mt-[45px] md:mt-[35px] sm:mt-[25px] mt-[20px] lg:mb-[26px] md:mb-[20px] sm:mb-[15px] mb-[10px]  max-w-[566px] mx-auto"> */}
              <h2 className={`${classes.address_desc} font-mono  font-semibold text-white text-center   max-w-[566px] mx-auto`} data-aos="fade-up">
                {slotDescription_add}
              </h2>
              <div className={`${classes.book_btn} bokk_now_btn`} data-aos="fade-up">
                <Link href={buttonName_link}>
                  {/* <button className="font-mono font-normal mx-auto text-color-1 rounded-full bg-white text-[12px] md:text-base py-[2px] sm:py-[3px] md:py-[3px] md:ps-5 sm:ps-[15px] ps-[10px] flex md:gap-2 sm:gap-[6px] gap-[4px] items-center group border border-white hover:bg-color-1 hover:text-white"> */}
                  <button className={` font-mono font-normal mx-auto text-color-1 rounded-full bg-white  flex md:gap-2 sm:gap-[6px] gap-[4px] items-center group border border-white hover:bg-color-1 hover:text-white`}>
                    {buttonName_add}
                    {/* <span className="p-1 text-white rounded-full bg-color-1 group-hover:bg-white group-hover:text-color-1 md:me-1 sm:me-[3px] me-[2px] text-[15px] sm:text-[17px] md:text-lg"> */}
                    <span className=" text-white rounded-full bg-color-1 group-hover:bg-white group-hover:text-color-1">
                      <GoArrowRight />
                    </span>
                  </button>
                </Link>
              </div>

              <div>
                <div className="address xl:mt-[110px] lg:mt-[90px] md:mt-[60px] min-tb:max-tb:mt-[72px] mt-[50px] lg:mb-[40px] md:mb-[30px] min-tb:max-tb:mb-[0px] sm:mb-[25px] mb-[20px]  text-center">
                  {/* <h2 className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal text-white  lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[7px]">
                        {title_add}
                      </h2>
                      <address className="not-italic text-[15px] md:text-base lg:text-lg font-lato text-white max-w-[125px] mx-auto">
                        {streetAddress_add}
                      </address>
                    </div>
                    <div className="hours text-center">
                      <h2 className="font-mono lg:text-30px md:text-25px sm:text-[20px] text-[18px] font-normal lg:mb-[20px] md:mb-[15px] sm:mb-[10px] mb-[7px] text-white">
                        {hourstitle_add}
                      </h2>
                      <p className="text-[15px] md:text-base lg:text-lg font-lato text-white max-w-[161px] mx-auto">
                        {dayandtiming_add}
                      </p> */}
                  <div className={`${classes.address} text-white`} data-aos="fade-up">
                    {contactInfoArray.map((contactInfo: any, innerIndex: any) => (

                      <PortableText value={contactInfo} key={innerIndex} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              {props.cardLoc?.map(
                ({ location: { latitude, longitude }, contactno }, index) => {
                  const location = {
                    latitude: latitude,
                    longitude: longitude
                  }
                  return <div className="max-w-[738px] min-tb:max-tb:max-w-[448px] max-tb:mx-auto w-full" key={index}>
                    <div className={`${classes.map_div} `} data-aos="fade-up">
                      {/* <Map
                        height={738}
                        defaultCenter={[latitude, longitude]}
                        defaultZoom={11}
                      >
                        <Marker width={50} anchor={[latitude, longitude]} />
                      </Map> */}

                      <GoogleMapComponent loc={location} mark={[location]} zoom={15} />
                    </div>

                    <div className=" flex items-center justify-end text-color-9 mt-[10px] md:mt-[25px] min-tb:max-tb:mt-[23px] gap-[2px]">
                      <FaPhoneAlt className="text-white" />
                      {contactno}
                    </div>
                  </div>
                }

              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_Address;
