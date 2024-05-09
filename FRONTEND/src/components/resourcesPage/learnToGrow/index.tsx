import React from "react";
import classes from "./learnToGrow.module.css";
import how_to_grow from "../../../assets/images/how_to_grow.png";
import down_arrow from "../../../assets/images/grow_down.png";
import Image from "next/image";
import Logo_moving from "@/common/Logo_moving";
import Climate_action from "@/common/Climate_action";
import Growth_engine from "@/common/Growth_engine";
import { urlFor } from "../../../../lib/sanity.client";
function LearnToGrow({ data }: any) {
  console.log("tools =", data );
  
  return (
    <>
      <div className="main_padding">


        <div
          className={`${classes.SingleIntro}  main_container  h-100 rounded-[20px] md:rounded-30px`}
        >
          <div
            className={`${classes.single_container}  max-w-[1335px] mx-auto  pt-[88px] md:pb-[564px] pb-[400px] relative`}
          >
            <div
              className={`${classes.grow_img}  absolute max-w-[200px] md:max-w-[250px] lg:max-w-[300px] lg:max-h-[300px]`}
            >
              <Image
                src={urlFor(data.hero.image).url()}
                alt="img"
                width={300}
                height={300}
              />
            </div>
            <div className="text-white font-mono text-center max-w-[1172px] mx-auto p-6 md:p-10 ">
              <h2 className="xl:text-45px lg:text-40px md:text-35px text-30px font-semibold">
                {data.hero.title}
              </h2>
              <p className="lg:text-30px md:text-25px text-[20px] text-md pt-[40px] md:pb-[40px] pb-[15px]">
                {data.hero.description}
              </p>
            </div>
            <div className="md:max-w-[60px] max-w-[40px] mx-auto group ">
              <a href="#tools  ">

                <Image
                  src={urlFor(data.hero.icon).url()}
                  alt="img"
                  width={60}
                  height={60}
                  className="mx-auto group-hover:hidden"
                />
                <Image
                  src={urlFor(data.hero.hovericon).url()}
                  alt="img"
                  width={60}
                  height={60}
                  className="mx-auto hidden group-hover:block"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="main_padding">
          <div className="max-w-[1335px] mx-auto -mt-[250px] md:-mt-[279px] " id="tools">
            <h2 className="font-mono font-semibold xl:text-45px lg:text-40px text-35px text-white mx-auto text-center">
              Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-[30px] gap-[20px] max-w-[1355px] lg:px-[50px] md:px-[30px] sm:px-[20px] px-[0px] font-mono mx-auto mt-[40px] md:mt-[80px]">
              {data.tool.map((item: any, index: number) => {
                const data = {
                  ...item,
                  buttonLink: `/resources?popup=${item.buttonLink}`,
                };

                return (
                  <>
                    <Growth_engine
                      props={data}
                      has_image={false}
                      shadow_right={index % 2 === 0}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="xl:mt-[200px] lg:mt-[170px] md:mt-[120px] sm:mt-[80px] mt-[50px] xl:mb-[190px] lg:mb-[160px] md:mb-[110px] sm:mb-[80px] mb-[50px]">


        <Logo_moving LogoMovdata={data.brandList.map((a: any) => a)} />
      </div>
    </>
  );
}

export default LearnToGrow;
