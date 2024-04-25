import React from "react";
import classes from "./Career.module.css";
import Image from "next/image";
import { CareerProps } from "../../../lib/interface";
import { urlFor } from "../../../lib/sanity.client";

const Career: React.FC<CareerProps> = ({ data }) => {
  return (
    <div className={`Career xl:mb-[160px] lg:mb-[140px] md:mb-[120px] sm:mb-[90px] mb-[60px]`}>
      {data?.map((careerData, index) => {
        const { title, description, image } = careerData.card;

        return (
          <div key={`${index}_Career`} className="main_padding">
            <div className="main_container">
              <div className={`${classes.Careerbanner}`}>
                <div className="">
                  <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px sm:text-35px text-[25px] mb-5 ">
                    {careerData.heading}
                  </h1>
                </div>
              </div>
            </div>
            <div className="thanks_for_interest lg:mt-0 sm:mt-[100px] mt-[00px]">
              <div
                className={`${classes.SingleIntro}  main_container md:rounded-30px rounded-[20px]`}
              >
                <div
                  className={`${classes.single_container} max-w-[1335px] mx-auto lg:pt-[170px] md:pt-[130px] pt-[80px] lg:pb-[140px] mb:pb-[90px] pb-[50px] relative`}
                >
                  <div
                    className={`${classes.grow_img}  absolute max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-max `}
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt=""
                      width={280}
                      height={280}
                      className=""
                    />
                  </div>
                  <div className="text-white font-mono text-center max-w-[1172px] mx-auto p-6 md:p-10 ">
                    <h2 className="xl:text-45px lg:text-40px md:text-35px sm:text-30px text-25px font-semibold  lg:mb-[60px] md:mb-[40px] mb-[20px]">
                      {title}
                    </h2>
                    <p className="text-20px md:text-25px lg:text-30px  text-md ">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Career;
