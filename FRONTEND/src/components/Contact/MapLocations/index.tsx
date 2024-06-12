import Image from "next/image";
import React, { useMemo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import london_map from "../../../assets/images/london.webp";
import classes from "./MapLocations.module.css";
// import { Map, Marker } from "pigeon-maps";
import { PortableText } from "next-sanity";
import GoogleMapComponent from "@/components/GoogleMapComponent";

function MapLocations({data}:any) {
  // console.log("--------map--''''''",data)

  // const contactInfoArray = Array.isArray(data.address) ? data.address : [];


  const uniqueLocations = data.map((item:any) => ({
    longitude: item.longitude.toString(),
    latitude: item.latitude.toString()
  }))

// console.log(uniqueLocations);

  return (
    <>
    {data.map(({longitude,latitude,contactInfo, leftDescriptionList,rightDescriptionList}:any,index:any)=> (

      <div key={index} className={`${classes.MapLocations} `}>
        <div
          className={`${classes.location_div}  `}
        >
          {/* <Map
            height={300}
            defaultCenter={[latitude, longitude]}
            defaultZoom={11}
          >
            <Marker
              width={50}
              anchor={[latitude, longitude]}
            />
          </Map> */}

<GoogleMapComponent mark={uniqueLocations} loc={{ longitude: longitude, latitude: latitude }} zoom={9} />



          {/* <Image src={london_map} alt="" className='w-full h-full rounded-[20px] md:rounded-30px shadow-dark-pink-right border border-black' /> */}
        </div>
        <div className="contact grid lg:grid-cols-12 gap-2  mt-[20px]">
          <div className="address lg:col-span-6 lg:order-1 order-2">
            <address className={`${classes.contact_detail}  font-mono text-color-1 not-italic`}>
              {/* {leftDescriptionList} */}
                <PortableText  value={contactInfo} key={index} />
             
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
