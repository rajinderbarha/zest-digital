import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function About_team({ data }: { data: AboutType[] }) {
  console.log("aboutTeam",data)
  
  return (
    <div className={`${classes.About_team} main_padding xl:mt-[141px] lg:mt-[120px] md:mt-[80px] sm:mt-[62px] mt-[62px]`}>
      <div className="max-w-[1562px] w-full mx-auto">
        {data?.map((aboutdata, index) => (
          <div key={`${index}_About_team_1`} className="">
            <div
              className="About_team_box text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-20 md:gap-y-20 sm:gap-x-[60px] sm:gap-y-[30px] gap-x-[40px] gap-y-[20px]"
              key={`${aboutdata}_About_team`}
            >
              {aboutdata.team.map((teamData, index) => (
                <div key={`${index}_About_team_2`} className={`${classes.About_team_box}`}>
                  <div className="classes.About_img_box relative mx-auto xl:mb-[45px] lg:mb-[20px] md:mb-[10px] mb-[5px] max-w-[463px]">
                    <div
                      className={`${classes.Team_img_circle} absolute  bottom-0`}
                    ></div>
                    <Image
                      src={urlFor(teamData.image).url()}
                      width={481}
                      height={481}
                      className={`${classes.Team_img} rounded-[100%] relative z-10 mx-auto `}
                      alt=""
                    />
                  </div>

                  <h3 className="lg:text-35px md:text-30px sm:text-25px text-[20px] font-semibold font-mono text-color-1">
                    {teamData.title}{" "}
                  </h3>
                  <p className="lg:text-lg md:text-[16px] sm:text-[14px] text-[12px] font-normal font-mono text-color-1">
                    {teamData.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About_team;
