import React from "react";
import Image from "next/image";
import classes from "../About_banner.module.css";
import { AboutType } from "../../../../lib/interface";
import { urlFor } from "../../../../lib/sanity.client";

function About_team({ data }: { data: AboutType[] }) {

  return (
    // <div className={`${classes.About_team} main_padding xl:mt-[141px] lg:mt-[120px] md:mt-[80px]  min-tb:max-tb:mt-[70px] sm:mt-[62px] mt-[62px]`}>
    <div className={`${classes.About_team} main_padding `}>
      <div className="max-w-[1562px] w-full mx-auto">
        {data?.map((aboutdata, index) => (
          <div key={`${index}_About_team_1`} className="">
            <div
              // className="About_team_box text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-20 md:gap-y-20 min-tb:max-tb:gap-x-[40px] min-tb:max-tb:gap-y-[60px] sm:gap-x-[60px] sm:gap-y-[30px] gap-x-[40px] gap-y-[20px]"
              className={`${classes.About_team_profiles} text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 `}
              key={`${aboutdata}_About_team`}
            >
              {aboutdata.team.map((teamData, index) => (
                <div key={`${index}_About_team_2`} className={`${classes.About_team_box}`} data-aos="fade-up">
                  <div className="classes.About_img_box relative mx-auto xl:mb-[45px] lg:mb-[20px] md:mb-[10px] min-tb:max-tb:mb-[15px] mb-[5px] max-w-[463px]">
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

                  {/* <h3 className="lg:text-35px md:text-30px sm:text-25px max-tb:text-[20px] font-semibold font-mono text-color-1"> */}
                  <h3 className={`${classes.team_title}  font-semibold font-mono text-color-1`}>
                    {teamData.title}{" "}
                  </h3>
                  {/* <p className="lg:text-lg md:text-[16px] sm:text-[14px] max-tb:text-[12px] font-normal font-mono text-color-1"> */}
                  <p className={`${classes.team_desc}  font-normal font-mono text-color-1`}>
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
