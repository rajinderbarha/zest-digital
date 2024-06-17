import React from "react";
import classes from "./DigitalTerms.module.css";
import { PortableText } from "next-sanity";
import { SingletermsAndConditionsType } from "../../../lib/interface";
function DigitalTerms({ data }: { data: SingletermsAndConditionsType[] }) {
  return (
    <>
      <div className="DigitalTerms main_padding xl:mb-[200px] lg:mb-[150px] md:mb-[100px] sm:mb-[70px] mb-[80px]">
        <div className="main_container">
          <h2 className="xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] text-[22px] font-mono font-semibold xl:mt-[95px] lg:mt-[75px] mb:mt-[50px] min-tb:max-tb:mt-[52px] mt-[46px] ">
            {data[0].title}
          </h2>
          {data?.map((item) => (
            <div
              className={`${classes.Portable_text} `}
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
