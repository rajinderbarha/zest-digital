import  { useEffect } from "react";
import classes from "./Career.module.css";
import Image from "next/image";
import { CareerProps } from "../../../lib/interface";
import { urlFor } from "../../../lib/sanity.client";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Career: React.FC<CareerProps> = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <div className={`${classes.Career} `}>
      {data?.map((careerData, index) => {
        const { title, description, image } = careerData.card;

        return (
          <div key={`${index}_Career`} className="main_padding">
            <div className="main_container">
              <div className={`${classes.Careerbanner}`}>
                <div className="">
                  <h1 className={`${classes.carrer_heading} min-tb:max-tb:max-w-[343px]  font-mono font-semibold `} data-aos="fade">
                    {careerData.heading}
                  </h1>
                </div>
              </div>
            </div>
            <div className="thanks_for_interest lg:mt-0 min-tb:max-tb:mt-[0] sm:mt-[0] mt-[00px] relative">
            <div className={`${classes.career_img}  absolute  w-full`}>
                    <div className="max-w-[1335px] mx-auto w-full">
                    <Image
                      src={urlFor(image).url()}
                      alt=""
                      width={294}
                      height={294}
                      className="ms-auto"
                      />
                      </div>
                  </div>
              <div
                className={`${classes.career_box}  main_container lg:rounded-[30px] md:rounded-[20px] rounded-[15px] relative overflow-hidden`} data-aos="fade-up"
              >
                <div
                  className={`${classes.career_container} main_padding max-w-[1335px] mx-auto relative`}
                >
                  <div className={`${classes.career_content} text-white font-mono text-center  mx-auto  `}>
                    <h2 className={`${classes.career_title}  font-semibold `} data-aos="fade-up">
                      {title}
                    </h2>
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
};

export default Career;
