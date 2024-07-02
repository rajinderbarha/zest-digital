import React, { useEffect } from "react";
import classes from "./Career.module.css";
import Image from "next/image";
import { CareerProps } from "../../../lib/interface";
import { urlFor } from "../../../lib/sanity.client";
import image_bg_left from '../../assets/images/Gradient_calendar_new_transparent_right.png'
import image_bg_right from '../../assets/images/Gradient_calendar_new_transparent_left.png'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Career: React.FC<CareerProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    // <div className={`Career xl:mb-[160px] lg:mb-[140px] md:mb-[120px] min-tb:max-tb:mb-[80px] sm:mb-[90px] mb-[60px]`}>
    <div className={`${classes.Career} `}>
      {data?.map((careerData, index) => {
        const { title, description, image } = careerData.card;

        return (
          <div key={`${index}_Career`} className="main_padding">
            <div className="main_container">
              <div className={`${classes.Careerbanner}`}>
                <div className="">
                  {/* <h1 className="font-mono font-semibold xl:text-55px lg:text-50px md:text-40px min-tb:max-tb:text-[30px] min-tb:max-tb:max-w-[343px] sm:text-35px text-[22px] mb-5 "> */}
                  <h1 className={`${classes.carrer_heading} min-tb:max-tb:max-w-[343px]  font-mono font-semibold `} data-aos="fade">
                    {careerData.heading}
                  </h1>
                </div>
              </div>
            </div>
            <div className="thanks_for_interest lg:mt-0 min-tb:max-tb:mt-[0] sm:mt-[0] mt-[00px]">
              <div
                className={`${classes.SingleIntro}  main_container lg:rounded-[30px] md:rounded-[20px] rounded-[15px] relative`} data-aos="fade-up"
              >
                {/* <div className={`${classes.bg_left}`}>
                  <Image src={image_bg_left} alt=""/>
                </div>
                <div className={`${classes.bg_right}`}>
                  <Image src={image_bg_right} alt=""/>
                </div> */}

                <div
                  className={`${classes.single_container} main_padding max-w-[1335px] mx-auto relative`}
                >
                  <div
                    className={`${classes.grow_img}  absolute  `}
                  >
                    <Image
                      src={urlFor(image).url()}
                      alt=""
                      width={294}
                      height={294}
                      className=""
                    />
                  </div>
                  <div className={`${classes.career_content} text-white font-mono text-center  mx-auto  `}>
                    {/* <h2 className="xl:text-45px lg:text-40px md:text-35px min-tb:max-tb:text-[30px] sm:text-30px text-[22px] font-semibold  lg:mb-[60px] md:mb-[40px] mb-[20px]"> */}
                    <h2 className={`${classes.career_title}  font-semibold `} data-aos="fade-up">
                      {title}
                    </h2>
                    {/* <p className="text-[12px] md:text-25px min-tb:max-tb:text-[20px] lg:text-30px  text-md mx-auto"> */}
                    <p className={`${classes.career_desc}  text-md mx-auto`} data-aos="fade-up">
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
