import React from "react";
import classes from "./DigitalTerms.module.css";
import { PortableText } from "next-sanity";
import { SingletermsAndConditionsType } from "../../../lib/interface";
function DigitalTerms({ data }: { data: SingletermsAndConditionsType[] }) {
  return (
    <>
      <div className="DigitalTerms main_padding">
        <div className="main_container">
          <h2 className="xl:text-55px lg:text-50px md:text-40px text-35px font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[55px] mt-[35px] xl:mb-[120px] lg:mb-[100px] md:mb-[80px] mb-[50px]">
            {data[0].title}
          </h2>
          {data?.map((item) => (
            <div
              className={`${classes.Portable_text} max-w-[1520px] mx-auto`}
              key={`${item}_DigitalTerms`}
            >
              <PortableText value={item.content} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DigitalTerms;
