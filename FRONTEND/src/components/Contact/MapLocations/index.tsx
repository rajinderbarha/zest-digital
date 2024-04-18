import Image from "next/image";
import React, { useMemo } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import london_map from "../../../assets/images/london.webp";
import classes from "./MapLocations.module.css";
import { Map, Marker } from "pigeon-maps";

function MapLocations({data}:any) {
  console.log("--------map--''''''",data)


  return (
    <>
    {data.map(({longitude,latitude,leftDescriptionList,rightDescriptionList}:any,index:any)=> (

      <div key={index} className={`${classes.MapLocations} max-w-max mb-[114px]`}>
        <div
          className={`${classes.location_div} rounded-[20px] md:rounded-30px `}
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
        <div className="contact flex justify-between gap-2 mt-[20px]">
          <div className="address ">
            <address className="text-[13px] md:text-base font-mono text-color-1 not-italic">
              {leftDescriptionList}
            </address>
          </div>
          <div className="tele  h-max">
            <div className=" flex items-center text-color-9 font-mono ">
              <FaPhoneAlt className="text-black w-max" />
              <span className="text-[13px] md:text-base">
                {" "}
              {rightDescriptionList}
              </span>
            </div>
          </div>
        </div>
      </div>
  ))}
    </>
  );
}

export default MapLocations;
