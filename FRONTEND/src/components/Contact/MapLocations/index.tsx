import Image from "next/image";
import React, { useMemo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import london_map from "../../../assets/images/london.webp";
import classes from "./MapLocations.module.css";
import { Map, Marker } from "pigeon-maps";
import { PortableText } from "next-sanity";

function MapLocations({data}:any) {
  console.log("--------map--''''''",data[0].contactInfo)

  // const contactInfoArray = Array.isArray(data.address) ? data.address : [];
  return (
    <>
    {data.map(({longitude,latitude,contactInfo, leftDescriptionList,rightDescriptionList}:any,index:any)=> (

      <div key={index} className={`${classes.MapLocations} `}>
        <div
          className={`${classes.location_div}  `}
        >
          <Map
            height={300}
            defaultCenter={[latitude, longitude]}
            defaultZoom={11}
          >
            <Marker
              width={50}
              anchor={[latitude, longitude]}
            />
          </Map>
          {/* <Image src={london_map} alt="" className='w-full h-full rounded-[20px] md:rounded-30px shadow-dark-pink-right border border-black' /> */}
        </div>
        <div className="contact flex justify-between flex-col-reverse md:flex-row gap-2 mt-[20px]">
          <div className="address ">
            <address className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-mono text-color-1 not-italic">
              {/* {leftDescriptionList} */}
                <PortableText  value={contactInfo} key={index} />
             
            </address >
          </div>
          <div className="tele  h-max">
            <div className=" flex items-center text-color-9 font-mono gap-[5px]">
            <div className="">
              <FaPhoneAlt className="text-black w-max text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]" />
            </div>
              <p className="text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px]">
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
