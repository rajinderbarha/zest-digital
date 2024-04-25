import React from "react";
import classes from "./SingleIntro.module.css";
import Objective from "../singlebox/objective";
import Strategy from "../singlebox/strategy";
import Action from "../singlebox/action";
import Result from "../singlebox/result";
import Image from "next/image";
import { urlFor } from "../../../../lib/sanity.client";
import About_team from "@/components/About_page/About_Team";
function SingleIntro({ hero, card, team }: any) {
  const { heading, profile } = team;
  return (
    <>
      <div className="main_padding">
        <div
          className={`${classes.SingleBox}  main_container  md:mt-40  h-100 md:rounded-30px rounded-[20px]`}
        >
          <div className={`${classes.singleBox_container}`}>
            <div className="hidden md:flex  justify-evenly ">
              {hero.item.map(
                (
                  item: { icon: any; description: string; count: string },
                  index: number
                ) => {
                  return (
                    <div className="text-center " key={index}>
                      <div className=" xl:max-w-[250px] lg:max-w-[200px]  max-w-[150px]  text-center  mx-auto">
                        <Image
                          src={urlFor(item.icon).url()}
                          alt="growth"
                          width={300}
                          height={300}
                          className="mx-auto"
                        />
                      </div>
                      <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px text-color-7 font-mono font-semibold">
                        {item.count}
                      </h2>
                      <p className="xl:text-30px md:text-25px sm:text-[20px] text-base font-mono font-medium text-white xl:leading-9 lg:leading-8  mx-auto 2xl:max-w-[319px] xl:max-w-[270px] lg:max-w-[215px]  max-w-[200px]  ">
                        {item.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
            <div className="box_text mt-[30px] sm:mt-[50px] md:mt-[150px] lg:mt-[200px] xl:mt-[262px] mx-auto max-w-[1360px] mb-[277px]">
              <h2 className="font-mono font-semibold italic text-25px sm:text-30px md:text-35px leading-10 lg:leading-normal lg:text-40px xl:text-45px text-white mx-auto text-center px-4 sm:px-10 pb-6">
                {hero.heading}
              </h2>
              <div className="lg:px-52 md:px-28 px-16">
                <p className="text-base font-mono text-color-9 mx-auto max-w-[1012px] border-t border-color-9 text-center pt-3 ">
                  {hero.belowLine}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:gap-20 -mt-40">
          <Objective card={card} />

          

          {/* <Strategy />
                <Action />
                <Result /> */}

<div className={`${classes.About_team} `}>
            <div className="main_container_x">
              <h2 className=" text-center xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px font-mono font-semibold">
                {heading}
              </h2>
              <div className="">
                <div className="About_team_box text-center grid sm:grid-cols-2 md:grid-cols-3 gap-20">
                  {profile?.map((data: any, index: any) => (
                    <div key={`${index}_About_team_2`}>
                      <div className="About_img_box relative mx-auto md:mb-14 mb-8 max-w-[430px]">
                        <div
                          className={`${classes.Team_img_circle} absolute  bottom-0`}
                        ></div>
                        <Image
                          src={urlFor(data.image).url()}
                          width={481}
                          height={481}
                          className={`${classes.Team_img} relative z-10 mx-auto `}
                          alt=""
                        />
                      </div>

                      <h3 className="text-25px md:text-35px font-semibold font-mono text-color-1">
                        {data.name}{" "}
                      </h3>
                      <p className="text-lg font-normal font-mono text-color-1">
                        {data.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleIntro;
