import React from "react";
import classes from "../About_banner.module.css";
import Marquee from "react-fast-marquee";
import { AboutType } from "../../../../lib/interface";
function Escape({ data }: { data: AboutType[] }) {
  console.log(data);

  return (
    <div className="Escape_main ">
      {data?.map((Escapedata, index) => (
        <div className="main_container" key={`${index}_Escape`}>
          <div className={`${classes.Escape}`}>
            <h2 className="md:text-55px text-35px md:mb-12 mb-6 font-mono text-center  font-semibold text-white">
              {Escapedata.escape.heading}
            </h2>
            <p
              className={`${classes.Escape_p} mx-auto md:text-35px text-25px font-mono text-white text-center md:mb-24 mb-8 font-semibold`}
            >
              {Escapedata.escape.description}
            </p>
            <div className={`border-y border-color-3 py-16 relative `}>
              <div className={`${classes.gri}`}></div>
              <Marquee className={`${classes.gri} gap-16 `}>
                <div className="flex text-white   max-w-auto gap-16 me-5">
                  {Escapedata.escape.marquee.map((marqueData, path) => (
                    <div
                      key={`${path}_marqueeData`}
                      className="maving_box md:max-w-[400px] max-w-[250px] text-center"
                    >
                      <h2 className="md:text-35px text-25px  text-color-7 font-semibold font-mono">
                        {marqueData.title}
                      </h2>
                      <p className="text-lg font-normal font-mono">
                        {marqueData.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Escape;
