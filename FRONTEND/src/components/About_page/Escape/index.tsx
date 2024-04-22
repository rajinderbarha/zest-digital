import React from "react";
import classes from "../About_banner.module.css";
import Marquee from "react-fast-marquee";
import { AboutType } from "../../../../lib/interface";
import Link from "next/link";
function Escape({ data }: { data: AboutType[] }) {
  console.log(data);

  return (
    <div className="Escape_main main_padding">
      {data?.map((Escapedata, index) => (
        <div className="main_container" key={`${index}_Escape`}>

          <Link href={Escapedata.escape.careerPagelink}>
          <div className={`${classes.Escape}`}>
            <h2 className="xl:text-55px lg:text-50px md:text-40px text-35px md:mb-12 mb-6 font-mono text-center  font-semibold text-white">
              {Escapedata.escape.heading}
            </h2>
            <p
              className={`${classes.Escape_p} mx-auto lg:text-35px md:text-30px text-25px font-mono text-white text-center md:mb-24 mb-[80px] font-semibold`}
            >
              {Escapedata.escape.description}
            </p>
            <div className={`${classes.Marquee_border}  border-color-3 md:py-16 py-[40px] -mx-[16px] relative `}>
              <div className={`${classes.gri}`}></div>
              <Marquee className={` gap-16 `}>
                <div className="flex text-white   max-w-auto gap-16 me-5">
                  {Escapedata.escape.marquee.map((marqueData, path) => (
                    <div
                      key={`${path}_marqueeData`}
                      className="maving_box md:max-w-[400px] max-w-[250px] text-center"
                    >
                      <h2 className="lg:text-40px md:text-35px text-25px  text-color-7 font-semibold font-mono lg:mb-[30px] md:mb-[25px] mb-[20px]">
                        {marqueData.title}
                      </h2>
                      <p className="text-base md:text-lg font-normal font-mono">
                        {marqueData.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
</Link>

        </div>
      ))}
    </div>
  );
}

export default Escape;
