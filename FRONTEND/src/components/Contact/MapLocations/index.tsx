import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import classes from "./MapLocations.module.css";
import { PortableText } from "next-sanity";
import GoogleMapComponent from "@/components/GoogleMapComponent";

function MapLocations({ data }: any) {

  const uniqueLocations = data.map((item: any) => ({
    longitude: item.longitude,
    latitude: item.latitude
  }))

  return (
    <>
      {data.map(({ longitude, latitude, contactInfo, leftDescriptionList, rightDescriptionList }: any, index: any) => (

        <div key={index} className={`${classes.MapLocations} `} data-aos="fade-up" >
          <div
            className={`${classes.location_div}  `}
          >
            <GoogleMapComponent mark={uniqueLocations} loc={{ longitude: longitude, latitude: latitude }} zoom={9} />

          </div>
          <div className="contact grid lg:grid-cols-12 gap-2  mt-[20px]">
            <div className="address lg:col-span-6 lg:order-1 order-2">
              <address className={`${classes.contact_detail}  font-mono text-color-1 not-italic`}>
                <PortableText value={contactInfo} key={index} />

              </address >
            </div>
            <div className="tele lg:col-span-6 h-max lg:order-2 order-1">
              <div className=" flex items-center text-color-9 lg:justify-end font-mono gap-[5px]">
                <div className="">
                  <FaPhoneAlt className={`${classes.phone_icon} text-black w-max text-[15px] md:text-[15px] `} />
                </div>
                <p className={`${classes.contact_detail} `}>
                  {" "}
                  {rightDescriptionList}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MapLocations;
