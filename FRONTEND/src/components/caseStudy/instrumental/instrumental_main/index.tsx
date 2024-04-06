import React from "react";
import classes from "../instrumental.module.css";
import Pie_chart_70 from "../../../../assets/images/Pie_chart_70.png";
import Image from "next/image";
import { urlFor } from "../../../../../lib/sanity.client";

function Instrumental({ data }: any) {
  console.log("data", data);
  return (
    <div className={`${classes.Instrumental}`}>
      <div className="main_container_x">
        <div className="grid md:grid-cols-12   items-center">
          <div className="md:col-span-4 ">
            <Image
              className="md:ms-auto mx-auto"
              src={urlFor(data.hero.image).url()}
              alt="casestudy img"
              width={300}
              height={300}
            />
            <h3 className="font-mono font-semibold text-30px  w-max-[373px] text-center mx-auto mt-4">
              Reduction in cost per conversion rate
            </h3>
          </div>
          <div className="md:col-span-8 md:mt-0 mt-10">
            <h2 className="font-mono font-semibold md:text-45px text-25px mb-5 w-max-[909px]">
              {data.hero.heading}
            </h2>
            <p className="text-color-9 pt-2 border-t border-color-9">
              {data.hero.belowLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instrumental;
